import React, { useContext } from "react";
import { NameContext } from "./App";

function Child2() {
  const name = useContext(NameContext);
  return (
    <div>
      <h1>{name} from child2</h1>
    </div>
  );
}

export default Child2;
