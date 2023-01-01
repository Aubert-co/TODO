const Url = "http://localhost:8080/tasks"

async function ApiSelectItemUncomplete(setDatas){
  const data = await fetch(`${Url}/uncomplete`)
  const {results} =await  data.json()
 
  setDatas(results)
}
async function  ApiSelectItemComplete(setDatas){
  const data = await fetch(`${Url}/complete`)
  const {results} = await data.json()
  
  setDatas(results)
}
async function ApiDelete (id){
  return fetch(`${Url}/delete/${id}`,{
    method:'PUT'
  })
  .then((resp)=>resp.json())
}

async function ApiInsert (task_name){
  return fetch(`${Url}/insert/${task_name}`,{
    method:'POST'
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