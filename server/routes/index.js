const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'Wellcome!' });
});

module.exports = router;
