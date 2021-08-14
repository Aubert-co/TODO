 function ApiSelectItem(){
   return fetch('http://localhost:8080/tasks/uncomplete')
    
}

function ApiDelete (id){
  return fetch('http://localhost:8080/tasks',{
    method:'DELETE',
    body:JSON.stringify({id}),
    headers:{'Content-Type':'application/json'}
  })
}

export default {ApiSelectItem,ApiDelete}