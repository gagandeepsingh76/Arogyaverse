import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { router as apiRouter } from './src/routes/api.mjs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('trust proxy', true);

// Basic security and performance middleware
app.use(helmet());
app.use(compression());

// CORS
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow non-browser clients
      if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);

// Logging only in dev
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Request parsing and basic rate limit
app.use(express.json({ limit: '1mb' }));
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    limit: 120,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// Health endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// API routes
app.use('/api', apiRouter);

// Static serving of built frontend (if present)
const distDir = path.resolve(__dirname, '../dist');
app.use(express.static(distDir, { index: false, extensions: ['html'] }));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(distDir, 'index.html'), (err) => {
    if (err) next();
  });
});

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API server listening on http://localhost:${port}`);
});

