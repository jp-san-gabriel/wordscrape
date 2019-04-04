const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Mammeeee');
});

const PORT = process.env.PORT || 1608;
app.listen(PORT);
