import axios from 'axios';
import Transaction from '../models/Transaction.js';

export const initializeDatabase = async () => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const transactions = response.data;

    // Initialize the database with seed data
    await Transaction.bulkCreate(transactions);

    return { message: 'Database initialized successfully' };
  } catch (error) {
    console.error('Error initializing database:', error);
    throw new Error('Failed to initialize database');
  }
};