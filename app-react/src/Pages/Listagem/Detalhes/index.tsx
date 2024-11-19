import { useParams } from "react-router-dom";

const ListagemDetalhes = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Detalhes do Item {id}</h1>
    </>
  );
};

export default ListagemDetalhes;