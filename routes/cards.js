const router = require('express').Router();

const { cards } = require('../data/cards.js');

router.get('/cards', (req, res) => {
  res.status(200).json(cards);
});

module.exports = router;
