import express from 'express';
import { listTransactions } from '../controllers/listTransactionsController.js';

const router = express.Router();

router.get('/', listTransactions);

export default router;
