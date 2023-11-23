import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const navLinks=<>
        <li className="m-4"><NavLink to="/">HOME</NavLink></li>
        <li  className="m-4"><NavLink to="/allclasses">ALL CLASSES</NavLink></li>
        <li  className="m-4"><NavLink to="/teachonlearnbd">TEACH ON LEARNBD</NavLink></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-20 max-w-screen-xl bg-black text-white ">
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
         <Link to="signin"><button className="btn btn-outline text-lime-600">SIGN IN</button></Link>
        </div>
      </div>
    );
};

export default Navbar;