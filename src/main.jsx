import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Browse_service from "./Browse_service.jsx";
import "./index.css";
import Service_Result from "./Service_Result.jsx";
import Provider_Profile from "./Provider_Profile.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider_Profile />
  </React.StrictMode>
);
