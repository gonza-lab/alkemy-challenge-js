'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Supermercado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sueldo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Servicios',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Servicios digitales',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Electrodomesticos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
