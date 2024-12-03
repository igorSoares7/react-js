import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BotaoCustom from "../../Components/Botao/botao.styled";
import api from "../../Services/api";


interface ListagemInterface {
    className?: any
}

type Departamento = {
    id_departamento: number;
    nome: string;
    sigla: string;
  };
  


const Listagem = ({ className }: ListagemInterface) => {

    const [items, setItems] = useState<Departamento[]>([]) 

    const navigate = useNavigate();

    useEffect(() => {
        const listaDepartamentos = async () => {
            try {
                const result = await api.get("/departamentos")
                setItems(result.data)
                console.log(result.data)
            } catch (e) {
                console.log('deu pau na api')
            }
        };
        if (items.length === 0) {

            listaDepartamentos()
            console.log(items)
        }
    }, [items])



    return (
        <section>
            <h1>Listagem</h1>
            <BotaoCustom severity="primary" label="voltar" onClick={() => { navigate("/") }} />
            <table className={className}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sigla</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item,index) => {
                        return (
                            <tr key={index}>
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