import { useEffect, useState } from "react"
import './App.scss'
import Titulo from './Components/Titulo'
import Placeholder from './Components/Placeholder'
import Botao from './Components/Botao'

const App = () => {

  const [numero, setNumero] = useState(0);
  const [nome, setNome] = useState('')

  useEffect(() => {
    if(numero =! 0){

      console.log('entrou')
    }
  }, [numero])



  return (


    <>
      <h1>{numero}</h1>
      <Titulo
        nome={'Igor'}
        data={new Date(22, 11, 1900)}
        descricao={`Curso introdutório ${numero}`}
      >
      </Titulo>
        <h1>Bem vindo {nome}</h1>
      <Placeholder />
      <Botao label='primary' severity='primary' onClick={() => {
        setNome('Cicero')
      }}/>
      <Botao label='-1' severity='warning' onClick={() => {
        setNumero(numero - 1)
      }} />
      <Botao label='+1' severity='danger' onClick={() => {
        setNumero(numero + 1)

      }}
      />
      <h1>{numero}</h1>
    </>
  )
}

export default App 
