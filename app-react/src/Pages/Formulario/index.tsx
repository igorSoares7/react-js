import { useState } from "react"
import BotaoCustom from "../../Components/Botao/botao.styled"

interface className {
    className?: any
}


const Formulario = ({ className }: className) => {
    const [nome, setNome] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [sigla, setSigla] = useState("")
    return (

        <section className={className}>
            <h1>Formulário</h1>
            <label>
                NOME:
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Insira seu nome aqui"
                    value={nome}
                    onChange={evt => {
                        setNome(evt.target.value)
                        console.log({ nome });
                    }

                    }

                />
            </label>
            <br />
            <br />
            <div>
                <label>
                    SIGLA:
                    <input
                        type="text"
                        name="sigla"
                        id="sigla"
                        placeholder="Insira seu nome aqui"
                        value={sigla}
                        onChange={(evt) => {
                            setSigla(evt.target.value)
                        }}
                    />
                </label>
            </div>
            <br />
            <BotaoCustom severity="primary" label="ENVIAR" onClick={() => {
                setMensagem("")
                if(sigla === "" && nome === "") {
                    setMensagem("Preencha nome e sigla corretamente")
                }
                else if (nome === "") {
                    setMensagem("Preencha o nome!")
                }

                else if(sigla === "") {
                    setMensagem("Preencha a sigla corretamente")
                }


                
            }}
            />
            {mensagem != "" && <div className="mensagem">{mensagem}</div>}
        </section>


    )
}
export default Formulario

