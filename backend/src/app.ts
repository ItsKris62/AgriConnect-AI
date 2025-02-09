// Express app setup

// app.ts
import express from 'express';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';

const app = express();
app.use(express.json());

// Mount routes
app.use('/api', userRoutes);
app.use('/api', productRoutes);

export default app;