'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      // Topic #1
      {
        topic_id: 1,
        question_point: 400,
        question_text: 'С какого возраста начинается долгожительство?',
        answer_text: '90',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 1,
        question_point: 600,
        question_text: 'Как звали маму Македонского?',
        answer_text: 'Олимпиада',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 1,
        question_point: 800,
        question_text: 'Назовите, как именовали корабли США, созданные с целью полёта на Луну.',
        answer_text: 'Аполлон',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 1,
        question_point: 1000,
        question_text: 'Бонапарт получил этот статус позже других. Как называли такой статус?',
        answer_text: 'Ссыльный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Topic #2
      {
        topic_id: 2,
        question_point: 400,
        question_text: 'Что носит дьявол в известном фильме?',
        answer_text: 'Prada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question_point: 600,
        question_text: 'Что нужно Полине, чтобы успокоиться?',
        answer_text: 'Что-то купить',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question_point: 800,
        question_text: 'Джеймс Бонд предпочитал икру...',
        answer_text: 'Белуги',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question_point: 1000,
        question_text: 'Полина предпочитает...',
        answer_text: 'Предпочтения Джеймса Бонда',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //топик 3 
      {
        topic_id: 3,
        question_point: 400,
        question_text: 'Легенда капмуса...',
        answer_text: 'Бага',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 3,
        question_point: 600,
        question_text: 'Легенда сырокопченой...',
        answer_text: 'Саня',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 3,
        question_point: 800,
        question_text: 'Кто любит слово "ХОРОШЕЧНО"',
        answer_text: 'Аня',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 3,
        question_point: 1000,
        question_text: 'Когда вернется Леша?',
        answer_text: 'Никто не знает',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // тема 4 
      {
        topic_id: 4,
        question_point: 400,
        question_text: 'Назовите плащ, который создан из прорезиненной непромокаемой ткани.',
        answer_text: 'Макинтош',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 4,
        question_point: 600,
        question_text: 'Самый важный человек в жизни программиста?',
        answer_text: 'Эйчар',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 4,
        question_point: 800,
        question_text: 'Самый важный человек в жизни Санька?',
        answer_text: 'Артем',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 4,
        question_point: 1000,
        question_text: 'Первым программистом в истории человечества считается…',
        answer_text: 'Лавлейс',
        createdAt: new Date(),
        updatedAt: new Date(),
      },


    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
