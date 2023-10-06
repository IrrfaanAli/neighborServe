import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Browse_service from "./Browse_service.jsx";
import "./index.css";
import Service_Result from "./Service_Result.jsx";
import Provider_Profile from "./Provider_Profile.jsx";
import Edit_User from "./Edit_User.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Browse_service />
  </React.StrictMode>
);
