import styled from "styled-components";
import Home from ".";

const HomeStyled = styled(Home)`
.maior{
    display: flex;
    grid-area: main;
    height: 600px;
    flex-wrap: wrap;
    gap: 10px;
    
    
    
    .conteudo-main{
        background-color: aliceblue;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        height: 295px;
        width: 30%;
    }

}
`

export default HomeStyled


