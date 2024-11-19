import { StrictMode } from "react"
import BotaoCustom from "../../Components/Botao/botao.styled"

interface className {
    className?: any
}
const Formulario = ({ className }: className) => {
    return (
        <StrictMode>
        <section className={className}>
            <h1>Formulário</h1>
            <label>
                NOME:
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    maxLength={40}
                    placeholder="Seu nome"
                />
            </label>
            <br />
            <br />
            <div>
                <label>
                    IDADE:
                    <input type="number" name="idade" id="idade" min={14} max={99} />
                </label>
            </div>
            <br />
            <BotaoCustom severity="primary" label="ENVIAR" />
        </section>
        </StrictMode>
    )
}
export default Formulario

