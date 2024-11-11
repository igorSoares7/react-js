
import './App.css'

function App() {
  const welcome = <h1>Bem vindo ao curso de React</h1>
  const gostando = true
  const numero = 3
  const cursos = ['HTML', 'CSS', 'JS']


  return (
    <>
      <div>
        <h1>Aula 01</h1>
        <h2>Introdução ao React</h2>
        {welcome}
        <p>Está gostando do curso? {gostando ? 'Estou curtindo' : <h3>Não estou curtindo</h3>}</p>
      </div>

      <p className={numero % 2 ? 'impar' : 'par'}>{numero}</p>

      {gostando &&
        <div>
          <h3>Estou curtindo muito</h3>
        </div>}

       {cursos.map((curso) => {
        return <p>{curso}</p>
       })}
    </>
  )
}

export default App
