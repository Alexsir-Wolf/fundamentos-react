import React, { cloneElement } from "react";

export default (props) => {
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        return cloneElement(child, props);
      })}
    </div>
  );
};

//<FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
//<FamiliaMembro nome="Ana" {...props} /> {/*OBS {...props} = spread*/}
//<FamiliaMembro nome="Gustavo" sobrenome="Pedroza" />
