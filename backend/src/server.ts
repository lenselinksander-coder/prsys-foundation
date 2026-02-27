import express from 'express';
import cors from 'cors';
import taogateRouter from './routes/taogate.js';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }));
app.use(express.json());

app.use('/api/taogate', taogateRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`ORFHEUSS backend draait op http://localhost:${PORT}`);
});
