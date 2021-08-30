import React from 'react'
import { ApiCompleteTask } from '../service';


export default function BtnCompleteTasks({id,time,Event}){
    const completeTask= (id,time)=>{
        ApiCompleteTask(id,time);
        Event({UpdateAll:true})
    }
   return  <i className="material-icons" onClick={()=>completeTask(id,time)} >check_box_outline_blank</i>
}