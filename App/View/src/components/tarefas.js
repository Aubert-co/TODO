import React,{useState,useEffect,useContext} from "react"
import MyContext from "../contexts/actions"
import Select from './select'
import DeleteButton from './BtnDelete'
import {BtnInsert} from './BtnInsert'
import BtnCompleteTasks from "./BtnCompleteTask"
import {ApiSelectItemUncomplete} from '../service/index'
import {Itens,Item,Done,TarefasDiv} from "../styles"
import UpdateElement from '../contexts/UpdateElements'


const ReceiveDatas = async (setDatas)=>{
    const resp = await  ApiSelectItemUncomplete()
    setDatas(resp)
}



export default function Tarefas(){
    const {setUpdate} = useContext(MyContext)
    const [datas,setDatas] = useState([])
    const {obj,setObj} = useContext(UpdateElement)
    const [selectValues,setSelect] = useState(5)
    
  

    useEffect(()=>{
        ReceiveDatas(setDatas)
        if(obj.UpdateAll=== true)setUpdate({update:true})
     },[obj])
  
   
   
    const map = ({task_name,id})=>{
       
    return (
    <Done className="done" key={id}>
        <Itens className="itens">
            <DeleteButton id={id} Event={setObj}/>
            <BtnCompleteTasks id={id} time={selectValues} Event={setObj}/>
            <Select setSelect={setSelect} selectValues={selectValues}></Select>
        </Itens>
            <h3> {task_name}</h3>
     </Done>
     )
    }
        
    return (
        
        <TarefasDiv className="tarefas">
            <Item className="item">
                <h1>TODO LIST</h1>
                <BtnInsert Event={setObj}/>
                {datas.map(map)} 
            </Item> 
        </TarefasDiv>
    
    )
}