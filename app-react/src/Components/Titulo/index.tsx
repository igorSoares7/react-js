interface TituloProps {
    nome: string,
    data: Date,
    descricao: string,
    children?: React.ReactNode
}

const Titulo = ({ nome, data, descricao, children}: TituloProps) => {

    return (
        <>
            <h1>{nome}</h1>
            <h2>{data.toLocaleDateString()}</h2>
            <hr />
            {descricao}
            <hr />
            {children}
        </>
    )


}

export default Titulo