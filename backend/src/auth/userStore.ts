import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { createHash, randomUUID } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import type { User } from './types.js';
import type { Role, Level } from '../types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Resolve to backend/data/users.json (from dist/auth/ at runtime, or src/auth/ in tsx dev)
const STORE_PATH =
  process.env.USERS_FILE_PATH ??
  path.resolve(__dirname, '../../../data/users.json');

interface UsersFile {
  users: User[];
}

function readStore(): UsersFile {
  if (!existsSync(STORE_PATH)) {
    return { users: [] };
  }
  try {
    const raw = readFileSync(STORE_PATH, 'utf-8');
    return JSON.parse(raw) as UsersFile;
  } catch {
    return { users: [] };
  }
}

function writeStore(data: UsersFile): void {
  const dir = path.dirname(STORE_PATH);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(STORE_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export function hashPassword(password: string): string {
  return createHash('sha256').update(password).digest('hex');
}

export function findByEmail(email: string): User | undefined {
  const { users } = readStore();
  return users.find(u => u.email.toLowerCase() === email.toLowerCase());
}

export function createUser(params: {
  email: string;
  password: string;
  role: Role;
  level: Level;
  institution_id: string;
}): User {
  const store = readStore();
  const existing = store.users.find(
    u => u.email.toLowerCase() === params.email.toLowerCase()
  );
  if (existing) throw new Error(`Gebruiker bestaat al: ${params.email}`);

  const user: User = {
    id: randomUUID(),
    email: params.email.toLowerCase(),
    passwordHash: hashPassword(params.password),
    role: params.role,
    level: params.level,
    institution_id: params.institution_id,
    ai_gate_completed: false,
    createdAt: new Date().toISOString(),
  };
  store.users.push(user);
  writeStore(store);
  return user;
}

export function verifyPassword(user: User, password: string): boolean {
  return hashPassword(password) === user.passwordHash;
}

const SEED_USERS: Array<{
  email: string;
  password: string;
  role: Role;
  level: Level;
}> = [
  { email: 'student.mbo@test.nl', password: 'test1234', role: 'student', level: 'mbo4' },
  { email: 'student.hbo@test.nl', password: 'test1234', role: 'student', level: 'hbo' },
  { email: 'student.wo@test.nl', password: 'test1234', role: 'student', level: 'universiteit' },
  { email: 'docent@test.nl', password: 'test1234', role: 'docent', level: 'hbo' },
];

export function seedDevUsers(): Array<{ email: string; status: 'created' | 'exists' }> {
  return SEED_USERS.map(u => {
    try {
      createUser({ ...u, institution_id: 'test' });
      return { email: u.email, status: 'created' as const };
    } catch {
      return { email: u.email, status: 'exists' as const };
    }
  });
}
