import { Link } from "react-router-dom"
interface MenuInterface {
    className?: string
}


const Menu = ({ className }: MenuInterface) => {
    return (
        <header className={className}>
                <span>&copy; targettrust</span>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/formulario">Formulário</Link>
            <Link to="/listagem">Listagem</Link>
            </nav>
        </header>

    )
}

export default Menu