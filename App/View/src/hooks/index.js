import React,{useCallback} from 'react'
import { ApiDelete, ApiInsert, ApiSelectItemUncomplete,ApiCompleteTask } from '../service'

function insertDatasAndFinishTasks(updateComponents,setUpdateComponents){
    const insertDatas =useCallback((name)=>{
        ApiInsert(name)
        setUpdateComponents({updateTasksAndRecomend:true})
        console.log('cliecked')
    },[updateComponents.updateTasksAndRecomend])
    
    const completeTask= (id,time)=>{
        const time_tasks = 5||time
        ApiCompleteTask(id,time_tasks);
        setUpdateComponents({updateDoneTasksAndTasks:true})
       console.log('complete')
    }
    return {insertDatas,completeTask}
}

export default insertDatasAndFinishTasks