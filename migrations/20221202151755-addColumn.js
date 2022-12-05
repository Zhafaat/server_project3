'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Accounts', 'role', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "user"
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Account', 'role', { /* query options */ });
  }
};
