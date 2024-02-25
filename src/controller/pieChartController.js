export const getPieChartData = async ({ month }) => {
  // Validate the month input
  if (!/^(0[1-9]|1[0-2])$/.test(month)) {
    throw new Error('Invalid month format. Month should be between 01 and 12');
  }

  const transactions = await Transaction.findAll({
    where: {
      dateOfSale: {
        [Sequelize.Op.between]: [
          new Date(`${month}-01T00:00:00Z`),
          new Date(`${month}-31T23:59:59Z`),
        ],
      },
    },
  });
  const categoryCounts = {};
  transactions.forEach(transaction => {
    const category = transaction.category;
    categoryCounts[category] = (categoryCounts[category] || 0) + 1;
  });

  const pieChartData = Object.entries(categoryCounts).map(([category, count]) => ({
    category,
    count,
  }));

  return pieChartData;
};