import React, { useContext } from "react";
import AuthApp from "./AuthApp";
import UnAuthapp from "./UnAuthapp";
import { myContext } from "./LoginContext";

const App = () => {
  const {user}=useContext(myContext)
  return (
    <div>
      Welcom to App
      {user.auth ?<AuthApp/> : <UnAuthapp/>}
      
    
    </div>
  );
};

export default App;
