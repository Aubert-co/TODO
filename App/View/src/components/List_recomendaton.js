import React,{memo, useContext, useMemo} from 'react'
import { ChangeStates } from '../contexts'

import { Done ,Item,Itens} from '../styles/index'

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

const List_recommendation = ({filterCategory})=>{
    const {insertDatas} = useContext(ChangeStates)
    const filter =useMemo(()=> task.filter(({category})=>category===filterCategory),[ filterCategory])
    
    const map = ({task_recommended},ind)=>{
        const buttonInsertDatas = ()=>insertDatas(task_recommended)
        return (
          
           <Done className="done" key={ind.toString()+task_recommended}>
               <Itens className="itens">
                   <i className="material-icons" onClick={buttonInsertDatas}>add</i>
               </Itens>
          
               <h3>{task_recommended}</h3>
           </Done>
        )  
       }
       return (
        <>
            {filter.map(map)}
        </>
       )
}
export default  memo(List_recommendation)