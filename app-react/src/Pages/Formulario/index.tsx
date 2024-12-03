import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BotaoCustom from "../../Components/Botao/botao.styled"
import api from "../../Services/api"

interface className {
    className?: any
}


const Formulario = ({ className }: className) => {
 

    const [nome, setNome] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [sigla, setSigla] = useState("")
    const navigate = useNavigate()
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
            <BotaoCustom severity="primary" label="SALVAR" onClick={async () => {
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
                try {
                await api.post("/departamentos", {
                     nome: nome,
                     sigla: sigla
                })
                navigate("/listagem")
            }catch(e:any){
                const erro = e?.response?.data?.message
               setMensagem(`[${erro}] Deu erro`)
            }
                
            }}
            />
            {mensagem != "" && <div className="mensagem">{mensagem}</div>}
        </section>


    )
}
export default Formulario

