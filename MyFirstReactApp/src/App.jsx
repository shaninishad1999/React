import React from "react";
import Cybrom from "./Cybrom"; // Import the Cybrom component
import "./style.css"; // Import external CSS file
import img1 from "./assets/Best_Prices_Offers.png"; // Import external
import img2 from "./assets/Binkeyit.png"; // Import external
import img3 from "./assets/empty_cart.webp"; // Import external
const AppFirst = () => {
  return (
    <div className="container">
      {/* <h1 className="heading-primary">Hello My First App</h1>
      <h2 className="heading-secondary">Hello My Second App</h2> */}
      {/* <Cybrom /> Now using the Cybrom component */}
      <img src={img1} alt="img1" width={"200px"} />
      <img src={img2} alt="img2" width={"200px"} />
      <img src={img3} alt="img3" width={"200px"} />
    </div>
  );
};

export default AppFirst;
