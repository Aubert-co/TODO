const Url = "http://localhost:8080/tasks"

async function ApiSelectItemUncomplete(){
  const data = await fetch(`${Url}/selectUncomplete`)
  const {results} =await  data.json()
 
  return results
}
async function  ApiSelectItemComplete(){
  const data = await fetch(`${Url}/selectComplete`)
  const {results} = await data.json()
  return results
}
async function ApiDelete (id){
  return fetch(`${Url}/delete`,{
    method:'DELETE',
    body:JSON.stringify({id}),
    headers:{'Content-Type':'application/json'},
    
  })
  .then((resp)=>resp.json())
}

async function ApiInsert (task_name){
 
  return fetch(`${Url}/insert`,{
    method:'POST',
    body:JSON.stringify({task_name}),
    headers:{'Content-Type':'application/json'}
  }) 
  .then((resp)=>resp.json())
}


async function ApiCompleteTask (id,task_time){
  const response = await fetch(`${Url}/update`,{
  method:'PUT',
  body:JSON.stringify({id,task_time}),
  headers:{'Content-Type':'application/json'}
})
}


export  {ApiCompleteTask,ApiDelete,ApiInsert,ApiSelectItemComplete,ApiSelectItemUncomplete}