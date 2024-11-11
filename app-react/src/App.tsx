
import './App.css'

function App() {
const welcome = <h1>Bem vindo ao curso de React</h1>
const gostando = true


  return (
    <>
    <div>
      <h1>Aula 01</h1>
      <h2>Introdução ao React</h2>
    <div>xxxx</div>
    {welcome}
    <p>Está gostando do curso? {gostando ? 'sim' : 'não'}</p>
    </div>
  
  
  </>  
)
}

export default App
