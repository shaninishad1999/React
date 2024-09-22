import Cybrom from "./Cybrom";

import Bhopal from "./Bhopal";

// internal css

const data = {
  fontFamily: "Arial",
  color: "red",

  border: "8px solid green",
  display: "inline-block",
  padding: "20px",
};

const App = () => {
  return (
    // inline csss
    <>
      {/* <h1
        style={{
          color: "red",
          fontFamily: "Arial",
          textDecoration: "Underline",
        }}
      >
        We learn Inline Css Today
      </h1>

      <h2
        style={{
          fontSize: "44px",
          color: "green",
          fontFamily: "cursive",
          border: "8px solid red",
          display: "inline-block",
        }}
      >
        Learn React Js By Rajesh Sir
      </h2> */}

      <h1 style={data}>Welcome to Cybrom App Page</h1>

      <Bhopal />
      <Cybrom />
    </>
  );
};

export default App;
