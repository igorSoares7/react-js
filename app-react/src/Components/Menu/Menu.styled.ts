import styled from "styled-components";
import Menu from ".";
const MenuCustom = styled(Menu)`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  height: 40px;
  background-color: #00008B;
  padding: 5px;
  font-size: 1.5em;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-bottom: 20px;
 
  
  nav{
      padding: 10px;
      a{
          
            padding: 5px;
            color: whitesmoke;
            text-decoration: none;
            margin-left: 10px;
        }
        a:hover{
            font-size: 28px;
            transition: 0.5s;
        }
        a:not(:hover){
            font-size: 25px;
            transition: 0.5s;
        }
    }
            span{
            color: red;
            font-size: 15px;
            align-self: flex-end;
            color:red;
            
    
    }
`;

export default MenuCustom