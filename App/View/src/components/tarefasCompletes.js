import React,{useState,useEffect} from "react"
import styled from 'styled-components'
import Api from '../service/index'

const {ApiSelectItemComplete} = Api
const TarefasFeitas = styled.div`
width: 33%;
background-color: white;
border: 5px solid rgb(34, 150, 185);

.done{
    display: flex;
    
    width: 50%;
    flex-direction:column;
    border: 5px solid rgb(34,150,185);
    font-size: large;
    height: 20%;
}
h5{
    padding:0;
    height:0px;
}
.done i{
    cursor: pointer;
}

.item{    
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   color: rgb(34, 150, 185);
}
`
const Render = ({datas})=>{
    
    const map = ({task_name,task_time,id})=>{
        const time = task_time.toString()
        const MinOurHrs = time.length === 2 ?'min':'hrs'
        const [one] = task_name
        const name = task_name.replace(one,one.toLocaleUpperCase())
        return (
        <div className="done"  key={id}>
            <div className="name">
                {name}
            </div>

            <div className="time">
                Tempo Gasto {task_time + MinOurHrs}
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
