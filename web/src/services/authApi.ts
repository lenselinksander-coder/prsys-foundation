import type { Role, Level } from '../types';

export interface LoginResponse {
  token: string;
}

export interface DecodedToken {
  sub: string;
  email: string;
  role: Role;
  level: Level;
  institution_id: string;
  ai_gate_completed: boolean;
  iat: number;
  exp: number;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(err.error ?? `Inloggen mislukt (${res.status})`);
  }
  return res.json() as Promise<LoginResponse>;
}

export async function completeAiGate(): Promise<LoginResponse> {
  const token = getStoredToken();
  if (!token) throw new Error('Niet ingelogd');
  const res = await fetch('/api/auth/ai-gate-complete', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('AI-gate voltooiing mislukt');
  return res.json() as Promise<LoginResponse>;
}

// Decode JWT payload without crypto verification (server validates)
export function decodeToken(token: string): DecodedToken | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const payload = JSON.parse(atob(parts[1]));
    return payload as DecodedToken;
  } catch {
    return null;
  }
}

export function isTokenValid(token: string): boolean {
  const payload = decodeToken(token);
  if (!payload) return false;
  // 30 second buffer to avoid edge-case expiry during a request
  return payload.exp > Date.now() / 1000 + 30;
}

export function getStoredToken(): string | null {
  return sessionStorage.getItem('prsys-jwt');
}

export function storeToken(token: string): void {
  sessionStorage.setItem('prsys-jwt', token);
}

export function clearToken(): void {
  sessionStorage.removeItem('prsys-jwt');
}
