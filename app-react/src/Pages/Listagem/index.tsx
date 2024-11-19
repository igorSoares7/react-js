import { Link } from "react-router-dom";

interface className {
    className?: any
}

const Listagem = ({ className }: className) => {
    return (
        <section className={className}>
            <h1>Listagem</h1>
            <table className={className}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sigla</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <Link to="789">Recursos Humanos</Link>
                        </td>
                        <td>RH</td>
                    </tr>
                    <tr>
                        <td>Recursos Humanos</td>
                        <td>RH</td>
                    </tr>
                    <tr>
                        <td>Recursos Humanos</td>
                        <td>RH</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Listagem;