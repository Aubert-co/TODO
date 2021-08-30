const Url = "http://localhost:8080/"
  async function ApiSelectItemUncomplete(){
  const data = await fetch(`${Url}tasks/uncomplete`)
  const {results} =await  data.json()
 
  return results
}
async function  ApiSelectItemComplete(){
  const data = await fetch('http://localhost:8080/tasks/complete')
  const {results} = await data.json()
  return results
}
async function ApiDelete (id){
  return fetch('http://localhost:8080/tasks',{
    method:'DELETE',
    body:JSON.stringify({id}),
    headers:{'Content-Type':'application/json'},
    
  })
  .then((resp)=>resp.json())
}

async function ApiInsert (task_name){
 
  return fetch('http://localhost:8080/tasksinsert',{
    method:'POST',
    body:JSON.stringify({task_name}),
    headers:{'Content-Type':'application/json'}
  }) 
  .then((resp)=>resp.json())
}
async function ApiComplete(id){
  return fetch('http://localhost:8080/tasks',{
    method:'DELETE',
    body:JSON.stringify({id}),
    headers:{'Content-Type':'application/json'}
  })
  .then((resp)=>resp.json())
}
async function ApiUpdate({task_name}){
const response = await fetch('http://localhost:8080/tasks',{
  method:'PUT', 
  body:JSON.stringify({id}),
  headers:{'Content-Type':'application/json'}
})
 return response
}
async function ApiCompleteTask (id,task_time){
  const response = await fetch('http://localhost:8080/completetask',{
  method:'PUT',
  body:JSON.stringify({id,task_time}),
  headers:{'Content-Type':'application/json'}
})
}


export  {ApiComplete,ApiCompleteTask,ApiDelete,ApiInsert,ApiUpdate,ApiSelectItemComplete,ApiSelectItemUncomplete}