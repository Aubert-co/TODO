import React,{useState,useEffect,useContext} from "react"
import MyContext from "../contexts/actions"
import DeleteButton from './BtnDelete'
import { NameItens } from "./DivName"
import {ApiSelectItemComplete} from '../service/index'
import {Item,Done,TarefasFeitas} from '../styles'



const ReceiveDatas =async (setDatas)=>{
    const resp = await ApiSelectItemComplete()
    setDatas(resp)
}

const MapTasks = ({datas,setUpdate})=>{
    const lastThreeTask = (array,lenght=3)=>array.length<3 ? array : array.slice(array.length-lenght,array.lenght)
    
    const map = ({task_name,task_time,id})=>{
    return(
    //<DivDone key={id} id={id} time={task_time} name={task_name} setUpdate={setUpdate}/>
        <Done className="done"  key={id} >
            
            <DeleteButton id={id} Event={setUpdate}/> 
            <NameItens key={id} name={task_name} task_time={task_time} />
        </Done>
    )    
    }
    return lastThreeTask(datas).map(map)

}
export default function TarefasComplete(){
    const [datas,setDatas] = useState([])
    const {setUpdate,updateElement} = useContext(MyContext)
    useEffect(()=>{
        ReceiveDatas(setDatas)
    },[updateElement])    
        return (
            <TarefasFeitas className="tarefasFeitas">
                <Item className="item">
                    <h1>Last Tasks</h1>
                       <MapTasks datas={datas} setUpdate={setUpdate}/>
                </Item>
            </TarefasFeitas>
        )
}
