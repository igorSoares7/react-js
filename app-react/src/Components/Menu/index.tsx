interface MenuInterface{
    className?:string
}


const Menu = ({className}:MenuInterface) => {
    return (
        <div className={className}>
        <nav>
            <a href="#">Home</a>
            <a href="/formulario">Formulário</a>
            <a href="/listagem">Listagem</a>
        </nav>
        </div>
        
    )
}

export default Menu