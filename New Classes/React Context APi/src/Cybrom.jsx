import React, { useContext } from 'react';
import { myColorContext } from './ColorContextChange';

const Cybrom = () => {
  const { textColor, settextColor, color, setColor } = useContext(myColorContext);

  return (
    <div>
      <h1>Welcome to Cybrom, color: {color}</h1>
      Enter Color: <input type='text' value={textColor} onChange={(e) => settextColor(e.target.value)} />
      <button onClick={() => setColor(textColor)}>Apply Color</button>
      <div style={{ backgroundColor: color, width: "300px", height: "300px", marginTop: "10px" }}></div>
    </div>
  );
}

export default Cybrom;
