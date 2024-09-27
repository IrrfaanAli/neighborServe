import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Dashboard from "../Component/Dashboard/Dashboard";
import UserDashboard from "../Component/UserDashboard/UserDashboard";
import AdminDashboard from "../Component/AdminDashboard/AdminDashboard";
import ProviderDashboard from "../Component/ProviderDashboard/ProviderDashboard";
import Browse_service from "../Browse_service";
import Service_Result from "../Service_Result";
import Provider_Profile from "../Provider_Profile";
import Appointment from "../Component/Appointment";
import AppointmentDetails from "../Component/AppointmentDetails";
import Login from "../Login/Login";
import AboutUs from "../Component/AboutUs/AboutUs";
import Policy from "../Component/Policy/Policy";
import OnBoard_Verification from "../Component/Onboard_Verification/Onboard_Verification"
import Service_History from "../Component/Service_History/Service_History";

import TypeProvider from "../Component/TypeProvider/TypeProvider";
import ProviderDetails from "../Component/ProviderDetails/ProviderDetails";
import ProviderAccountDetails from "../Component/ProviderAccountDetails/ProviderAccountDetails";
import Login from "../Component/Login/Login";
import Registration from "../Component/Registration/Registration";
import ProviderLogin from "../Component/Login/ProviderLogin";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  
    {
      path: "/reg",
      element: <Registration/>,
    },{
       path: "/service",
       element: <ProviderLogin></ProviderLogin>
    },
    {
        path : '/users/provider/:type',
        element : <TypeProvider></TypeProvider>,
        loader: ({params}) => fetch(`http://localhost:5000/users/provider/${params.type}`)
    },
    {
      path : '/users/provider/details/:id',
      element : <ProviderAccountDetails></ProviderAccountDetails>,
      loader: ({params}) => fetch(`http://localhost:5000/users/provider/details/${params.id}`)

    },
    {
      path: "browse_service",
      element: <Browse_service></Browse_service>,
    },
    {
      path: "search_result/:searchString",
      element: <Service_Result></Service_Result>,
    },
    {
      path: "provider_profile/:searchString",
      element: <Provider_Profile />,
    },
    {
      path: "appointment",
      element: <Appointment />,
    },
    {
      path: "appointment_details/:searchString",
      element: <AppointmentDetails />,
    },
    {
      path: "about",
      element: <AboutUs/>,
    },
    {
      path: "policy",
      element: <Policy/>,
    },
    {
      path: "verify",
      element: <OnBoard_Verification/>,
    },
    {
      path: "service",
      element: <Service_History/>,
    },  
    {
        path : 'dashboard',
        element : <Dashboard></Dashboard>,
        children : [

           {
            path : 'userdashboard',
            element: <UserDashboard></UserDashboard>
           },
           {
             path : 'admindashboard',
             element : <AdminDashboard></AdminDashboard>
           },
          {
            path: 'providerdashboard',
            element : <ProviderDashboard></ProviderDashboard>
          }
        ]
    }
  ]);

