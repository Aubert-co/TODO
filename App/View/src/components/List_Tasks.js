import React,{useState,useContext} from "react"
import { ChangeStates } from "../contexts"
import {Itens,Done} from "../styles"
import {ApiSelectItemUncomplete,ApiCompleteTask,ApiDelete} from '../service/index'

export const List_Tasks = ({data,setUpdateThisComponent})=>{
    const [valueFromSelect,setValueFromSelect] = useState({value:'5'})

    const {completeTask} = useContext(ChangeStates)
   
    const map = ({task_name,id})=>{
        
       const changeValues = ({target})=>setValueFromSelect({value:target.value})
        const clickCompleteTasks = ()=>{
            const time =5|| valueFromSelect.value
            completeTask(id,time)
         
        }
        const clickDelete = ()=>{
            ApiDelete(id)
            setUpdateThisComponent({update:true})
        }
        return (
        <Done className="done" key={id}>
            <Itens className="itens">
                <i className="material-icons"  onClick={clickDelete} >delete</i>
                <i className="material-icons" onClick={clickCompleteTasks} >check_box_outline_blank</i>
                <select onChange={(e)=>changeValues(e)}>
                    <option value="5">5m</option>
                    <option value="10">10m</option>
                    <option value="15">15m</option>
                    <option value="30">30m</option>
                    <option value="60">1hr</option>
                    <option value="120">2hr</option>
                    <option value="180">3hr</option>
                    <option value="240">4hr</option>
                </select>
            </Itens>
                <h3> {task_name}</h3>
         </Done>
         )
        }
        return data.map(map)
}