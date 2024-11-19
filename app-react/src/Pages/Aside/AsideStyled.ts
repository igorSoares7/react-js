import styled from "styled-components";
import Aside from ".";

const AsideStyled = styled(Aside)`

.aside {
    display: flex;
    grid-area: aside;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    height: 600px;
   
    .conteudo-aside{
       border: 1px solid black;
       
       
    }
    
}




`

export default AsideStyled