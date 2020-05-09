const router = require('express').Router();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

router.use(bodyParser.json());

async function readUsers() {
  const usersPath = path.join(__dirname, '../data/users.json');
  try {
    const data = await fs.promises
      .readFile(usersPath, { encoding: 'utf-8' });
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  }
}


router.get('/users', (req, res) => {
  readUsers().then((data) => res.status(200).json(data));
});

router.get('/users/:_id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const userID = req.params._id * 1;
  // eslint-disable-next-line no-underscore-dangle
  const userInfo = readUsers().then((data) => data.filter((m) => m._id === userID));
  if (userInfo) {
    res.status(200).json({ userInfo });
  } else {
    res.status(400).json({ message: 'Нет пользователя с таким id' });
  }
});

module.exports = router;
