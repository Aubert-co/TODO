const route = require('express').Router()
const data = new Date()
const year = data.getFullYear()
const month = data.getMonth()
const day = data.getDay()+1

const mongo = require('../model/db')


route.get('/index',async(req,res)=>{
    try{
     mongo.insertMany({
        task_name:'env',
        study_time:60
    })
   
    res.send('index')
}catch(err){
    throw err
}

})


route.post('/newTask',(req,res)=>{

    try{
    const {task_name,study_time} = req.body


    res.send({msg:'sucess'})
    }catch(err){
        throw err
    }
})

module.exports = route