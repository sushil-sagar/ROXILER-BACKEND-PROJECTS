import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Code to fetch data from all APIs and combine the response
    res.status(200).json({ message: 'Combined data from all APIs' });
  } catch (error) {
    console.error('Error fetching combined data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
