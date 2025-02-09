// controllers/userController.ts
import { Request, Response } from 'express';
import { fetchFromTable } from '../services/supabaseService';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await fetchFromTable<any>('users');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};