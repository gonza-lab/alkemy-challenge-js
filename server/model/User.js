'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsTo(models.Role, { as: 'role', foreignKey: {name: 'roleId' }});
      // User.hasMany(models.Post, { foreignKey: 'userId' });
      // User.hasMany(models.PostReactionUser, { foreignKey: 'userId' });
    }
  };
  User.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    alias: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};