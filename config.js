const mysql = require("mysql2");
const con = mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_idan44',
    password: 'fPecEFr5!hvhuM3',
    database:'freedb_IdanDB',
    port: '3306'

});



con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = con;
