interface TituloProps {
    nome: string,

}

const Titulo = ({nome}: TituloProps) => {

    return (
        <>
            <h1>{nome}</h1>
            
        </>
    )


}

export default Titulo