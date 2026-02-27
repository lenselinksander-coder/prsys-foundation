import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import taogateRouter from './routes/taogate.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;

// In production on Replit: serve from same origin — no CORS needed.
// In dev: allow Vite devserver.
const isDev = process.env.NODE_ENV !== 'production';
if (isDev) {
  app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }));
} else {
  app.use(cors());
}

app.use(express.json());

// API routes
app.use('/api/taogate', taogateRouter);
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Serve React frontend (production build)
const distDir = path.resolve(__dirname, '../../web/dist');
app.use(express.static(distDir));

// SPA fallback — all non-API routes go to index.html (Express 5 wildcard syntax)
app.get('/{*path}', (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`PRSYS draait op http://0.0.0.0:${PORT}`);
});
