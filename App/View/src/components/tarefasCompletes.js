import React,{useState,useEffect} from "react"
import Api from '../service/index'
import TarefasFeitas from '../styles/tarefascompletas'
const {ApiSelectItemComplete,ApiDelete} = Api


const clickDelete = (id,setObj)=>{
        ApiDelete(id)
        setObj({value:true})
        
}
const clickChange = (id)=>console.log(id)
   
   
const ReceiveDatas =async (setDatas)=>{
    const resp = await ApiSelectItemComplete()
    setDatas(resp)
   
}
export default function Item({setUpdate,updateElement}){
   
    const lastThreeTask = (array,lenght=3)=>array.length<3 ? array : array.slice(array.length-3,lenght+1)
    const [obj,setObj]  =useState({value:false})
    const [datas,setDatas] = useState([])
    useEffect(()=>{
        ReceiveDatas(setDatas)
        if(obj ||updateElement ){
            //console.log(updateElement)
         ReceiveDatas(setDatas)
        }
    },[updateElement])    

    const map = ({task_name,task_time,id})=>{
        const time = task_time.toString()
        const MinOurHrs = time.length === 2 ?'min':'hrs'
        const [one] = task_name
        const name = task_name.replace(one,one.toLocaleUpperCase())
        return (
        <div className="done"  key={id}>
                <div className="itens">
                    <i className="material-icons" onClick={e=>clickDelete(id,setUpdate)} >delete</i>
                    <i className="material-icons" onClick={e=>clickChange(id)}>create</i>
                </div>
            <div className="name">
                <p>{name}</p>
                <p>  Tempo Gasto {task_time + MinOurHrs}</p>
            </div>
        </div>
        )
    }
        return (
            <TarefasFeitas>
                <div className="item">
                    <h1>Últimas Tarefas</h1>
                        {datas.map(lastThreeTask(map))}
                </div>
            </TarefasFeitas>
        )
}
