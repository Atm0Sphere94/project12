const express = require('express');

const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');


const app = express();
const { PORT = 3000 } = process.env;

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.use('/', usersRouter);
app.use('/', cardsRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});
