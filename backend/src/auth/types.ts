import type { Role, Level } from '../types.js';

export interface User {
  id: string;
  email: string;
  passwordHash: string; // SHA-256 hex
  role: Role;
  level: Level;
  institution_id: string;
  ai_gate_completed: boolean;
  createdAt: string; // ISO 8601
}

export interface JwtPayload {
  sub: string; // user.id
  email: string;
  role: Role;
  level: Level;
  institution_id: string;
  ai_gate_completed: boolean;
  iat: number;
  exp: number;
}
