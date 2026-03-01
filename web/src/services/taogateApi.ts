import type { Domain, Level, Role } from '../types';

export interface PlainAiProfile {
  optimisesFor: string[];
  ignoresRisks: string[];
  typicalAdvice: string;
}

export interface OrfheussResult {
  requiredChecks: string[];
  wouldBlock: boolean;
  reasonIfBlock: string;
  additionalQuestions: string[];
}

export interface CompareResult {
  caseId: string;
  domain: Domain;
  plainAiTendencies: PlainAiProfile;
  orfheussChecks: OrfheussResult;
}

export async function fetchCompare(params: {
  domain: Domain;
  level: Level;
  role: Role;
  caseId: string;
}): Promise<CompareResult> {
  const res = await fetch('/api/taogate/compare', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error ?? `Server error ${res.status}`);
  }

  return res.json() as Promise<CompareResult>;
}

export interface ClaudiusResult {
  caseId: string;
  domain: Domain;
  orfheussChecks: OrfheussResult;
}

export async function fetchClaudius(params: {
  domain: Domain;
  level: Level;
  role: Role;
  caseId: string;
  situation: string;
}): Promise<ClaudiusResult> {
  const res = await fetch('/api/taogate/claudius', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error ?? `Server error ${res.status}`);
  }

  return res.json() as Promise<ClaudiusResult>;
}
