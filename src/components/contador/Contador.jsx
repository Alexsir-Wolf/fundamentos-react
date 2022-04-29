import React, { useState } from "react";
import "./Contador.css";

export default (props) => {
    const [count, setCount] = useState(0);

  return (
    <div>      
        <h1>{count}</h1>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>-</button>
          <button className="resetBtn" onClick={() => setCount(0)}>reset</button>
          <button className="btn" onClick={() => setCount(count + 1)}>+</button>
        </div>
    </div>
    )
}