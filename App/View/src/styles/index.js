import styled from "styled-components";


export const Container = styled.div`
flex-direction: column;
height: 100vh;
background-color: rgb(19, 73, 134);
.name{
    display:flex;
flex-direction:column;
padding:5px
}
select{
    outline: none;
    color: rgb(34, 150, 185);
    font-size: medium;
    width: max-content;
}
header{height: 20%;}
footer{height: 10%;}
main{
height: 70%;
display: flex;
}
i{cursor: pointer;}
@media screen and (max-width: 1000px) {
    display: flex;
    height: 315vh;
   
    main{
        display: flex;
        height: 200%;
        flex-direction: column;
    }
    
    .DoneTasksDiv,.recomendation,.tarefas{
        height: 105vh;
        width: 100%;
        margin:0px
    }
    .tarefas{
        margin: 10px 0 10px 0;
    }
    .done{
        max-width: 70%;
        height: 15%;
    }
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
h3{
    max-width: max-content;
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


export const Done = styled.div`
    display: flex;
    text-align: center;
    align-items: center; 
    width: 50%;
    justify-content: center;
    border: 5px solid rgb(34,150,185);
    font-size: large;
    height: 20%;
    align-content: center;

`
export const DoneTasksDiv = styled.div`
width: 33%;
background-color: white;
border: 5px solid rgb(34, 150, 185);
`
export const TasksDiv = styled.div`
width: 33%;
background-color: white;
border: 5px solid rgb(34, 150, 185);
margin-left: 10px;
 
.open{
    height: 20%;
    width: 70%;    
}
`
export const Itens = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    width: 57px;
    border: 1px solid;
`

export const Recomendation = styled.div`
width: 33%;
background-color: white;
border: 5px solid rgb(34, 150, 185);
margin-left: 10px;

.itens{
    border:none;
    justify-content: center;
}
`