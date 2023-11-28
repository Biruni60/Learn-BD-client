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

import AdminHome from "../DashBoard/AdminDashBoard/AdminHome";
import AllUsers from "../DashBoard/AdminDashBoard/AllUsers/AllUsers";
import TeacherRequest from "../DashBoard/AdminDashBoard/TeacherRequest";
import MyClass from "../DashBoard/TeacharDashBoard/Myclasses/MyClass";
import UpdateClass from "../DashBoard/TeacharDashBoard/Myclasses/UpdateClass";
import SeeDetails from "../DashBoard/TeacharDashBoard/Myclasses/SeeDetails/SeeDetails";
import AdminClasses from "../DashBoard/AdminDashBoard/AdminClasses/AdminClasses";
import AllClasses from "../NavElement/AllClasses/AllClasses";
import TeachOn from "../NavElement/TrachOn/TeachOn";
import ClassDetail from "../NavElement/AllClasses/ClassDEtail";
import Payment from "../PAYMENT/Payment";
import ClassDetailInfo from "../DashBoard/TeacharDashBoard/Myclasses/SeeDetails/ClassDetailInfo";
import MyEnrollClassDetail from "../DashBoard/StudentDashBoard/MyEnrollClassDetail";
import AdminClass from "../DashBoard/AdminDashBoard/AdminClasses/AdminClass";

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
        },
        {
          path:"/allclasses",
          element:<AllClasses></AllClasses>
        },
        {
          path:"/teachon",
          element:<TeachOn></TeachOn>
        },{
          path:"/class/:id",
          element:<ClassDetail></ClassDetail>
        },
        {
          path:"/payment/:id",
          element:<Payment></Payment>
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
      {
        path:"/dashboard/myenrollclass/:id",
        element:<MyEnrollClassDetail></MyEnrollClassDetail>
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
      {
        path:"/dashboard/updateClass/:id",
        element:<UpdateClass></UpdateClass>
      },
      {
        path:"/dashboard/seeDetails",
        element:<SeeDetails></SeeDetails>
      },
      {
        path:"/dashboard/myclass/:id",
        element:<ClassDetailInfo></ClassDetailInfo>
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
      {
        path:"/dashboard/adminclasses",
        element:<AdminClasses></AdminClasses>
      },
      {
        path:"/dashboard/class/:id",
        element:<AdminClass></AdminClass>
      }
      ]
    }
  ]);
  