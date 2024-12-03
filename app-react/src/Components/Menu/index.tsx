import { Link } from "react-router-dom"
import PrefContext from "../../Context/generalContext"
import { useContext } from "react"
import Botao from "../Botao"


interface MenuInterface {
    className?: string
}


const Menu = ({ className }: MenuInterface) => {


    const prefs = useContext(PrefContext)
    console.log(prefs)


    return (
        <>
        <header className={className}>
                <span>&copy; targettrust</span>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/formulario">Formulário</Link>
            <Link to="/listagem">Listagem</Link>
            </nav>
        </header>
        <p>{prefs.tema}</p>
        <Botao label="troca" severity="danger" onClick={() => {
            if(prefs.tema === 'dark'){
                prefs.setTema('light')}
            else if(prefs.tema === 'light'){
                prefs.setTema('dark')
            }
            }}></Botao>
        
</>
    )
}

export default Menu