import dns from 'node:dns';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';

import healthRoutes from './routes/health.routes.js';
import spaceRoutes from './routes/space.routes.js';

dns.setServers(['1.1.1.1', '8.8.8.8']);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/health', healthRoutes);
app.use('/api/spaces', spaceRoutes);

connectDB();

app.get('/', (req, res) => {
  res.json({
    message: 'NexaSpace Backend is Running 🚀',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
