const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');


const app = express();
const { PORT = 3000 } = process.env;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', usersRouter);
app.use('/', cardsRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});
