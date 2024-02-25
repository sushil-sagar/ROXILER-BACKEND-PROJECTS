import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dateOfSale: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isSold: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

export default Transaction;
