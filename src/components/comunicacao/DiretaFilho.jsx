import React from "react";

export default (props) => {
  return (
    <div>
      <span>
        <strong>{props.nome}</strong> -{" "}
      </span>
      <span>{props.idade} anos </span>
      <span>- Sexo: {props.sexo ? "Masculino" : "Feminino"}</span>
    </div>
  );
};
