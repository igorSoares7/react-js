interface Caixas {
    azul:string,
    vermelho?:string,
    preto?:string
}

const Teste = ({azul, vermelho, preto}:Caixas) => {
    return (
        <>
        <div>{azul}</div>
        <div>{vermelho}</div>
        <div>{preto}</div>
        </>
    )
}

export default Teste