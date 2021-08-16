async function ApiSelectItemUncomplete(){
  const data = await fetch('http://localhost:8080/tasks/uncomplete')
  const {results} =await  data.json()
  
  return results
}
async function ApiSelectItemComplete(){
  return fetch('http://localhost:8080/tasks/complete')
  .then((resp)=>resp.json())
}
async function ApiDelete (id){
  return fetch('http://localhost:8080/tasks',{
    method:'DELETE',
    body:JSON.stringify({id}),
    headers:{'Content-Type':'application/json'}
  })
  .then((resp)=>resp.json())
}

async function ApiInsert(task_name){
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
async function ApiUpdate(){
return fetch('http://localhost:8080/tasks',{
  method:'PUT',
  body:JSON.stringify({id}),
  headers:{'Content-Type':'application/json'}
})
.then((resp)=>resp.json())
}
export default {ApiSelectItemUncomplete,ApiDelete,ApiInsert,ApiUpdate,ApiComplete,ApiSelectItemComplete}



