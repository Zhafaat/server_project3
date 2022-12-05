'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      review.belongsTo(models.Product, {
        foreignKey: {
          name: 'product_id',
          allowNull: false
        }
      }),
      review.belongsTo(models.Account, {
        foreignKey: {
          name: 'account_id',
          allowNull: false
        }
      })
    }
  }
  review.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    review: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    product_id: DataTypes.UUID,
    account_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};