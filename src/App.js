import React, { createContext } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export const NameContext = createContext();

function App({ name }) {
  return (
    <div>
      <h1>{name} from app</h1>
      <NameContext.Provider value={name}>
        <Child1 />
      </NameContext.Provider>
    </div>
  );
}

App.defaultProps = {
  name: "Greg",
};

export default App;
