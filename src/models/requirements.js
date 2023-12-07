// models/requirements.js
import { Sequelize, DataTypes } from 'sequelize';
import dbConnection from '../config/db.js';

const Requirements = dbConnection.define('Requirements', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  gameId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Requirements;
