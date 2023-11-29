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
import TeachOn from "../NavElement/TeachOn/TeachOn";
import ClassDetail from "../NavElement/AllClasses/ClassDEtail";
import Payment from "../PAYMENT/Payment";
import ClassDetailInfo from "../DashBoard/TeacharDashBoard/Myclasses/SeeDetails/ClassDetailInfo";
import MyEnrollClassDetail from "../DashBoard/StudentDashBoard/MyEnrollClassDetail";
import AdminClass from "../DashBoard/AdminDashBoard/AdminClasses/AdminClass";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import TeacherRoute from "./TeacherRoute";

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
          element:<PrivateRoute><TeachOn></TeachOn></PrivateRoute>
        },{
          path:"/class/:id",
          element:<PrivateRoute><ClassDetail></ClassDetail></PrivateRoute>
        },
        {
          path:"/payment/:id",
          element:<PrivateRoute><Payment></Payment></PrivateRoute>
        }
      ]
    },
    {
      path:"dashboard",
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
      //student routes
      {
        path:"/dashboard/studenthome",
        element:<PrivateRoute><StudentHome></StudentHome></PrivateRoute>
      },
      {
        path:"/dashboard/myenrollclasses",
        element:<PrivateRoute><MyEnrollClass></MyEnrollClass></PrivateRoute>
      },
      {
        path:"/dashboard/studentProfile",
        element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path:"/dashboard/myenrollclass/:id",
        element:<PrivateRoute><MyEnrollClassDetail></MyEnrollClassDetail></PrivateRoute>
      },
      //teacher
      
      {
        path:"/dashboard/teacherhome",
        element:<TeacherRoute><TeacharHome></TeacharHome></TeacherRoute>
      },
      {
        path:"/dashboard/addclasses",
        element:<TeacherRoute><AddClass></AddClass></TeacherRoute>
      },
      {
        path:"/dashboard/myclasses",
        element:<TeacherRoute><MyClass></MyClass></TeacherRoute>
      },
      {
        path:"/dashboard/teacherProfile",
        element:<TeacherRoute><UserProfile></UserProfile></TeacherRoute>
      },
      {
        path:"/dashboard/updateClass/:id",
        element:<TeacherRoute><UpdateClass></UpdateClass></TeacherRoute>
      },
      {
        path:"/dashboard/seeDetails",
        element:<TeacherRoute><SeeDetails></SeeDetails></TeacherRoute>
      },
      {
        path:"/dashboard/myclass/:id",
        element:<TeacherRoute><ClassDetailInfo></ClassDetailInfo></TeacherRoute>
      },
      
      //admin
      {
        path:"/dashboard/adminhome",
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:"/dashboard/allusers",
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:"/dashboard/teacherrequests",
        element:<AdminRoute><TeacherRequest></TeacherRequest></AdminRoute>
      },
      
      {
        path:"/dashboard/adminProfile",
        element:<AdminRoute><UserProfile></UserProfile></AdminRoute>
      },
      {
        path:"/dashboard/adminclasses",
        element:<AdminRoute><AdminClasses></AdminClasses></AdminRoute>
      },
      {
        path:"/dashboard/class/:id",
        element:<AdminRoute><AdminClass></AdminClass> </AdminRoute>
      }
      ]
    }
  ]);
  