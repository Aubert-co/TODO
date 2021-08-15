import Tarefas from './tarefas'
import TarefasComplete from './tarefasCompletes'
import styled from 'styled-components'
import React,{useState} from "react"
const Main = styled.main`

`
const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background-color: rgb(19, 73, 134);

header{height: 20%;}
main{
    height: 70%;
    display: flex;
}
footer{height: 10%;}
`
function App(){

    return (
        <Container>
        <header></header>
        
        <main>
           <TarefasComplete></TarefasComplete>
            <Tarefas></Tarefas>
        </main>

        <footer></footer>
        </Container>
    )
}


export default App