'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class accountProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  accountProduct.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    quantity: DataTypes.INTEGER,
    account_id: DataTypes.UUID,
    product_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'accountProduct',
  });
  return accountProduct;
};