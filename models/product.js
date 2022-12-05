'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Account, {
        through: 'accountProducts', 
        foreignKey: {
          name: 'product_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      Product.hasMany(models.review, {
        foreignKey: {
          name: 'product_id', 
          allowNull: false, 
          defaultValue: '00000000-0000-0000-0000-000000000000'
        }
      }),
      Product.belongsToMany(models.Categories, {
        through: 'productCategories', 
        foreignKey: {
          name: 'product_id'
        }
      })

    }
  }
  Product.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imageURL: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    description: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    dimention: DataTypes.STRING,
    colours: DataTypes.STRING,
    material: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};