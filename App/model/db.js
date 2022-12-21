const mysql = require('mysql2/promise')



const sql = 'SELECT * FROM fake_tasks WHERE task_name ="test"'
const connection = async()=>{
    const con = await mysql.createConnection({
        database:'tarefas',
        password:'',
        user:'root',
        port:3306
    }).catch((err)=>{throw new Error('conection ')})
    return con
}
const connect = async()=>{
    const querys = await connection()
    const [results] = await querys.query(sql)
    console.log(results)
    querys.end()

}
module.exports = connection
