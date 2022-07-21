require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static content: web-client path AS virtual, server path
app.use(express.static(path.resolve('public')));

require('./middlewares/session')(app);
require('./middlewares/routes')(app);

const { sequelize } = require('./db/models');

// app.locals.settings.SERVER_PORT & etc.
app.listen(process.env.SERVER_PORT, async () => {
  console.log(`Server started at port: ${process.env.SERVER_PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});