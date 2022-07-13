const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER_NAME,
  password : process.env.PASSWORD,
  database : process.env.DATABASE
});

module.exports =    {
    connection
}