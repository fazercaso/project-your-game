const router   = require('express').Router();
const access   = require('../middlewares/access');
const { User } = require('../db/models');
const bcrypt   = require('bcrypt');

const Signin = require('../views/Sign/Signin');
const Signup = require('../views/Sign/Signup');

router.route('/out')
  .get(access('user'), async (req, res) => {
    req.session.destroy();
    res.clearCookie(process.env.SESSION_COOKIE);
    res.redirect('/');
  });

router.route('/in')
  .get(access('guest'), (req, res) => {
    res.renderComponent(Signin);
  })
  .post(access('guest'), async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.isExists(email);

      if(!user) {
        res.redirect('/sign/up');
        return;
      }

      if(! await bcrypt.compare(password, user.password)){
        res.redirect('/sign/in');
        return;
      }

      req.session.userId = user.id;

      res.redirect('/profile');
    } catch(error){
      res.status(500).json(error);
    }
  });

router.route('/up')

  .get(access('guest'), (req, res) => {
    res.renderComponent(Signup);
  })

  .post(access('guest'), async (req, res) => {
  try {
    const { email, name, password }  = req.body;

    if (!password[0] || password[0] !== password[1]) {
      res.redirect('/sign/up');
      return;
    }

    if(await User.isExists(email)){
      res.redirect('/sign/up');
      return;
    }

    const hash = await bcrypt.hash(password[0], 2);
    const user = await User.create({ email, name, password:hash });
    await user.save();
    req.session.userId = user.id;

    res.redirect('/profile');
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
