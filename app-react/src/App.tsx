import React, { useState } from "react"
import './App.scss'
import Titulo from './Components/Titulo'
import Placeholder from './Components/Placeholder'
import Botao from './Components/Botao'

interface OpcaoCursoProps {
  item:string,
}

const App = () => {

  const [curso, setCurso] = useState("Nenhum curso selecionado")

  const handlerCurso = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCurso(evt.target.value)
  }

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

      <h1>Ok</h1>


      <Titulo nome={curso} />

    {cursos.map((item, index) => {
      return <OpcaoCurso item={item} key={index} />
    })}


    </>
  )
}

export default App 
