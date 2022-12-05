'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accounts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      firstName: {
        allowNull: false,
        defaultValue:"",
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false,
        defaultValue: "",
        type: Sequelize.STRING
      },
      displayName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
      },
      password: {
        allowNull: false,
        defaultValue: "",
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Accounts');
  }
};