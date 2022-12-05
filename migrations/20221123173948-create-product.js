'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        allowNull: false,
        defaultValue: "",
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      imageURL: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "#"
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }, 
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      dimention: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
      },
      colours: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
      },
      material: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};