const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Figure extends Model {}

Figure.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rare: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'figure',
  }
);

module.exports = Figure;
