const router = require('express').Router();
const path = require('path');
const fs = require('fs');

async function readCards() {
  const cardsPath = path.join(__dirname, '../data/cards.json');
  try {
    const data = await fs.promises
      .readFile(cardsPath, { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  }
}


router.get('/cards', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  readCards().then((data) => res.status(200).json(data));
});

module.exports = router;
