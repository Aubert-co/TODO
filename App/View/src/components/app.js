import Tarefas from './tarefas'
import TarefasComplete from './tarefasCompletes'
import React,{useContext, useState} from "react"
import MyContext from '../contexts/actions'
import { Container } from '../styles/index'

function App(){
    const [updateElement,setUpdate] = useState({update:false})
    return (
        <Container>
        <header></header>
        
        <main>
            <MyContext.Provider value={{updateElement,setUpdate}}>
                <TarefasComplete />
                <Tarefas />
            </MyContext.Provider>
        </main>

        <footer></footer>
        </Container>
    )
}


export default App


