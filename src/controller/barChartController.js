export const getBarChartData = async ({ month }) => {
  // Validate the month input
  if (!/^(0[1-9]|1[0-2])$/.test(month)) {
    throw new Error('Invalid month format. Month should be between 01 and 12');
  }

  const priceRanges = [
    { min: 0, max: 100, label: '0 - 100' },
    { min: 101, max: 200, label: '101 - 200' },
    { min: 201, max: 300, label: '201 - 300' },
    { min: 301, max: 400, label: '301 - 400' },
    { min: 401, max: 500, label: '401 - 500' },
    { min: 501, max: 600, label: '501 - 600' },
    { min: 601, max: 700, label: '601 - 700' },
    { min: 701, max: 800, label: '701 - 800' },
    { min: 801, max: 900, label: '801 - 900' },
    { min: 901, max: Number.MAX_SAFE_INTEGER, label: '901-above' },
  ];

  const barChartData = {};
  priceRanges.forEach(range => {
    barChartData[range.label] = 0;
  });

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

  transactions.forEach(transaction => {
    const price = transaction.price;
    const range = priceRanges.find(range => price >= range.min && price <= range.max);
    if (range) {
      barChartData[range.label]++;
    }
  });

  return barChartData;
};