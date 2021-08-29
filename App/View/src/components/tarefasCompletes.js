import React,{useState,useEffect,useContext} from "react"
import {ApiSelectItemComplete} from '../service/index'
import TarefasFeitas from '../styles/tarefascompletas'
import MyContext from "./actions"
import DeleteButton from './BtnDelete'
import { NameItens } from "./DivName"




/*const NameItens = ({name,task_time})=>{
        const time = task_time % 60 === 0 ? task_time/60 : task_time
        const MinOurHrs = task_time % 60 === 0 ? 'hrs' : 'min'
    return (
     <div className="name">
         <p>{name}</p>
         <p> Tempo Gasto  {time + MinOurHrs}</p>
     </div> 
)}*/
/*const DivDone = ({id,name,time,setUpdate})=>{
   // const [ShowDeleteBtn,SetDeleteBtn] = useState(false)
  
    return (
    <div className="done"  key={id} onMouseLeave={()=>SetDeleteBtn(false)} onMouseEnter={()=>SetDeleteBtn(true)}>
      {ShowDeleteBtn===true ? <DeleteButton id={id} setUpdate={setUpdate}/> : <NameItens key={id} name={name} task_time={time} />}
    </div>
)}*/

const ReceiveDatas =async (setDatas)=>{
    const resp = await ApiSelectItemComplete()
    setDatas(resp)
}

const MapTasks = ({datas,setUpdate})=>{
    const lastThreeTask = (array,lenght=3)=>array.length<3 ? array : array.slice(array.length-lenght,array.lenght)
    const [ShowDeleteBtn,SetDeleteBtn] = useState(false)
    const map = ({task_name,task_time,id})=>{
    return(
    //<DivDone key={id} id={id} time={task_time} name={task_name} setUpdate={setUpdate}/>
        <div className="done"  key={id} onMouseLeave={()=>SetDeleteBtn(false)} onMouseEnter={()=>SetDeleteBtn(true)}>
          {ShowDeleteBtn===true ? <DeleteButton id={id} setUpdate={setUpdate}/> :
           <NameItens key={id} name={task_name} task_time={task_time} />}
        </div>
    )    
    }
    return lastThreeTask(datas).map(map)

}
export default function Item(){
    const [datas,setDatas] = useState([])
    const {setUpdate,updateElement} = useContext(MyContext)
    useEffect(()=>{
        ReceiveDatas(setDatas)
    },[updateElement])    
    
    
        return (
            <TarefasFeitas >
                <div className="item">
                    <h1>Últimas Tarefas</h1>
                       <MapTasks datas={datas} setUpdate={setUpdate}/>
                </div>
            </TarefasFeitas>
        )
}
