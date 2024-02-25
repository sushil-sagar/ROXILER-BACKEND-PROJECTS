import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Code to list all transactions with search and pagination
    res.status(200).json({ message: 'List of transactions' });
  } catch (error) {
    console.error('Error listing transactions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
