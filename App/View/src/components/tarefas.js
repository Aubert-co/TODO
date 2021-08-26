import React,{useState,useEffect} from "react"
import styled from 'styled-components'

import Api  from '../service/index'
import TarefasDiv from '../styles/index'
import Select from './select'
const {ApiInsert,ApiDelete,ApiSelectItemUncomplete,ApiCompleteTask} = Api



const ReceiveDatas = async (setDatas)=>{
    const resp = await  ApiSelectItemUncomplete()
    setDatas(resp)
}

const SendDatas = (name,values,setObj)=>{
    switch(name){
        case 'delete': 
            ApiDelete(values.id)
            break
        case 'insert':
            ApiInsert(values.name)
            break
        default :console.error('error')
    }
    setObj({value:true})
}

const completeTask= ({id,time},setObj)=>{
    setObj({update:true})
    ApiCompleteTask(id,time);
  
   
 }
export default function Tarefas({setUpdate}){
    console.log('here tarefas')
    const [datas,setDatas] = useState([])
    const [obj,setObj] = useState({value:false,update:false})
    const [values,setValues] = useState("")
    const [selectValues,setSelect] = useState(5)
    
    const changeValues =({target})=>setValues(target.value)

    useEffect(()=>{
        ReceiveDatas(setDatas)

        if(obj.update=== true)setUpdate(true)
        
       
       
     },[obj])
  
   
   
    const map = ({task_name,id})=>
    <div className="done open" key={id}>
        <div className="itens">
            <i className="material-icons" onClick={()=>SendDatas('delete',{id:id},setObj)}>delete</i>
            <i className="material-icons">create</i>
            <i className="material-icons" onClick={()=>completeTask({id:id,time:selectValues},setObj)} >check_box_outline_blank</i>
        </div>
                <h3> {task_name}</h3>
                <Select setSelect={setSelect} selectValues={selectValues}></Select>
     </div>
    
        
    return (
        
        <TarefasDiv >
            <div className="item">
                <h1>TODO LIST</h1>
                    <div className="add">
                    
                        <input type="text" onChange={changeValues} />
                        <h1 onClick={()=>SendDatas('insert',{name:values},setObj)}>+</h1>
                    </div>
                {datas.map(map)} 
            </div> 
        </TarefasDiv>
    
    )
}
