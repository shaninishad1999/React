import React, { useContext } from "react";
import { myContext } from "../App"; // Ensure correct import

const Comp5 = () => {
  const { user } = useContext(myContext); // Get user from context

  return (
    <div>
      <h2>Comp5</h2>
      <p>Welcome user: {user}</p>
    </div>
  );
};

export default Comp5;
