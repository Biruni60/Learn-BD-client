
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useTeacher from "../Hooks/useTeacher";
import { FaHome, FaRegUser } from "react-icons/fa";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc"
import { CgProfile } from "react-icons/cg"
import { MdOutlineAssignmentReturned, MdOutlineBookmarkAdded } from "react-icons/md"
import { MdAddTask } from "react-icons/md"
const DashBoard = () => {
     const isAdmin=useAdmin()
     const isTeacher=useTeacher()
 
    return (
        <div className="drawer lg:drawer-open  max-w-screen-xl mx-auto ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex  flex-col">
          {/* Page content here */}
          <div className="m-4">
          <label htmlFor="my-drawer-2" className="btn   drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
          </div>
          <div className="m-10">
            <Outlet></Outlet>
          </div>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className=" menu bg-black p-4 w-80 min-h-screen pt-32 lg:pt-4  text-base-content flex gap-5">
            {/* Sidebar content here */}
            {
                isAdmin?<>
                    <li>
                        <NavLink className="flex">
                        <FaHome></FaHome>
                        Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                        <VscGitPullRequestGoToChanges />
                        Teacher Request
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                        <FaRegUser />
                        All Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                        <CgProfile />
                        Profile
                        </NavLink>
                    </li>
                </>
                :
                isTeacher?
                <>
                <li>
                        <NavLink>
                        <FaHome></FaHome>
                         Teacher Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                        <MdAddTask />
                        Add Class
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                        <MdOutlineBookmarkAdded/>
                        My Class
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                        <CgProfile />
                        Profile
                        </NavLink>
                    </li>
                </>:
                <>
                <li>
                        <NavLink>
                        <FaHome></FaHome>
                        Student Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                        <MdOutlineAssignmentReturned />
                        My Enroll Class
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                        <CgProfile />
                        Profile
                        </NavLink>
                    </li>
                </>
            }
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;