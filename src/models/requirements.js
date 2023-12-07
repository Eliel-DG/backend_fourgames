// models/requirements.js
import { Sequelize, DataTypes } from 'sequelize';
import dbConnection from '../config/db.js';

const Requirements = dbConnection.define('Requirements', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  gameId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Requirements;
