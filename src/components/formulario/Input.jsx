import React, {useState} from "react";

export default props => {
    const [valor, setValor] = useState("Valor inicial")

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return (
      <div>
        <h2>{valor}</h2>
        <div>
          <input value={valor} onChange={quandoMudar} />
          <input value={valor} readOnly />
        </div>
      </div>
    );
}