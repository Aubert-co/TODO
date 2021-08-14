import React,{useState,useEffect} from "react"
import styled from 'styled-components'
import Api from '../service/index'

const {ApiSelectItem,ApiDelete} = Api
const TarefasFeitas = styled.div`
width: 33%;
background-color: white;
border: 5px solid rgb(34, 150, 185);

.done{
    display: flex;
    text-align: center;
    align-items: center; 
    width: 50%;
    justify-content: center;
    border: 5px solid rgb(34,150,185);
    font-size: large;
}
.done i{
    cursor: pointer;
}
.done .delete{
    color: red;
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
    const DeleteTask = (id)=>{
        ApiDelete(id)
    }
    const map = ({task_name,id})=>{
        return (
        <div className="done" id={id}>
        
            <i className="material-icons" title="Update">edit</i>
            <i className="material-icons delete" onClick={()=>DeleteTask(id)} id={id} title="Delete" >delete</i>
            <h5>{task_name}</h5>
        </div>
        )
    }
    return (
        <>
        {datas.map(map)}
        </> 
        )              
    }
function Item(){

    const [datas,setDatas] = useState([])
    useEffect(()=>{
  
        ApiSelectItem()
        .then((resp)=>resp.json())
        .then((resp)=>setDatas(resp.results))
        
    },[])    
 
        return (
            <>
                <Render datas={datas}></Render>      
            </>
        )
}

 function TarefasComplete(){
    
    return(
       <TarefasFeitas>
            <div className="item">
           
                <h1>Últimas Tarefas</h1>
                <Item/>
                </div>
       </TarefasFeitas>
    )
}
export default TarefasComplete