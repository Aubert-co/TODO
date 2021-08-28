const obj =  {
   ApiSelectItemUncomplete:async function(){
  const data = await fetch('http://localhost:8080/tasks/uncomplete')
  const {results} =await  data.json()
 
  return results
},
ApiSelectItemComplete:async function(){
  const data = await fetch('http://localhost:8080/tasks/complete')
  const {results} = await data.json()
  return results
},
ApiDelete:async function (id){
  return fetch('http://localhost:8080/tasks',{
    method:'DELETE',
    body:JSON.stringify({id}),
    headers:{'Content-Type':'application/json'},
    
  })
  .then((resp)=>resp.json())
},

ApiInsert:async function (task_name){
  return fetch('http://localhost:8080/tasksinsert',{
    method:'POST',
    body:JSON.stringify({task_name}),
    headers:{'Content-Type':'application/json'}
  }) 
  .then((resp)=>resp.json())
}, 
ApiComplete:async function(id){
  return fetch('http://localhost:8080/tasks',{
    method:'DELETE',
    body:JSON.stringify({id}),
    headers:{'Content-Type':'application/json'}
  })
  .then((resp)=>resp.json())
},
ApiUpdate:async function({task_name}){
const response = await fetch('http://localhost:8080/tasks',{
  method:'PUT', 
  body:JSON.stringify({id}),
  headers:{'Content-Type':'application/json'}
})
 return response
},
ApiCompleteTask:async function (id,task_time){
  const response = await fetch('http://localhost:8080/completetask',{
  method:'PUT',
  body:JSON.stringify({id,task_time}),
  headers:{'Content-Type':'application/json'}
})
}
}

//export  const obj =  {ApiSelectItemUncomplete,ApiDelete,ApiInsert,ApiUpdate,ApiComplete,ApiSelectItemComplete}

export default obj