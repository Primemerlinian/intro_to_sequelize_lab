'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Taco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Taco.init({
    type: DataTypes.STRING,
    count: DataTypes.INTEGER,
    topping: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Taco',
  });
  return Taco;
};