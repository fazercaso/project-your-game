'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Topics', [
      {
        title: 'Немного юмора',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'А как это по-русски?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  }
};
