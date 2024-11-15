import React, {useState} from "react"
// import "./App.scss"
import "./Pages/Home"
// import Teste from "./Components/Teste"
import StyledTeste from "./Components/Teste/Teste.styled"


const App = () => {

  const [cor, setCor] = useState("")

 
  return (
    <>
    <StyledTeste label={cor} className={cor}/>
      <StyledTeste labelBotao="rosa"  onClick={() => setCor('rosa')}/>
      <StyledTeste labelBotao='azul' onClick={() => setCor('azul')}/>
    </>
  )
}



export default App
