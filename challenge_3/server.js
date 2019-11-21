const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.post('/user', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})
app.post('/address', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})
app.post('/credit', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen(port, () => console.log('Listening on port 3000'));

