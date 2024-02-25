import express from 'express';
import pool from '../db.js';
import { THIRD_PARTY_API_URL } from '../config.js';
import fetchData from '../utils/fetchUtils.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await fetchData(THIRD_PARTY_API_URL);
    // Code to initialize database with seed data
    res.status(200).json({ message: 'Database initialized successfully' });
  } catch (error) {
    console.error('Error initializing database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
