'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const record = [
      {
        bank_name: 'Bank Cece Asi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bank_name: 'Bank National Ikan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bank_name: 'Bank Mandi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bank_name: 'Bank Bukopi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    return queryInterface.bulkInsert('Banks', record,{})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Banks', null, {})
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
}
};
