const express = require('express');
const { $ } = require('jquery')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Go Home World!!!');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})