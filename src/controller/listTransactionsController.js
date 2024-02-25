export const listTransactions = async ({ page = 1, perPage = 10, search = '' }) => {
  const offset = (page - 1) * perPage;

  return Transaction.findAll({
    where: {
      [Sequelize.Op.or]: [
        { title: { [Sequelize.Op.like]: `%${search}%` } },
        { description: { [Sequelize.Op.like]: `%${search}%` } },
        { price: { [Sequelize.Op.like]: `%${search}%` } }
      ]
    },
    offset,
    limit: perPage
  });
};