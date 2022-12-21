const connection = require('../model/db')
require('dotenv')
const table = process.env.DB_TABLE || 'fake_tasks'
const consult =async (sql)=>{
   const connectToDb = await connection()
   const row = await connectToDb.query(sql).catch((err)=>{return new Error('failed to query')})
   const endConnection = await connectToDb.end()
   return row
}

module.exports = {
    selectUncompleteTasks:async()=>{
        const uncomplete = 0
        const sql = `SELECT * FROM ${table} WHERE task_complete='${uncomplete}'`        
        return consult(sql)
    },
    insertTasks:async(task_name)=>{
        const SQL = `INSERT into ${table}(task_name,task_complete) VALUES('${task_name}','${0}')`
        return consult(SQL)
    },
    deleteTasks:async(id)=>{
        const SQL = `DELETE FROM ${table} WHERE id='${id}'`
        return consult(SQL)
    },
    selectCompleteTasks:async()=>{
        const complete = 1
        const SQL = `SELECT * FROM ${table} WHERE task_complete='${complete}' ORDER BY task_date ASC `
        return consult(SQL)
    },
    updateTasks:async(id,DATE_TODAY,task_time)=>{
        const complete = 1
        const SQL = `UPDATE ${table}  SET task_date='${DATE_TODAY}' , task_complete = '${complete}' , task_time='${task_time}' WHERE id='${id}'`
        return consult(SQL)
    }
}
