import React, { createContext, useState } from "react";
import Bhopal from "./components/Bhopal";
import Comp1 from "./components/Comp1";

export const myContext = createContext();
export const myColorContext = createContext();

const App = () => {
  const [user, setUser] = useState("Shanideval");
  const [color, setColor] = useState("Red");

  return (
    <div>
      <h1>This App file Welcome: {user}</h1>
      <myContext.Provider value={{ user }}>
        <Comp1 />
      </myContext.Provider>

      <h1>My app color: {color}</h1>
      <button onClick={() => setColor("blue")}>Change color</button>

      {/* Pass both color and setColor as an object */}
      <myColorContext.Provider value={{ color, setColor }}>
        <Bhopal />
      </myColorContext.Provider>
    </div>
  );
};

export default App;
