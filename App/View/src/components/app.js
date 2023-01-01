import React,{useState} from "react"
import Tarefas from './tasks'
import TarefasComplete from './DoneTasks'
import Recomendation from './recomendation'

import { Container } from '../styles/index'

import insertDatasAndFinishTasks from '../hooks'
import { ChangeStates } from '../contexts'


function App(){
    const [updateComponents,setUpdateComponents] = useState({updateTasksAndRecomend:false,updateDoneTasksAndTasks:false})
    
    const {insertDatas,completeTask} =  insertDatasAndFinishTasks(updateComponents,setUpdateComponents)
   
    return (
        <Container>
        <header></header>
        
    
            <main>
                <ChangeStates.Provider value={{insertDatas,completeTask}} >
                    <TarefasComplete updateComponents={updateComponents}/>
                    <Tarefas updateComponents={updateComponents}  setUpdateComponents={setUpdateComponents}/>
                    <Recomendation />
                </ChangeStates.Provider>
            </main>

        <footer></footer>
        </Container>
    )
}


export default App


