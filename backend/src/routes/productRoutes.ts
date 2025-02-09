// routes/productRoutes.ts
import { Router } from 'express';
import { addProduct } from '../controllers/productController';

const router = Router();

router.post('/products', addProduct);

export default router;