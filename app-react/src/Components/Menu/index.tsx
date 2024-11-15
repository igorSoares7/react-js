interface MenuInterface{
    className?:string
}


const Menu = ({className}:MenuInterface) => {
    return (
        <div className={className}>
        <nav>
            <a href="#">Home</a>
            <a href="#">Formulário</a>
            <a href="#">Listagem</a>
        </nav>
        </div>
        
    )
}

export default Menu