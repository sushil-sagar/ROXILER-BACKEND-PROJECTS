import express from 'express';
import initDatabaseRoute from './routes/initDatabaseRoute.js';
import listTransactionsRoute from './routes/listTransactionsRoute.js';
import statisticsRoute from './routes/statisticsRoute.js';
import barChartRoute from './routes/barChartRoute.js';
import pieChartRoute from './routes/pieChartRoute.js';
import combinedDataRoute from './routes/combinedDataRoute.js';

const app = express();

// Define routes
app.use('/api/init-database', initDatabaseRoute);
app.use('/api/list-transactions', listTransactionsRoute);
app.use('/api/statistics', statisticsRoute);
app.use('/api/bar-chart', barChartRoute);
app.use('/api/pie-chart', pieChartRoute);
app.use('/api/combined-data', combinedDataRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
