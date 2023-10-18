import Service_History from "../components/Service_History";
import App from "../App";
import AboutUs from "../components/AboutUs";
import Policy from "../components/Policy";
import Onboard_Verification from "../components/Onboard_Verification";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
      path: "about",
      element: <AboutUs></AboutUs>,
    },
    {
      path: "policy",
      element: <Policy></Policy>,
    },
    {
      path: "verify",
      element: <Onboard_Verification></Onboard_Verification>,
    },
    {
      path: "service",
      element: <Service_History></Service_History>,
    },
  ]);
  