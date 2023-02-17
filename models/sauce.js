'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sauce extends Model {
    static associate(models) {
      
      // define association here
      Sauce.belongsTo(models.Taco, {
        foreignKey: 'tacoId',
      })
  
    }
  }
  Sauce.init({
    name: DataTypes.STRING,
    meal: {
      type: DataTypes.ENUM('Guac', 'Red', 'Green'),
      defaultValue: 'Guac'
    },
    tacoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Tacos',
        key: 'id'
      }
    }  }, {
    sequelize,
    modelName: 'Sauce',
  });
  return Sauce;
};