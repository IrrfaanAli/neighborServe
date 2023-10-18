import Service_History from "../src/components/Service_History";
import App from "../src/App";
import AboutUs from "../src/components/AboutUs";
import Policy from "../src/components/Policy";
import Onboard_Verification from "../src/components/Onboard_Verification";
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
  