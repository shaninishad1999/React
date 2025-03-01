import React, { createContext, useState } from 'react';

// Create a context object
export const myColorContext = createContext();

const ColorContext = ({ children }) => {
  const [color, setColor] = useState("Red");

  return (
    <myColorContext.Provider value={{ color, setColor }}>
      {children}
    </myColorContext.Provider>
  );
}

export default ColorContext;
