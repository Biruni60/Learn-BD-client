import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle";
import { FaUsers } from "react-icons/fa";
import { CgLaptop } from "react-icons/cg";
import Swal from "sweetalert2";

const AllUsers = () => {
     const axiosSecure=useAxiosSecure();
     const{data:users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async ()=>{
            const res =await axiosSecure.get('/users')
            return res.data;
        }
     })

     const handleMakeAdmin = user =>{
        axiosSecure.put(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    return (
        <div>
           <SectionTitle title="All Users"></SectionTitle> 
           <div className="overflow-x-auto">
  <div className=" border border-lime-600 py-10 px-2 rounded-lg my-16">
  <table className=" table ">
    {/* head */}
    <thead className="text-lime-600">
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th className="hidden md:block ">Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index)=> <tr key={user._id}>
        
        <th>
         {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
         {user.name}
        </td>
        <td className="hidden md:block">{user.email}</td>
        <th>
        { user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg  bg-lime-600">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                    </button>}
        </th>
      </tr>)
      }
    </tbody>
 
    
  </table>
  </div>
</div>
        </div>
    );
};

export default AllUsers;