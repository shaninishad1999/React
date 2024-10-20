import React from "react";
import Button from "./components/Button";
import Button2 from "./components/Button2";

const App = () => {
  return (
    <>
      <div>
        <Button pt="15px" pb="15px" pl="30px" pr="30px">
          Click Me
        </Button>
        <Button2/>
      </div>
    </>
  );
};

export default App;
