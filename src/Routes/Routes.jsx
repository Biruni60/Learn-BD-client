import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Home/HomeComponents/Root";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/HomeComponents/Home";
import SingIn from "../USER/SingIn";
import SignUp from "../USER/SignUp";
import DashBoard from "../DashBoard/DashBoard";
import StudentHome from "../DashBoard/StudentDashBoard/StudentHome";
import MyEnrollClass from "../DashBoard/StudentDashBoard/MyEnrollClass";
import UserProfile from "../Shared/UserProfile";
import TeacharHome from "../DashBoard/TeacharDashBoard/TeacharHome";
import AddClass from "../DashBoard/TeacharDashBoard/AddClass";
import MyClass from "../DashBoard/TeacharDashBoard/MyClass";
import AdminHome from "../DashBoard/AdminDashBoard/AdminHome";
import AllUsers from "../DashBoard/AdminDashBoard/AllUsers";
import TeacherRequest from "../DashBoard/AdminDashBoard/TeacherRequest";

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
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:"dashboard",
      element:<DashBoard></DashBoard>,
      children:[
      //student routes
      {
        path:"/dashboard/studenthome",
        element:<StudentHome></StudentHome>
      },
      {
        path:"/dashboard/myenrollclasses",
        element:<MyEnrollClass></MyEnrollClass>
      },
      {
        path:"/dashboard/studentProfile",
        element:<UserProfile></UserProfile>
      },
      //teacher
      
      {
        path:"/dashboard/teacherhome",
        element:<TeacharHome></TeacharHome>
      },
      {
        path:"/dashboard/addclasses",
        element:<AddClass></AddClass>
      },
      {
        path:"/dashboard/myclasses",
        element:<MyClass></MyClass>
      },
      {
        path:"/dashboard/teacherProfile",
        element:<UserProfile></UserProfile>
      },
      //admin
      {
        path:"/dashboard/adminhome",
        element:<AdminHome></AdminHome>
      },
      {
        path:"/dashboard/allusers",
        element:<AllUsers></AllUsers>
      },
      {
        path:"/dashboard/teacherrequests",
        element:<TeacherRequest></TeacherRequest>
      },
      
      {
        path:"/dashboard/adminProfile",
        element:<UserProfile></UserProfile>
      },
      
      ]
    }
  ]);
  