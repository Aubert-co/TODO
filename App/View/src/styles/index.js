import styled from "styled-components";


export const Container = styled.div`
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

export const Name =styled.div`
.name{
    display: flex;
}
`
export const Add = styled.div`
display: flex;
justify-content: center;
h1{
    background-color: rgb(34, 150, 185);
    width: 30%;
    text-align: center;
    color: white;
    cursor: pointer;
    margin-left: 5px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 50px;
}
input{
    width: 100%;
    padding: 5%;
    outline: none;
    border: 5px solid rgb(34, 150, 185);
    color: rgb(34, 150, 185);
}
`

export const Item = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
color: rgb(34, 150, 185);

`
export const Itens = styled.div`
    margin-top: 10px;
    display: flex;
    width: 18%;
    flex-wrap: wrap;
    height: 70%;
`

export const Done = styled.div`
display: flex;
text-align: center;
align-items: center; 
width: 60%;
justify-content: center;
border: 5px solid rgb(34,150,185);
font-size: large;
height: 20%;
align-content: center;
i{
    cursor: pointer;
    }
`
export const TarefasFeitas = styled.div`
width: 33%;
background-color: white;
border: 5px solid rgb(34, 150, 185);
`
export const TarefasDiv = styled.div`
width: 33%;
background-color: white;
border: 5px solid rgb(34, 150, 185);
margin-left: 10px;
 select{
    margin-left: 20px;
    outline: none;
    color: rgb(34, 150, 185);
    font-size: medium;
}
.open{
    height: 20%;
    width: 70%;    
}

`