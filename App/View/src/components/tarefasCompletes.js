import React,{useState,useEffect} from "react"
import styled from 'styled-components'
import Api from '../service/index'

const {ApiSelectItem} = Api
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
        const [one] =  task_name
        ,name = task_name.replace(one,one.toLocaleUpperCase())
        , MinOurHrs = task_time.lenght === 2 ? 'hrs' :'min'
        return (
      
        <div className="done" id={id}>
            <div className="name">
                {name}
            </div>

            <div className="time">
            Tempo Gasto {task_time + MinOurHrs}
            </div>
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
    const lastThreeTask = (arrays,lenght=3)=>{

        const f = arrays.filter((val,ind,a)=>{
          
          if(ind + lenght === a.length){
            lenght--
            return val
          }
          if( a.length < lenght)return val
        })
        return f
        }
    const [datas,setDatas] = useState([])
    useEffect(()=>{
  
        ApiSelectItem()
        .then((resp)=>{
            setDatas(resp.results)
        })
    },[])    
 
        return (
            <>
                <Render datas={lastThreeTask(datas)}></Render>      
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