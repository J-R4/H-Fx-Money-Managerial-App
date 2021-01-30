'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.addColumn('UserBanks', 'balance', Sequelize.INTEGER)
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('UserBanks', 'balance', null)
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
