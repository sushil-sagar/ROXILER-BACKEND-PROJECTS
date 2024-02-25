export const getStatistics = async ({ month }) => {
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

  const totalSaleAmount = transactions.reduce((acc, transaction) => acc + transaction.price, 0);
  const totalSoldItems = transactions.filter(transaction => transaction.sold).length;
  const totalUnsoldItems = transactions.filter(transaction => !transaction.sold).length;

  return { totalSaleAmount, totalSoldItems, totalUnsoldItems };
};
