function ApiSelectItem(){
   return fetch('http://localhost:8080/tasks/uncomplete')
   .then((resp)=>resp.json())
}

function ApiDelete (id){
  return fetch('http://localhost:8080/tasks',{
    method:'DELETE',
    body:JSON.stringify({id}),
    headers:{'Content-Type':'application/json'}
  })
  .then((resp)=>resp.json())
}

function ApiInsert(task_name,task_time){
  return fetch('http://localhost:8080/tasks',{
    method:'POST',
    body:JSON.stringify({task_name,task_time}),
    headers:{'Content-Type':'application/json'}
  }) 
  .then((resp)=>resp.json())
}
function ApiComplete(id){
  return fetch('http://localhost:8080/tasks',{
    method:'DELETE',
    body:JSON.stringify({id}),
    headers:{'Content-Type':'application/json'}
  })
  .then((resp)=>resp.json())
}
function ApiUpdate(){
return fetch('http://localhost:8080/tasks',{
  method:'PUT',
  body:JSON.stringify({id}),
  headers:{'Content-Type':'application/json'}
})
.then((resp)=>resp.json())
}
export default {ApiSelectItem,ApiDelete,ApiInsert,ApiUpdate,ApiComplete}



