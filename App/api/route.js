const route = require('express').Router()
const { selectUncompleteTasks, insertTasks, deleteTasks, updateTasks, selectCompleteTasks } = require('../controller/actionsDB')


route
    .get('/tasks/uncomplete',async(req,res)=>{
        const [results] = await selectUncompleteTasks().catch((err)=>{res.status(404).send({msg:'something went wrong'})})
        res.status(200).send({results,msg:'sucess'})
    })

    .get('/tasks/complete',async(req,res)=>{
        const [results] =await selectCompleteTasks().catch(err=>{res.status(404).send({msg:'something went wrong'})})
       
        res.status(200).send({results,msg:'sucess'})
       
    })
    .post('/tasks/insert/:task_name',async(req,res)=>{
        const {task_name} = req.params

        if(task_name !== null || task_name !== undefined && typeof task_name === 'string')return res.status(402).send({msg:'somethig went wrong'})
       
        const consult =await insertTasks(task_name).catch((err)=>{res.status(404).send({msg:'something went wrong'})})
        res.status(200).send({msg:'sucess'})
        
    })
 
    .put('/tasks/delete/:id',async(req,res)=>{
        const {id} =  req.params
        
       if(isNaN(id))return res.status(402).send({msg:'somethig went wrong'})

        const consult =await deleteTasks(id).catch(err=>{res.status(404).send({msg:'something went wrong'})})
        res.status(200).send({msg:'sucess'})
        
    })
    
    .put('/tasks/update',async(req,res)=>{
        const {id,task_time} = req.body
        const Dates = new Date()
        const [data,hour] =  Dates.toISOString().split('T')
   
       if(isNaN(id) || isNaN(task_time))return res.status(402).send({msg:'somethig went wrong'})
        
        const consult =await updateTasks(id,data,task_time).catch((err)=>{res.status(404).send({msg:'something went wrong'})})
      
        res.status(200).send({msg:'sucess'})
      
    })

module.exports = route
