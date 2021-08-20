import styled from 'styled-components'
const TarefasFeitas = styled.div`
width: 33%;
background-color: white;
border: 5px solid rgb(34, 150, 185);

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
.itens{
    margin-top: 10px;
}
.item{    
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   color: rgb(34, 150, 185);
}
`
export default TarefasFeitas