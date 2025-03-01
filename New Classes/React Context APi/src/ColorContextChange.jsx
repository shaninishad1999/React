import React, { createContext, useState } from 'react';

const myColorContext = createContext();

const ColorContextChange = ({ children }) => {
  const [color, setColor] = useState("Red");
  const [textColor, settextColor] = useState(""); // Added this for `Cybrom`

  return (
    <myColorContext.Provider value={{ color, setColor, textColor, settextColor }}>
      {children}
    </myColorContext.Provider>
  );
};

export default ColorContextChange;
export { myColorContext };
