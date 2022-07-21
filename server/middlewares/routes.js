// Импорт маршрутов.
module.exports = (app) => {
  app.use('/',     require('../routes/index'));   // Основные странички
  app.use('/sign', require('../routes/sign'));    // Вход/Выход & Регистрация
};
