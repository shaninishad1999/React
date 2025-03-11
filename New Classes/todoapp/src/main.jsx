import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";  // Import Provider
import store from "./store";  // Import Redux store
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>  
    <App />
  </Provider>
);
