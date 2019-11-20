const express = require('express');
const { $ } = require('jquery')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: './samples/csv_report.csv',
  header: [
    {id: 'firstName', title: 'firstName'},
    {id: 'lastName', title: 'lastName'},
    {id: 'county', title: 'county'},
    {id: 'city', title: 'city'},
    {id: 'role', title: 'role'},
    {id: 'sales', title: 'sales'}
  ]
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('client'));
app.post('/form', (req, res) => {
  var input = [JSON.parse(req.body.info)];
  var result = []
  csvWriter
  .writeRecords(input)
  .then(() => fs.createReadStream('./samples/csv_report.csv')
  .pipe(csv())
  .on('data', (row) => {
    result.push(row);
  })
  .on('end', () => {
    var info = JSON.stringify(result).split(',').join('\n');
    res.send(info + form);
  }))


})
app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
});

var form =  '<form action="/form" method="post"><label>Employee Info: </label><div><textarea type="text" id="info" name="info"></textarea></div><div><input type="submit" id="submit" name="submit" value="Submit Request" ></div></form>';