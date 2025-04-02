import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../redux/themeSlice";

const ThemeChanger = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const backgroundColor = useSelector((state) => state.theme.backgroundColor);

  const handleChangeColor = () => {
    dispatch(changeColor(color));
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor,
        height: "200px",
        transition: "background 0.3s ease",
      }}
    >
      <h2>Theme Changer</h2>
      <input
        type="text"
        placeholder="Enter color name or HEX"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button
        onClick={handleChangeColor}
        style={{
          padding: "8px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default ThemeChanger;
