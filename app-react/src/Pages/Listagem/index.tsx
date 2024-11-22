import { useState, useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import BotaoCustom from "../../Components/Botao/botao.styled";
import api from "../../Services/api";


interface ListagemInterface {
    className?: any
}




const Listagem = ({ className }: ListagemInterface) => {
    
const [items, setItems] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const listaDepartamentos = async () => {
            try {
            const result = await api.get("/departamentos")
            setItems(result.data)
            } catch(e) {
                console.log("DEU PAU NA API")
            }
        };
        listaDepartamentos();
    }, [items])


    return (
        <section>
            <h1>Listagem</h1>
            <BotaoCustom severity="primary" label="voltar" onClick={() => {navigate("/")}}/>
            <table className={className}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sigla</th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item) => {
                        return (
                            <tr>
                                <td>
                                <Link to={`${item.id_departamento}`}>   {item.nome}</Link>
                                </td>
                                <td>
                                    {item.sigla}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </section>
    );
};

export default Listagem;