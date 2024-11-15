import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuCustom from "./Components/Menu/Menu.styled"
import "./App.scss"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <MenuCustom />
        <Routes>
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="/formulario" element={<h1>FORMULARIO</h1>} />
          <Route path="/listagem" element={<h1>LISTAGEM</h1>} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App 
