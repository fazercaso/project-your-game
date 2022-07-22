// Импорт маршрутов.
module.exports = (app) => {
  app.use('/',     require('../routes/index'));   // Основные странички
  app.use('/sign', require('../routes/sign'));    // Вход/Выход & Регистрация
  app.use('/game', require('../routes/tems'));
  app.use('/api',  require('../routes/api'));
};
