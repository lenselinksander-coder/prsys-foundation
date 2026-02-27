export type Domain = 'marketing' | 'social' | 'digital' | 'finance' | 'zorg' | 'sociaal_domein';
export type Level = 'mbo4' | 'hbo' | 'universiteit';
export type Role = 'student' | 'docent' | 'begeleider';

export interface CompareInput {
  domain: Domain;
  level: Level;
  role: Role;
  caseId: string;
}

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

export interface CompareOutput {
  caseId: string;
  domain: Domain;
  plainAiTendencies: PlainAiProfile;
  orfheussChecks: OrfheussResult;
}
