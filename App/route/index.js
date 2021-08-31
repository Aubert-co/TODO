const app = require('express')()
const db = require('../model/db')

app
    .get('/selectUncomplete',(req,res)=>{
        const FALSE = 0
        const SQL = `SELECT * FROM tasks WHERE task_complete='${FALSE}'`

        db.query(SQL,(err,results)=>{
            if(err)throw err
            res.status(200).send({results,msg:'sucess'})
        })
    })

    .post('/insert',(req,res)=>{
        const {task_name} = req.body
        
        if(task_name === '' || typeof task_name !== 'string' )return res.status(404).send({msg:'wrong datas'})
        
        const SQL = `INSERT into tasks(task_name,task_complete) VALUES('${task_name}','${0}')`

        db.query(SQL,(err)=>{
            if(err)throw err

            res.status(200).send({msg:'sucess'})
        })
    })
 
    .delete('/delete',(req,res)=>{
        const {id} =  req.body
        
        if(id === '' || typeof id !== 'number')return res.status(404).send({msg:'wrong datas'})

        const SQL = `DELETE FROM tasks WHERE id='${id}'`

        db.query(SQL,(err)=>{
            if(err)throw err
            res.status(200).send({msg:'deleted'})
        })
   
    })
    .get('/selectComplete',(req,res)=>{
        const TRUE = 1
        const SQL = `SELECT * FROM tasks WHERE task_complete='${TRUE}' ORDER BY id ASC `
        //const sql = "SELECT * FROM taskS WHERE task_date='2021-07-13'"
        db.query(SQL,(err,results)=>{
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
        
        if(typeof id !== 'number' || typeof task_time !== 'number')return res.status(404).send({msg:'wrong datas'})
        
        const TRUE = 1
        const SQL = `UPDATE tasks  SET task_date='${DATE_TODAY}' , task_complete = '${TRUE}' , task_time='${task_time}' WHERE id='${id}'`
    
        db.query(SQL,(err)=>{
            if(err)throw err
    
            res.status(200).send({msg:'sucess'})
        })
    })

module.exports = app


