'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Taco extends Model {
    static associate(models) {
  
      // define association here
      Taco.hasMany(models.Sauce, {
        foreignKey: 'tacoId',
        as: 'sauces'
      })
  
    }
  }
  Taco.init({
    type: DataTypes.STRING,
    count: DataTypes.INTEGER,
    topping: DataTypes.STRING,

  }, {
    sequelize,
    modelName : 'Taco',
  });
  return Taco;
};