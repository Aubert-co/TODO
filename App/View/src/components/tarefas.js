import React,{useState} from "react"
import styled from 'styled-components'
import Api from '../service/index'
const {ApiInsert}  = Api
const TarefasDiv = styled.div`
width: 33%;
background-color: white;
border: 5px solid rgb(34, 150, 185);
margin-left: 10px;
`
const Item = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
color: rgb(34, 150, 185);
`
const Add = styled.div`
display: flex;
justify-content: center;
input{
    width: 100%;
    padding: 5%;
    outline: none;
    border: 5px solid rgb(34, 150, 185);
    color: rgb(34, 150, 185);
};
button{
    background-color: rgb(34, 150, 185);
    width: 30%;
    text-align: center;
    color: white;
    cursor: pointer;
    margin-left: 5px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 50px;
}
`

//const App =()=><Btn>BUTTON</Btn>
const AddTask = ()=>{
    const [values,setValues] = useState("")

    const changeValues =({target})=>setValues(target.value)
    const sendValues = ()=>{
        console.log(values)
    }
    return (
        <Add>
            <input type="text" onChange={changeValues} />
            <button onClick={sendValues}>+</button>
        </Add>
    )
}
function Tarefas(){

    return (
        
        <TarefasDiv>
            <Item>
                <h1>TODO LIST</h1>
                    <AddTask />
                       
            </Item> 
        </TarefasDiv>
    
    )
}
export default  Tarefas