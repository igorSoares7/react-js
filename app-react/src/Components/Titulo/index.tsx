import { StyledFooter, StyledTitulo } from "./titulo.styled"


interface TituloProps {
    nome: string,

}

const Titulo = ({ nome }: TituloProps) => {

    return (
        <>
            {/* <h1 className="danger">{nome}</h1> */}

            <StyledTitulo>
                <div>{nome}</div>
            </StyledTitulo>
            <StyledFooter>&copy; targettrust</StyledFooter>

        </>
    )


}

export default Titulo