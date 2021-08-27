import React,{useState,useEffect,useContext} from "react"
import Api from '../service/index'
import TarefasFeitas from '../styles/tarefascompletas'
import MyContext from "./actions"
const {ApiSelectItemComplete,ApiDelete} = Api


const clickDelete = (id,setUpdate)=>{
    ApiDelete(id)
    setUpdate({update:true})
}
const clickChange = (id)=>console.log(id)
   
   
const ReceiveDatas =async (setDatas)=>{
    const resp = await ApiSelectItemComplete()
    setDatas(resp)

}
export default function Item(){
   
    const lastThreeTask = (array,lenght=3)=>array.length<3 ? array : array.slice(array.length-3,lenght+1)
  
    const [datas,setDatas] = useState([])
    const {setUpdate,updateElement} = useContext(MyContext)
    
    useEffect(()=>{
        ReceiveDatas(setDatas)

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
