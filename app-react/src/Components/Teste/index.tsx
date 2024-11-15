interface Caixas {
    label?: string,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    labelBotao?: string

}

const Teste = ({ label, className, onClick, labelBotao }: Caixas) => {
    return (
        <>
            <h1 className={className}>
                {label}
            </h1>

            <button onClick={onClick} className={className}>{labelBotao}</button>

        </>
    )
}

export default Teste 