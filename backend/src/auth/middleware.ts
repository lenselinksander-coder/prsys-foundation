import jwt from 'jsonwebtoken';
import type { Request, Response, NextFunction } from 'express';
import type { JwtPayload } from './types.js';

// Augment Express Request with req.user
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

if (!process.env.JWT_SECRET) {
  console.warn('[auth] WARNING: JWT_SECRET niet ingesteld. Auth zal falen.');
}

const TOKEN_EXPIRY_SECONDS = 8 * 60 * 60; // 8 hours

export function signToken(payload: Omit<JwtPayload, 'iat' | 'exp'>): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET niet geconfigureerd');
  return jwt.sign(payload, secret, { expiresIn: TOKEN_EXPIRY_SECONDS });
}

export function verifyToken(token: string): JwtPayload | null {
  const secret = process.env.JWT_SECRET;
  if (!secret) return null;
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch {
    return null;
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Geen of ongeldig Authorization-header' });
    return;
  }
  const token = authHeader.slice(7);
  const payload = verifyToken(token);
  if (!payload) {
    res.status(401).json({ error: 'Token ongeldig of verlopen' });
    return;
  }
  req.user = payload;
  next();
}

export function aiGateMiddleware(req: Request, res: Response, next: NextFunction): void {
  if (!req.user?.ai_gate_completed) {
    res.status(403).json({ error: 'AI-gate niet voltooid. Doorloop eerst de AI-gate.' });
    return;
  }
  next();
}
