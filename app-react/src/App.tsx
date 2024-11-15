import React, { useEffect, useState } from "react"
import Titulo from './Components/Titulo'
import BotaoCustom from "./Components/Botao/botao.styled"
import MenuCustom from "./Components/Menu/Menu.styled"
import Teste from "./Components/Teste"

interface OpcaoCursoProps {
  item:string,
}

const App = () => {

  const [curso, setCurso] = useState("Nenhum curso selecionado")

  const handlerCurso = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCurso(evt.target.value)
  }

  useEffect(() => {
    console.log("Mudou o state")
  })
  useEffect(() => {
    console.log("Mudou o state do curso")
  },[curso])

  const cursos = ['ReactJS', 'NodeJS', 'CSS e JS PRO']

  const OpcaoCurso = ({item}:OpcaoCursoProps) => (
      <>
      <label>
        <input
          type="radio"
          name="curso"
          value={item}
          onChange={handlerCurso}
          checked={curso == item}
        />
        {item}
      </label>
      <br />
      </>
  )

  return (
    <>
      <MenuCustom />
      <h1>Ok</h1>


      <Titulo nome={curso} />


    {cursos.map((item, index) => {
      return <OpcaoCurso item={item} key={index} />
    })}

    <BotaoCustom severity="warning" label="Perigoso" />
    <Teste azul="essa é a azul"></Teste>
    </>
  )
}

export default App 
