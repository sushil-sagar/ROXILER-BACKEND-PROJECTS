import { listTransactions } from './listTransactionsController.js';
import { getStatistics } from './statisticsController.js';
import { getBarChartData } from './barChartController.js';
import { getPieChartData } from './pieChartController.js';

export const getCombinedData = async (req, res) => {
  try {
    const { month } = req.query;

    const transactions = await listTransactions({ page: 1, perPage: 10, search: '' });
    const statistics = await getStatistics({ month });
    const barChartData = await getBarChartData({ month });
    const pieChartData = await getPieChartData({ month });

    const combinedData = {
      transactions,
      statistics,
      barChartData,
      pieChartData,
    };

    res.status(200).json(combinedData);
  } catch (error) {
    console.error('Error getting combined data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};