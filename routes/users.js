const router = require('express').Router();
const path = require('path');
const fs = require('fs');


async function readUsers() {
  const usersPath = path.join(__dirname, '../data/users.json');
  try {
    const data = await fs.promises
      .readFile(usersPath, { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  }
}

router.get('/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  readUsers().then((data) => res.status(200).json(data));
});

router.get('/users/:_id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const userID = req.params._id;
  // eslint-disable-next-line no-underscore-dangle
  readUsers().then((data) => {
    // eslint-disable-next-line no-underscore-dangle
    const userInfo = data.filter((el) => el._id === userID)[0];
    if (userInfo) {
      res.status(200).json({ userInfo });
    } else {
      res.status(400).json({ message: 'Нет пользователя с таким id' });
    }
  });
});
module.exports = router;
