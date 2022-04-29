import React from "react";
import alunos from "../../data/alunos.js";

export default (props) => {
  const listaDeAlunos = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id} - {aluno.nome} = {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <li>{listaDeAlunos}</li>
    </div>
  );
};
 