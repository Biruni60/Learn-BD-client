import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../USER/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useTeacher from "../Hooks/useTeacher";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  const [isAdmin]=useAdmin()
  const [isTeacher]=useTeacher()
  console.log(isAdmin,isTeacher);
    const navLinks=<>
        <li className="m-4"><NavLink to="/">HOME</NavLink></li>
        <li  className="m-4"><NavLink to="/allclasses">ALL CLASSES</NavLink></li>
        <li  className="m-4"><NavLink to="/teachonlearnbd">TEACH ON LEARNBD</NavLink></li>
    </>
    const handleLogOut=()=>{
  logOut()
  
    }
    return (
        <div className="navbar fixed z-10  max-w-screen-xl bg-black text-white ">
        <div className="md:navbar-start navbar-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className=" text-lime-600 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                navLinks
              }
            </ul>
          </div>
        <div className="flex">
        <Link  to="/"><img className=" h-16 w-20" src="https://i.ibb.co/fMCrqjN/2-removebg-preview.png" alt="" /></Link>
        <h2 className="my-auto text-3xl font-semibold text-lime-600">LEARNBD</h2>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal  text-lime-600">
            {
                navLinks
            }
          </ul>
        </div>
        <div className="navbar-end">
         {
          user?
         <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button  onClick={()=>document.getElementById('my_modal_1').showModal()}><img className="w-20 rounded-full" src={user?.photoURL
}/></button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h2 className="text-lime-600">{user?.displayName}</h2>
        {
            user && isAdmin && <h2 className="text-lime-600"><Link to="/dashboard/adminhome">Dashboard</Link></h2>
        }
        {
            user && isTeacher && <h2 className="text-lime-600"><Link to="/dashboard/teacherhome">Dashboard</Link></h2>
        }
        {
            user && !isAdmin && !isAdmin && <h2 className="text-lime-600"><Link to="/dashboard/studenthome">Dashboard</Link></h2>
        }
    <div className="modal-action  justify-center">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={handleLogOut} className="btn bg-lime-600 text-white text-xl mr-2">Log Out</button>
        <button className="btn bg-lime-600 text-white text-xl ml-2">Close</button>
      </form>
    </div>
  </div>
</dialog>
         </div>
          :
          <Link to="signin"><button className="btn btn-outline text-lime-600">SIGN IN</button></Link>
         }
        </div>
      </div>
    );
};

export default Navbar;