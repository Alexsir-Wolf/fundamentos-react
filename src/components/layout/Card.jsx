import React from "react";
import "./Card.css";

export default (props) => {
    //atributos personalizados no objeto, cor e borda do card
  const Cardstyle = {
    backgroundColor: props.color || "#808080", 
    borderColor: props.color || "#808080",
  };
  return (
    <div className="Card" style={Cardstyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
