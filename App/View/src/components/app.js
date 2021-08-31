import Tarefas from './tarefas'
import TarefasComplete from './tarefasCompletes'
import Recomendation from './recomendation'
import React,{useContext, useState} from "react"
import MyContext from '../contexts/actions'
import UpdateElements from '../contexts/UpdateElements'
import { Container } from '../styles/index'

function App(){
    const [updateElement,setUpdate] = useState({update:false})
    const [obj,setObj] = useState({UpdateAll:false,update:false})
    return (
        <Container>
        <header></header>
        
        <main>
            <MyContext.Provider value={{updateElement,setUpdate}}>
                    <TarefasComplete />
                <UpdateElements.Provider value={{obj,setObj}}>
                    <Tarefas />
                    <Recomendation />
                </UpdateElements.Provider>
            </MyContext.Provider>
        </main>

        <footer></footer>
        </Container>
    )
}


export default App


