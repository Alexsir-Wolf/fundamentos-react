import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props =>{
    return (
        <div>
            <DiretaFilho nome="José" idade={20} sexo={true}/>
            <DiretaFilho nome="Maria" idade={34} sexo={false}/>
            <DiretaFilho nome="Juliana" idade={54} sexo={false}/>
            <DiretaFilho nome="Otto" idade={66} sexo={true}/>
        </div>
    )
}