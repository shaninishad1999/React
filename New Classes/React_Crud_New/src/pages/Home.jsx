import React from "react";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center", // Fixed justifyItems
        // height: "100vh",
        fontSize: "24px", // Added better readability
      }}
    >
      Welcome to the Home page
    </div>
  );
};

export default Home;
