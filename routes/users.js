const router = require('express').Router();
const bodyParser = require('body-parser');
const { users } = require('../data/users.js');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:_id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const userID = req.params._id;
  // eslint-disable-next-line no-underscore-dangle
  const userSend = users.find((m) => m._id === userID);
  if (userSend) {
    res.status(200).json({ userSend });
  } else {
    res.status(400).json({ message: 'Нет пользователя с таким id' });
  }
});

module.exports = router;
