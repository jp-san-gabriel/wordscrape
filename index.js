const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Mammeeee');
});

app.listen(1608);
