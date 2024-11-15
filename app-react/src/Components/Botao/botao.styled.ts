import styled from "styled-components"
import Botao from "."
const BotaoCustom = styled(Botao)`
     
    padding: 5px;
    margin: 5px;
    color: white;
    border-radius: 3px;
    border:1px solid black;
   
    
    &.primary{
        background-color: aquamarine
    }
    
    &.warning{
        background-color: green;
    }
    
    &.danger{
        background-color: red
    }
    


` 
export default BotaoCustom