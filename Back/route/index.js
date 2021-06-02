const route = require('express').Router()
const data = new Date()
const year = data.getFullYear()
const month = data.getMonth()
const day = data.getDay()

const mongo = require('../model/db')


route.get('/index',(req,res)=>{
    console.log('here')
    res.send('index')
})


route.post('/newTask',(req,res)=>{

    try{
    const {task_name,study_time} = req.body

    mongo.insertMany({
        task_name,
        study_time,
        day,
        year,
        month
    })

    res.send({msg:'sucess'})
    }catch(err){
        throw err
    }
})

module.exports = route