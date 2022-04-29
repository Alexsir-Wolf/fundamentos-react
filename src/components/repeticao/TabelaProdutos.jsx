import "./TabelaProdutos.css";
import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  const listId = produtos.map((produto, i) => {
    return <tr key={produto.id}>{produto.id}</tr>;
  });

  const listNome = produtos.map((produto) => {
    return <tr key={produto.id}>{produto.nome}</tr>;
  });

  const listPreco = produtos.map((produto) => {
    return <tr key={produto.id}>R$ {produto.preco}</tr>;
  });

  return (
    <div>
      <table className="tabela">
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{listId}</td>
            <td>{listNome}</td>
            <td>{listPreco}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
