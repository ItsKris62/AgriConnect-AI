// Add a new product

// controllers/productController.ts
import { Request, res: Response } from 'express';
import { insertIntoTable } from '../services/supabaseService';

export const addProduct = async (req: Request, res: Response) => {
  const { name, description, quantity, unit_price, farmer_id, category_id } = req.body;

  try {
    const product = await insertIntoTable<any>('products', {
      name,
      description,
      quantity,
      unit_price,
      farmer_id,
      category_id,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product' });
  }
};