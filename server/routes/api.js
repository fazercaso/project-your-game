const router = require('express').Router();
const access = require('../middlewares/access');

const { Game } = require('../db/models');
router.get('/stats', access('user'), async (req, res) => {
  try {
    const stats = await Game.findAll({
      where: {
        user_id: res.locals.user.id
      }
    });

    res.status(200).json({ stats });
    return;
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
