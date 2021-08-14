const mysql = require('mysql')


const con = mysql.createConnection({
    database:'tarefas',
    password:'',
    user:'root',
    port:3306
})


module.exports = con
