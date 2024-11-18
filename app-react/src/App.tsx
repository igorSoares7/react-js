import {BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.scss"
import "./Pages/Home"
import MenuCustom from "./Components/Menu/Menu.styled"
import Home from "./Pages/Home"
import Formulario from "./Pages/Formulario"

const App = () => {

  return (
    <>
    <BrowserRouter>
    <MenuCustom />
    <Routes>

    <Route path="/" element={<Home />}></Route>
    <Route path="/formulario" element={<Formulario />}></Route>
    <Route path="/listagem" element={'LISTAGEM'}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}



export default App
