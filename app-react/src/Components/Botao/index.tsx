interface BotaoProps {
    label: string,
    severity: "danger" | "primary" | "secondary" | "warning"
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    className?:string
}




const Botao = ({ className, label, severity, onClick }: BotaoProps) => {
    return (
        <>
            <button className={`${className} ${severity}`} onClick={onClick}>
                {label}
            </button>
        </>
    )
}

export default Botao