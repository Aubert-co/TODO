import React,{useState,useContext} from 'react'
import {Recomendation} from '../styles/index'
import { Done ,Item,Itens} from '../styles/index'
import {ApiInsert} from '../service'
import UpdateElement from "../contexts/UpdateElements"
const task = [
    {task_recommended:'Study Python',category:'programming'},
    {task_recommended:'Study JS',category:'programming'},
    {task_recommended:'Study PHP',category:'programming'},
    {task_recommended:'Study English',category:'language'},
    {task_recommended:'Study Spanish',category:'language'},
    {task_recommended:'Study Japanese',category:'language'},
    {task_recommended:'Push up',category:'workout'},
    {task_recommended:'Jump rope',category:'workout'},
    {task_recommended:'Squat',category:'workout'},
    {task_recommended:'Read A Book',category:'study'},
    {task_recommended:'Write A Text',category:'study'},
    {task_recommended:'Solve Math Problems',category:'study'}
]
function Filter(cat){
    const fil = ({category})=>category === cat
    return task.filter(fil)
}

export default function RecomenComp(){
    const [SelectCategories,SetCategories] = useState('study')
    const {obj,setObj} = useContext(UpdateElement)
    const InsertTask = (name)=>{
        ApiInsert(name)
        setObj({update:true})
    }
    const map = ({task_recommended},ind)=>{
     return (
       
        <Done className="done" key={ind}>
            <Itens className="itens">
                <i className="material-icons" onClick={(e)=>InsertTask(task_recommended)}>add</i>
            </Itens>
       
            <h3>{task_recommended}</h3>
        </Done>
     )  
    }
    return (
        <Recomendation className="recomendation">
            <Item className="item">
                <h1>Recommended Tasks</h1>
            <select onChange={(e)=>SetCategories(e.target.value)}>
                <option value="study">Study</option>
                <option value="workout">Workout</option>
                <option value="language">Languages</option>
                <option value="programming">Programming</option>
            </select>
            {Filter(SelectCategories).map(map)}
            </Item>
        </Recomendation>
    )
}


