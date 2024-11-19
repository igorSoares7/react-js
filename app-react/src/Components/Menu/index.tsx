interface MenuInterface {
    className?: string
}


const Menu = ({ className }: MenuInterface) => {
    return (
        <header className={className}>
                <span>&copy; targettrust</span>
            <nav>
                <a href="/">Home</a>
                <a href="/formulario">Formulário</a>
                <a href="/listagem">Listagem</a>
            </nav>
        </header>

    )
}

export default Menu