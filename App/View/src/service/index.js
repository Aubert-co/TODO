const Url = "http://localhost:8080/tasks"

async function ApiSelectItemUncomplete(){
  const data = await fetch(`${Url}/select/uncomplete`)
  const {results} =await  data.json()
 
  return results
}
async function  ApiSelectItemComplete(){
  const data = await fetch(`${Url}/select/complete`)
  const {results} = await data.json()
  return results
}
async function ApiDelete (id){
  return fetch(`${Url}/delete/${id}`,)
  .then((resp)=>resp.json())
}

async function ApiInsert (task_name){
  return fetch(`${Url}/insert/${task_name}`) 
  .then((resp)=>resp.json())
}


async function ApiCompleteTask (id,task_time){
  const response = await fetch(`${Url}/update/${id}/${task_time}`)
}


export  {ApiCompleteTask,ApiDelete,ApiInsert,ApiSelectItemComplete,ApiSelectItemUncomplete}