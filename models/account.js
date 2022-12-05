'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Account.belongsToMany(models.Product, {
        through: 'accountProducts', 
        foreignKey: {
          name: 'account_id'
        },
        as: 'Chart',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      Account.hasMany(models.review, {
        foreignKey: {
          name: 'account_id', 
          allowNull: false, 
          defaultValue: '00000000-0000-0000-0000-000000000000'
        }
      })
    }
  }
  Account.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });

  return Account;
};