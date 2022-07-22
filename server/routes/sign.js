const router   = require('express').Router();
const access   = require('../middlewares/access');
const { User } = require('../db/models');
const bcrypt   = require('bcrypt');

router.route('/out')
  .get(access('user'), async (req, res) => {
    req.session.destroy();
    res.clearCookie(process.env.SESSION_COOKIE);

    res.status(200).json({ message: 'Session destroyed!' });
  });

router.route('/in')
  .get(access('guest'), (req, res) => {
    if (req.session.userId && res.locals.user) {

      const {
        id,
        email,
        name,
        createdAt,
        updatedAt,
      } = res.locals.user;

      res.status(200).json({
        user: {
          id,
          email,
          name,
          createdAt,
          updatedAt,
        }
      });

    } else {
      res.status(404).json({ message: 'Session not found!' });
    }
  })
  .post(access('guest'), async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.isExists(email);

      if(!user) {
        res.status(404).json({ message: 'User not found!' });
        return;
      }

      if(! await bcrypt.compare(password, user.password)){
        res.status(401).json({ message: 'Incorrect password!' });
        return;
      }

      req.session.userId = user.id;

      res.status(200).json({ message: 'Authorized!' });
    } catch(error){
      res.status(500).json(error);
    }
  });

router.route('/up')

  .get(access('guest'), (req, res) => {

    // Отдать данные?

  })

  .post(access('guest'), async (req, res) => {
  try {
    const { email, name, password }  = req.body;

    if (!password[0] || password[0] !== password[1]) {
      res.status(401).json({ message: 'Incorrect password!' });
      return;
    }

    if(await User.isExists(email)){
      res.status(409).json({ message: 'User exists!' });
      return;
    }

    const hash = await bcrypt.hash(password[0], 2);
    const user = await User.create({ email, name, password:hash });
    await user.save();
    req.session.userId = user.id;

    res.status(200).json({ message: 'Registered!' });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
