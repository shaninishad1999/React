import React, { useState } from "react";
import Comp1 from "./components/Comp1";
const App = () => {
  const [user, setUser] = useState("Shanideval");

  return (
    <>
      <h1>Welcome : {user}</h1>
      <Comp1 user={user} />
    </>
  );
};

export default App;
