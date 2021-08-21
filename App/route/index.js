const app = require('express')()
const db = require('../model/db')

app
    .get('/tasks/uncomplete',(req,res)=>{
        const FALSE = 0
        const sql = `SELECT * FROM tasks WHERE task_complete='${FALSE}'`

        db.query(sql,(err,results)=>{
            if(err)throw err

            res.status(200).send({results})
        })
    })

    .post('/tasksinsert',(req,res)=>{
        const {task_name} = req.body
        const sql = `INSERT into tasks(task_name,task_complete) VALUES('${task_name}','${0}')`

        db.query(sql,(err)=>{
            if(err)throw err

            res.status(200).send({msg:'sucess'})
        })
    })
    
    .post('/tasks',(req,res)=>{
        const date = new Date(),
         Day = date.getDate(),
         Mont = date.getMonth()+1,
         Year = date.getFullYear(),
         DATE_TODAY =`${Year}-${Mont}-${Day}`

 
        const {task_name,task_complete,task_time} = req.body
        const sql = `INSERT INTO tasks(task_name,task_date,task_complete) VALUES('${task_name}','${DATE_TODAY}','${task_complete}')`

        db.query(sql,(err)=>{
            if(err)throw err

            res.status(200).send({msg:'sucess'})
        })
    })

    .put('/tasks',(req,res)=>{
        const {id,task_name,task_complete,task_time} = req.body

        const sql = `UPDATE tasks SET task_name = '${task_name}' 
        , task_complete = '${task_complete}' , task_time ='${task_time}'   WHERE id=${id}`

        db.query(sql,(err)=>{
            if(err)throw err

            res.status(200).send({msg:'sucess'})
        })
    })

    .delete('/tasks',(req,res)=>{
        const {id} =  req.body
       
        const sql = `DELETE FROM tasks WHERE id='${id}'`

        db.query(sql,(err)=>{
            if(err)throw err

            res.status(200).send({msg:'deleted'})
        })
   
    })

module.exports = app


