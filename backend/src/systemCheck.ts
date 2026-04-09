import { existsSync, readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

type CheckStatus = 'ok' | 'degraded' | 'error';

interface EnvCheck {
  status: CheckStatus;
  jwt_secret: boolean;
  anthropic_api_key: boolean;
}

interface UserStoreCheck {
  status: CheckStatus;
  users?: number;
  message?: string;
}

interface OorfheussCheck {
  status: CheckStatus;
}

interface SystemCheck {
  status: CheckStatus;
  node: string;
  uptime_s: number;
  memory_mb: number;
}

export interface SystemCheckResult {
  status: CheckStatus;
  timestamp: string;
  checks: {
    env: EnvCheck;
    userStore: UserStoreCheck;
    orfheuss: OorfheussCheck;
    system: SystemCheck;
  };
}

function checkEnv(): EnvCheck {
  const jwtSecret = !!process.env.JWT_SECRET;
  const anthropicKey = !!process.env.ANTHROPIC_API_KEY;

  let status: CheckStatus = 'ok';
  if (!jwtSecret) status = 'error';
  else if (!anthropicKey) status = 'degraded';

  return { status, jwt_secret: jwtSecret, anthropic_api_key: anthropicKey };
}

function checkUserStore(): UserStoreCheck {
  const storePath = process.env.USERS_FILE_PATH
    ?? path.resolve(__dirname, '../../../data/users.json');

  if (!existsSync(storePath)) {
    return { status: 'ok', users: 0, message: 'users.json bestaat nog niet (leeg systeem)' };
  }

  try {
    const raw = readFileSync(storePath, 'utf-8');
    const data = JSON.parse(raw) as { users: unknown[] };
    return { status: 'ok', users: Array.isArray(data.users) ? data.users.length : 0 };
  } catch {
    return { status: 'error', message: 'users.json bestaat maar is niet leesbaar' };
  }
}

function checkOrfheuss(): OorfheussCheck {
  // ORFHEUSS engine is statisch geïmporteerd in routes/taogate.ts.
  // Als de server draait, is de module geladen — dit is altijd ok.
  return { status: 'ok' };
}

function checkSystem(): SystemCheck {
  const mem = process.memoryUsage();
  return {
    status: 'ok',
    node: process.version,
    uptime_s: Math.round(process.uptime()),
    memory_mb: Math.round(mem.rss / 1024 / 1024),
  };
}

export function runSystemCheck(): SystemCheckResult {
  const env = checkEnv();
  const userStore = checkUserStore();
  const orfheuss = checkOrfheuss();
  const system = checkSystem();

  const subStatuses = [env.status, userStore.status, orfheuss.status, system.status];
  let overallStatus: CheckStatus = 'ok';
  if (subStatuses.includes('error')) overallStatus = 'error';
  else if (subStatuses.includes('degraded')) overallStatus = 'degraded';

  return {
    status: overallStatus,
    timestamp: new Date().toISOString(),
    checks: { env, userStore, orfheuss, system },
  };
}
