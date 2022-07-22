'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Topics', [
      {
        title: 'Песок',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Шопинг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Эльбрус',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'IT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  }
};
