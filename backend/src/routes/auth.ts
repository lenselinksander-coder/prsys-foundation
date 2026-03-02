import { Router } from 'express';
import type { Request, Response } from 'express';
import { findByEmail, createUser, verifyPassword, seedDevUsers } from '../auth/userStore.js';
import { signToken, authMiddleware } from '../auth/middleware.js';

const router = Router();
const isDev = process.env.NODE_ENV !== 'production';

// POST /api/auth/login
router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body as { email?: string; password?: string };

  if (!email || typeof email !== 'string' || email.length > 254) {
    res.status(400).json({ error: 'Ongeldig e-mailadres' });
    return;
  }
  if (!password || typeof password !== 'string' || password.length < 4) {
    res.status(400).json({ error: 'Wachtwoord te kort' });
    return;
  }

  const user = findByEmail(email);
  // Always attempt verify to prevent timing-based email enumeration
  const passwordOk = user ? verifyPassword(user, password) : false;

  if (!user || !passwordOk) {
    res.status(401).json({ error: 'E-mail of wachtwoord onjuist' });
    return;
  }

  const token = signToken({
    sub: user.id,
    email: user.email,
    role: user.role,
    level: user.level,
    institution_id: user.institution_id,
    ai_gate_completed: false,
  });

  res.json({ token });
});

// GET /api/auth/me
router.get('/me', authMiddleware, (req: Request, res: Response) => {
  const { sub, email, role, level, institution_id, ai_gate_completed, exp } = req.user!;
  res.json({ sub, email, role, level, institution_id, ai_gate_completed, exp });
});

// POST /api/auth/ai-gate-complete
// Issues a new token with ai_gate_completed: true
router.post('/ai-gate-complete', authMiddleware, (req: Request, res: Response) => {
  const current = req.user!;
  const token = signToken({
    sub: current.sub,
    email: current.email,
    role: current.role,
    level: current.level,
    institution_id: current.institution_id,
    ai_gate_completed: true,
  });
  res.json({ token });
});

// POST /api/auth/seed — dev only
router.post('/seed', (req: Request, res: Response) => {
  if (!isDev) {
    res.status(404).json({ error: 'Niet beschikbaar in productie' });
    return;
  }
  const results = seedDevUsers();
  res.json({ seeded: results });
});

export default router;
