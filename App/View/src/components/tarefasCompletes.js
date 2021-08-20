import React,{useState,useEffect} from "react"
import Api from '../service/index'
import TarefasFeitas from '../styles/tarefascompletas'
const {ApiSelectItemComplete,ApiDelete} = Api

const Itens =({id})=>{
    const clickDelete = (id)=>{
        ApiDelete(id)
    }
    const clickChange = (id)=>console.log(id)
    return (
        <div className="itens">
            <i className="material-icons" onClick={e=>clickDelete(id)} >delete</i>
            <i className="material-icons" onClick={e=>clickChange(id)}>create</i>
        </div>
    )
}


const Render = ({datas})=>{
    
    const map = ({task_name,task_time,id})=>{
        const time = task_time.toString()
        const MinOurHrs = time.length === 2 ?'min':'hrs'
        const [one] = task_name
        const name = task_name.replace(one,one.toLocaleUpperCase())
        return (
        <div className="done"  key={id}>
                <Itens id={id}></Itens>
            <div className="name">
                <p>{name}</p>
                <p>  Tempo Gasto {task_time + MinOurHrs}</p>
            </div>
        </div>
        )
    }
    return <>{datas.map(map)}</> 
                    
}

export default function Item(){
    const lastThreeTask = (array,lenght=3)=>array.length<3 ? array : array.slice(array.length-3,lenght+1)

    const [datas,setDatas] = useState([])
    useEffect(()=>{
        ApiSelectItemComplete()
        .then(resp=>setDatas(resp.results))
    },[])    
        return (
            <TarefasFeitas>
                <div className="item">
                    <h1>Últimas Tarefas</h1>
                    <Render datas={lastThreeTask(datas)}></Render>      
                </div>
            </TarefasFeitas>
        )
}
