'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Operation.belongsTo(models.Category, { foreignKey: 'categoryId' });
      Operation.belongsTo(models.User, { foreignKey: 'userId' });
    }
  };
  Operation.init({
    amount: DataTypes.INTEGER,
    concept: DataTypes.STRING,
    date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Operation',
  });
  return Operation;
};