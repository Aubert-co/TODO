import React,{useState,useEffect,memo} from "react"
import {ApiSelectItemComplete} from '../service/index'
import {Item,DoneTasksDiv} from '../styles'
import {List_DoneTasks} from './List_DoneTasks'

 function DoneTasks({updateComponents}){
        const [datas,setDatas] = useState([])
        const [updateThisComponent,setUpdateThisComponent] = useState({update:true})

        useEffect(()=>{
            if(updateThisComponent.update){
                ApiSelectItemComplete(setDatas)
                return 
            }
            if(updateComponents.updateDoneTasksAndTasks)ApiSelectItemComplete(setDatas)
        },[updateThisComponent,updateComponents])
        console.count('componentDone')
        return (
            <DoneTasksDiv className="DoneTasksDiv">
                <Item className="item">
                    <h1>Last Tasks</h1>
                       <List_DoneTasks datas={datas} setUpdateThisComponent={setUpdateThisComponent}/>
                </Item>
            </DoneTasksDiv>
        )
}
export default memo(DoneTasks)