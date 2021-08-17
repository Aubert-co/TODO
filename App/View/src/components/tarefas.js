import React,{useState,useEffect} from "react"
import styled from 'styled-components'
import Api from '../service/index'
import Item from '../styles/index'
const {ApiInsert,ApiSelectItemUncomplete,ApiDelete}  = Api

const TarefasDiv = styled.div`
width: 33%;
background-color: white;
border: 5px solid rgb(34, 150, 185);
margin-left: 10px;
`


//const App =()=><Btn>BUTTON</Btn>
const AddTask = ()=>{
    
}

const ListTaskUncompplete =({datas})=>{
   
 
    return <>{datas.map(map)} </>
}
const SETvalues = async (setDatas)=>{
    const resp = await  ApiSelectItemUncomplete()
    setDatas(resp)
}
function Tarefas(){
    const [datas,setDatas] = useState([])
    const [obj,setObj] = useState({value:false})
    const [values,setValues] = useState("")
    const sendValues = ()=>{
        ApiInsert(values)
        setObj({value:true})
        
      }
    const changeValues =({target})=>setValues(target.value)
    
      const DeleteTask = (id)=>{
        ApiDelete(id)
        setObj({value:true})
    }
  
    useEffect(()=>{
        SETvalues(setDatas)
        if(obj.value=== true)()=>SETvalues(setDatas)

     
        
     },[obj])
  

   
      const map = ({task_name,id})=><div className="done" key={id}>
        <i className="material-icons" onClick={()=>DeleteTask(id)}>delete</i>
     {task_name}
     </div>
    
        
    return (
        
        <TarefasDiv>
            <Item>
                <h1>TODO LIST</h1>
                <div className="item">
                    <input type="text" onChange={changeValues} />
                    <button onClick={sendValues}>+</button>
                </div>
                {datas.map(map)} 
            </Item> 
        </TarefasDiv>
    
    )
}
export default  Tarefas