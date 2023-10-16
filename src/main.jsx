import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Browse_service from "./Browse_service.jsx";
import "./index.css";
import Service_Result from "./Service_Result.jsx";
import Provider_Profile from "./Provider_Profile.jsx";
import Edit_User from "./Edit_User.jsx";
import ProfileComponent from "./Component/profileComponent/ProfileComponent.jsx";

import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import PersonList from "./Component/profileComponent/PersonList.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

<RouterProvider router={router} />
    </React.StrictMode>,
)
