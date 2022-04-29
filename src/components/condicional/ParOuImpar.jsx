import React from "react";

export default props => {  
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  const IsPar = aleatorio % 2 === 0;
  return (
    <div>
      <p>Valor Aleatório Par ou Ímpar</p>
      <p>
        <strong>Número aleatório:</strong> {aleatorio}
      </p>
      <p>Este número é:</p>
      <h2>
        <strong>{IsPar ? <span>Par</span> : <span>Ímpar</span>}</strong>
      </h2>
    </div>
  );
};
