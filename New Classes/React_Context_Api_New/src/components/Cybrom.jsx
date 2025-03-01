import React, { useContext } from "react";
import { myColorContext } from "../App";

const Cybrom = () => {
  const { color, setColor } = useContext(myColorContext); // Now both values are accessible

  return (
    <div>
      <h1>Welcome to Cybrom color: {color}</h1>
      <button onClick={() => setColor("pink")}>Click here</button>
    </div>
  );
};

export default Cybrom;
