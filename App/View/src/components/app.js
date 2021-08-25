import Tarefas from './tarefas'
import TarefasComplete from './tarefasCompletes'
import styled from 'styled-components'
import React,{useContext, useState} from "react"


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


function App(){
    const [updateElement,setUpdate] = useState(false)
    return (
        <Container>
        <header></header>
        
        <main>
      
           <TarefasComplete updateElement={updateElement} setUpdate={setUpdate}></TarefasComplete>
            <Tarefas  setUpdate={setUpdate}></Tarefas>
      
        </main>

        <footer></footer>
        </Container>
    )
}


export default App


