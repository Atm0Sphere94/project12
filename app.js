const express = require('express');
const router = require('./routes/routes.js');

const app = express();
app.use('/', router);
const { PORT = 3000 } = process.env;
app.use(express.static('public'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
