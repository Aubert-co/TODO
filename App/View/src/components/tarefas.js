import React,{useState,useEffect,useContext} from "react"
import MyContext from "../contexts/actions"
import Select from './select'
import DeleteButton from './BtnDelete'
import BtnInsert from './BtnInsert'
import BtnCompleteTasks from "./BtnCompleteTask"
import {ApiSelectItemUncomplete} from '../service/index'
import {Itens,Item,Done,TarefasDiv} from "../styles"



const ReceiveDatas = async (setDatas)=>{
    const resp = await  ApiSelectItemUncomplete()
    setDatas(resp)
}



export default function Tarefas(){
    const {setUpdate} = useContext(MyContext)
    const [datas,setDatas] = useState([])
    const [obj,setObj] = useState({UpdateAll:false,update:false})
    
    const [selectValues,setSelect] = useState(5)
    
  

    useEffect(()=>{
        ReceiveDatas(setDatas)
        if(obj.UpdateAll=== true)setUpdate({update:true})
     },[obj])
  
   
   
    const map = ({task_name,id})=>{
       
    return (
    <Done className="done open" key={id}>
        <Itens className="itens">
            <DeleteButton id={id} Event={setObj}/>
            <BtnCompleteTasks id={id} time={selectValues} Event={setObj}/>
           
        </Itens>
                <h3> {task_name}</h3>
                <Select setSelect={setSelect} selectValues={selectValues}></Select>
     </Done>
     )
    }
        
    return (
        
        <TarefasDiv >
            <Item className="item">
                <h1>TODO LIST</h1>
                <BtnInsert Event={setObj}/>
                {datas.map(map)} 
            </Item> 
        </TarefasDiv>
    
    )
}
