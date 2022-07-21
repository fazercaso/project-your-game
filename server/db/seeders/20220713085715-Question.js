'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      // Topic #1
      {
        topic_id: 1,
        question_point: 200,
        question_text: 'Именно этими инструментами роет себе могилу обжора.',
        answer_text: 'Вилкой и зубами',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 1,
        question_point: 400,
        question_text: 'Всем с детства знакома эта поучительная история о долгом пути хлебобулочного изделия к потребителю.',
        answer_text: 'Колобок',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 1,
        question_point: 600,
        question_text: 'Какой овощ отобрал у Паниковского Остап Бендер со словами: «Не делайте из еды культа»?',
        answer_text: 'Огурец',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 1,
        question_point: 800,
        question_text: '«И мудрый Вольтер сомневался в ядовитости...» этого напитка, - сказал Козьма Прутков. О каком напитке идет речь?',
        answer_text: 'Кофе',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 1,
        question_point: 1000,
        question_text: 'Если сердце жителя Древнего Египта переполнялось чувством негодования, то он мог нарисовать на подошвах сандалий некое изображение. Что он изображал: самого себя, своего врага, меч или свой талисман?',
        answer_text: 'Своего врага',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Topic #2
      {
        topic_id: 2,
        question_point: 200,
        question_text: 'Это легкое воздушное пирожное получило название от французского слова «поцелуй».',
        answer_text: 'Безе',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question_point: 400,
        question_text: 'Итальянское название этого блюда можно перевести на русский язык словом «тесто». А как его называем мы?',
        answer_text: 'Макароны',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question_point: 600,
        question_text: 'Татары, узбеки и казахи называют его «катык», грузины - «мацони», таджики - «чургот», египтяне - «лебен», а как его называют в Турции, Греции, Румынии и во всей Европе?',
        answer_text: 'Йогурт',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question_point: 800,
        question_text: 'По мнению французов, он может украсить любое блюдо.',
        answer_text: 'Гарнир',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question_point: 1000,
        question_text: 'Вспомните один музыкальный термин и попробуйте сказать по-французски буквально «кушанье из разных сортов мяса и зелени».',
        answer_text: 'Попурри',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
