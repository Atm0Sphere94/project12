const router = require('express').Router();

const { users } = require('../data/users.json');
const { cards } = require('../data/cards.json');


router.get('./cards/:_id', (req, res) => {
  res.send(cards);
});
router.get('./users/:_id', (req, res) => {
  res.send(users);
});


router.get('/users/:_id', (req, res) => {
  if (!users[req.params.id]) {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });
    res.send({ message: 'Нет пользователя с таким id' });
    return;
  }

  res.send(users[req.params.id]);
});


module.exports = router;
