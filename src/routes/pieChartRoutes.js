import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Code to generate pie chart data for selected month
    res.status(200).json({ message: 'Pie chart data for selected month' });
  } catch (error) {
    console.error('Error generating pie chart data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
