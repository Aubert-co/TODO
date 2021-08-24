import Tarefas from './tarefas'
import TarefasComplete from './tarefasCompletes'
import styled from 'styled-components'
import React,{useState} from "react"
import MyContext from './contexts/myContext'


const Container = styled.div`
    flex-direction: column;
    height: 100vh;
    background-color: rgb(19, 73, 134);

header{height: 20%;}
footer{height: 10%;}
main{
    height: 70%;
    display: flex;
}
`
const Update = {
    render:false
}
const UpdateItem = React.createContext(Update.render)
function App(){
    
    return (
        <Container>
        <header></header>
        
        <main>
            <UpdateItem>
           <TarefasComplete ></TarefasComplete>
            <Tarefas ></Tarefas>
            </UpdateItem>
        </main>

        <footer></footer>
        </Container>
    )
}


export default App


