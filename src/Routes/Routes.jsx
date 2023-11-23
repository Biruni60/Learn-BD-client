import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Home/HomeComponents/Root";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/HomeComponents/Home";
import SingIn from "../USER/SingIn";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage />,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
           path: "/signin",
           element:<SingIn></SingIn>
        }
      ]
    },
  ]);
  