import React,{useState,useEffect} from "react"
import styled from 'styled-components'

import Api  from '../service/index'
import TarefasDiv from '../styles/index'

const {ApiInsert,ApiDelete,ApiSelectItemUncomplete,ApiCompleteTask} = Api


//const App =()=><Btn>BUTTON</Btn>
const AddTask = ()=>{
    
}
const Select = ()=>{
    const [selectValues,setSelect] = useState({value:5})

    const changeSelect = ({target})=>{
        setSelect({value:target.value})
        console.log('ola')
    }
   return( <select  value={selectValues.value} onChange={changeSelect}>
                            <option value="5">5m</option>
                            <option value="10">10m</option>
                            <option value="15">15m</option>
                            <option value="30">30m</option>
                            <option value="60">1hr</option>
                            <option value="120">2hr</option>
                            <option value="180">3hr</option>
                            <option value="240">4hr</option>
        </select>)
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
      const CompleteTask = (id)=>{
        ApiCompleteTask(id,'10')
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
  

   
    const map = ({task_name,id})=>
    <div className="done open" key={id}>
        <div className="itens">
            <i className="material-icons" onClick={()=>DeleteTask(id)}>delete</i>
            <i className="material-icons">create</i>
            <i className="material-icons" onClick={e=>CompleteTask(id)} >check_box_outline_blank</i>
        </div>
                 <h3> {task_name}</h3>
                <Select></Select>
     </div>
    
        
    return (
        
        <TarefasDiv >
            <div className="item">
                <h1>TODO LIST</h1>
                    <div className="add">
                    
                        <input type="text" onChange={changeValues} />
                        <h1 onClick={sendValues}>+</h1>
                    </div>
                {datas.map(map)} 
            </div> 
        </TarefasDiv>
    
    )
}
export default  Tarefas