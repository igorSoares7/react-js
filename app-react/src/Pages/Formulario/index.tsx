import BotaoCustom from "../../Components/Botao/botao.styled"
const Formulario = () => {
    return (
    <>
    <h1>Formulário</h1>
    <label>
        NOME:
        <br />
        <input
          type="text"
          name="nome"
          id="nome"
          maxLength={40}
          placeholder="Seu nome"
        />
      </label>
        <div>
      <label>
        <input type="number" name="idade" id="idade" min={14} max={99} />
      </label>
      </div>

      <BotaoCustom severity="primary" label="ENVIAR" />
    
    </>
    )
}

export default Formulario

