import React from 'react'
import {ApiDelete} from '../service/index'
import {Done} from '../styles'

export const List_DoneTasks = ({datas,setUpdateThisComponent})=>{
    const lastThreeTask = (array,lenght=3)=>array.length<3 ? array : array.slice(array.length-lenght,array.lenght)
   
   const DeleteTasks = (id)=>{
        ApiDelete(id)
        setUpdateThisComponent({update:true})
    }
    const map = ({task_name,task_time,id})=>{
      
        const time = task_time % 60 === 0 ? task_time/60 : task_time
        const MinOurHrs = task_time % 60 === 0 ? 'hrs' : 'min'
    return(
        <Done className="done"  key={id} >
            
            <i className="material-icons"  onClick={()=>DeleteTasks(id)} >delete</i>
            <div className="name">
                <h3>{task_name}</h3>
                <h4>Time Spent  {time + MinOurHrs}</h4>
            </div> 
        </Done>
    )    
    }
    return lastThreeTask(datas).map(map)

}