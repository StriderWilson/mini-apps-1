const Sequelize = require('sequelize');
var db = new Sequelize('user', 'root', 'plantlife');

var User = db.define('User', {
  user: Sequelize.STRING,
  email: Sequelize.STRING,
  pass: Sequelize.STRING,
  line1: Sequelize.STRING,
  line2: Sequelize.STRING,
  city: Sequelize.STRING,
  stat: Sequelize.STRING,
  zip: Sequelize.STRING,
  phone: Sequelize.STRING,
  cc: Sequelize.STRING,
  expdate: Sequelize.STRING,
  cvv: Sequelize.STRING,
  billingzip: Sequelize.STRING,
})