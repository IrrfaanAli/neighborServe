import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Dashboard from "../Component/Dashboard/Dashboard";
import UserDashboard from "../Component/UserDashboard/UserDashboard";
import AdminDashboard from "../Component/AdminDashboard/AdminDashboard";
import ProviderDashboard from "../Component/ProviderDashboard/ProviderDashboard";
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