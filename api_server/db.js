const mysql = require('mysql')
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'mysql_001'
})

module.exports = conn