import React from 'react'
import { Name } from '../styles'

export  const NameItens = ({name,task_time})=>{
    const time = task_time % 60 === 0 ? task_time/60 : task_time
    const MinOurHrs = task_time % 60 === 0 ? 'hrs' : 'min'
return (
 <Name className="name">
     <p>{name}</p>
     <p> Tempo Gasto  {time + MinOurHrs}</p>
 </Name> 
)}