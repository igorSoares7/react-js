import styled from "styled-components";
import Listagem from ".";

const ListagemCustom = styled(Listagem)`
grid-area: section;
  grid-area: section;
  width: 100%;
  border-collapse: collapse; // Remove espaçamentos entre células
  font-size: 14px;
  background-color: #f8f9fa; // Fundo claro
  border: 1px solid #dee2e6; // Bordas sutis
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); // Sombra suave para destaque

  th,
  td {
    padding: 12px 16px; // Espaçamento confortável
    text-align: left; // Alinhamento de texto
    border: 1px solid #dee2e6; // Bordas sutis entre células
  }

  th {
    background-color: #343a40; // Fundo escuro
    color: #ffffff; // Texto claro
    font-weight: bold;
    text-transform: uppercase; // Letras maiúsculas para cabeçalho
  }

  tr:nth-child(even) {
    background-color: #e9ecef; // Linhas pares com fundo alternado
  }

  tr:hover {
    background-color: #ced4da; // Fundo destacado ao passar o mouse
  }

  td {
    color: #495057; // Texto neutro
  }
`;


export default ListagemCustom