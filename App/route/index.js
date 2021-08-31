const app = require('express')()
const db = require('../model/db')

app
    .get('/selectUncomplete',(req,res)=>{

        
        const FALSE = 0
        const sql = `SELECT * FROM tasks WHERE task_complete='${FALSE}'`

        db.query(sql,(err,results)=>{
            if(err)throw err

            res.status(200).send({results})
        })
    })

    .post('/insert',(req,res)=>{
        const {task_name} = req.body

        if(task_name === '' || typeof task_name !== 'string' )return res.status(404)
        
        const sql = `INSERT into tasks(task_name,task_complete) VALUES('${task_name}','${0}')`

        db.query(sql,(err)=>{
            if(err)throw err

            res.status(200).send({msg:'sucess'})
        })
    })
 
    .delete('/delete',(req,res)=>{
        const {id} =  req.body
       
        const sql = `DELETE FROM tasks WHERE id='${id}'`

        db.query(sql,(err)=>{
            if(err)throw err

            res.status(200).send({msg:'deleted'})
        })
   
    })
    .get('/selectComplete',(req,res)=>{
        const TRUE = 1
        const sql = `SELECT * FROM tasks WHERE task_complete='${TRUE}' ORDER BY id ASC `
        //const sql = "SELECT * FROM taskS WHERE task_date='2021-07-13'"
        db.query(sql,(err,results)=>{
            if(err)throw err
    
            res.status(200).send({msg:'sucess',results})
        })
    })
    .put('/update',(req,res)=>{
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


