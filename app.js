const express = require('express');
const router = require('./routes/routes.js');

const app = express();
app.use('/', router);
const { PORT = 3000 } = process.env;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', usersRouter);
app.use('/', cardsRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
