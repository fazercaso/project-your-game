'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Games', [
      {
        user_id: 1,
        score: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        score: 1200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        score: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  }
};
