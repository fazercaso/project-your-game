const router = require('express').Router();
const access = require('../middlewares/access');

const { Game } = require('../db/models');
router.route('/stats')
  .get(access('user'), async (req, res) => {
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
  })
  .post(access('user'), async (req, res) => {
    try {
      const { score } = req.body;
      const scoreNumber = Number(score);

      if (!scoreNumber || isNaN(scoreNumber)) {
        res.status(400).json({ message: 'Score is not a correct number!' + scoreNumber });
        return;
      }

      const stats = await Game.create({
        user_id: res.locals.user.id,
        score: scoreNumber,
      });
      await stats.save();

      res.status(200).json({ message: 'Game data saved!' });
      return;
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
