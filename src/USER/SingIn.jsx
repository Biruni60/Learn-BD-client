import { Helmet } from "react-helmet-async";
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const SingIn = () => {
    const {googleSignIn,logIn}=useContext(AuthContext);
    const axiosPublic=useAxiosPublic()
    const location=useLocation()
    const navigate=useNavigate()
    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        form.reset();
        logIn(email,password)
        .then(result=>{
            console.log(result.user);
            toast("user created successfully")
            navigate(location.state? location.state:"/")
        })
        .catch(error=>toast(error.message))

    }
    const handlegoogle=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result);
            const userInfo = {
              name: result.user.displayName,
              email: result.user.email
          }
          axiosPublic.post('/users', userInfo)
              .then(res => {
                console.log(res);
                  if (res.data.insertedId) {
                      console.log('user added to the database')
                     
                     toast("User LoggedIn Succesfully")
                     navigate(location.state? location.state:"/")
                  }
                  
              })
           
        })
        .catch(error=>toast(error.message))}
    return (
        <div>
         <Helmet prioritizeSeoTags>
        <title>LEARNBD | SIGNIN</title>
        </Helmet>
           <div >
            <img className="h-[40vh] w-full object-fit" src="https://i.ibb.co/xgHH437/1106-1.jpg" alt="" />
           </div> 
           <h2></h2>
           <div className="hero my-20">
           
  <div className="hero-content w-full md:w-3/5 ">

    <div className="card border border-black w-full">
    <h2 className="text-center text-2xl font-semibold mt-8">SIGN IN</h2>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control my-4">
          <input type="submit" value="SIGN IN" className="btn bg-black text-white text-xl w-full"/>
        </div>
        <div>
           <div className="flex justify-center items-center mb-4 gap-2"> <h2 className="text-lg">Or sign up with </h2><FaGoogle></FaGoogle></div>
            <button onClick={handlegoogle} className="btn bg-black text-white text-xl w-full">GOOGLE SIGN IN</button>
        </div>
        <div className="flex justify-between items-center mt-2">
        <h2>Do not have an account?</h2>
        <Link to="/signup"><button className="btn btn-outline">SIGN UP</button></Link>
        </div>
      </form>
      
    </div>
  </div>
</div>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default SingIn;