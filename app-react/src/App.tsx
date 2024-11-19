import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.scss"
import "./Pages/Aside"
import MenuCustom from "./Components/Menu/Menu.styled"
import AsideStyled from "./Pages/Aside/AsideStyled"
import FormularioStyled from "./Pages/Formulario/Formulario.styled"
import ListagemCustom from "./Pages/Listagem/Listagem.styled"
import ListagemDetalhes from "./Pages/Listagem/Detalhes"



const App = () => {

  return (
    <>
    <div>
      <BrowserRouter>
        <MenuCustom />
        <AsideStyled />
       <section>
          <Routes>
            <Route path="/" element={<FormularioStyled/>}></Route>
            <Route path="/formulario" element={<FormularioStyled />}></Route>

            <Route path="/listagem">
              <Route index element={<ListagemCustom />} />
              <Route path=":id" element={<ListagemDetalhes />} />
            </Route>
          </Routes>
          </section>
        
      </BrowserRouter>
      </div>
    </>
  )
}



export default App
