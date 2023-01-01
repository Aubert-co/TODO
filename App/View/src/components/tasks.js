import React,{useState,useEffect, memo} from "react"
import {BtnInsert} from './BtnInsert'
import {ApiSelectItemUncomplete} from '../service/index'
import {Item,TasksDiv} from "../styles"
import { List_Tasks } from "./List_Tasks"


function Tasks({updateComponents}){
 
    const [datas,setDatas] = useState([])
    const [updateThisComponent,setUpdateThisComponent] = useState({update:true})
   
    useEffect(()=>{
        if(updateThisComponent.update){
            ApiSelectItemUncomplete(setDatas)
            return
        }
        if(updateComponents.updateTasksAndRecomend){ 
            ApiSelectItemUncomplete(setDatas)
            return 
        }
        if(updateComponents.updateDoneTasksAndTasks)ApiSelectItemUncomplete(setDatas)
    },[updateComponents,updateThisComponent])

    return (
        
        <TasksDiv className="tarefas">
            <Item className="item">
                <h1>TODO LIST</h1>
                <BtnInsert Event={setUpdateThisComponent}/>
                <List_Tasks data={datas}  setUpdateThisComponent={setUpdateThisComponent}/>
            </Item> 
        </TasksDiv>
    
    )
}
export default memo(Tasks)