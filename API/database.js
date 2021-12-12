const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'c8u4r7fp8i8qaniw.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
  user: 'oiw0j0vkb3tejtqd',
  password: 'xzwfrt2zu2mdaqyo',
  database: 'xfo0l9q71xw9lreo'
});
module.exports = connection;