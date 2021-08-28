const app = require('express')()
const db = require('../model/db')

app.get('/tasks/complete',(req,res)=>{
    const TRUE = 1
    const sql = `SELECT * FROM tasks WHERE task_complete='${TRUE}' ORDER BY id ASC `
    //const sql = "SELECT * FROM taskS WHERE task_date='2021-07-13'"
    db.query(sql,(err,results)=>{
        if(err)throw err

        res.status(200).send({msg:'sucess',results})
    })
})
.put('/completetask',(req,res)=>{
    const date = new Date(),
     Day = date.getDate(),
     Mont = date.getMonth()+1,
     Year = date.getFullYear(),
     DATE_TODAY =`${Year}-${Mont}-${Day}`

    const {id,task_time} = req.body
    ,sql = `UPDATE tasks  SET task_date='${DATE_TODAY}' , task_complete = '1' , task_time='${task_time}' WHERE id='${id}'`

    db.query(sql,(err)=>{
        if(err)throw err

        res.status(200).send({msg:'sucess'})
    })
})

module.exports = app