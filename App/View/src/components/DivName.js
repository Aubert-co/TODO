import React from 'react'


export  const NameItens = ({name,task_time})=>{
    const time = task_time % 60 === 0 ? task_time/60 : task_time
    const MinOurHrs = task_time % 60 === 0 ? 'hrs' : 'min'
return (
 <div className="name">
     <p>{name}</p>
     <p> Tempo Gasto  {time + MinOurHrs}</p>
 </div> 
)}