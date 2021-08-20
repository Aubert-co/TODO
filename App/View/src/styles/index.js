import styled from 'styled-components'
const Item = styled.div`

width: 33%;
background-color: white;
border: 5px solid rgb(34, 150, 185);

.item{
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
color: rgb(34, 150, 185);
}
.add{
    display: flex;
    justify-content: center;
}
.add h1{
    background-color: rgb(34, 150, 185);
    width: 30%;
    text-align: center;
    color: white;
    cursor: pointer;
    margin-left: 5px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 50px;
}
.add input{
    width: 100%;
    padding: 5%;
    outline: none;
    border: 5px solid rgb(34, 150, 185);
    color: rgb(34, 150, 185);
}
.done{
    display: flex;
    text-align: center;
    align-items: center; 
    width: 60%;
    justify-content: center;
    border: 5px solid rgb(34,150,185);
    font-size: large;
    height: 20%;
    align-content: center;
}
.done i{
    cursor: pointer;
}
.done .name{
    display: flex;
}
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
.itens{
    margin-top: 10px;
}
.open .itens{
    display: flex;
    width: 18%;
    flex-wrap: wrap;
    height: 70%;
}
`

export default Item