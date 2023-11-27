import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ClassCard = ({classItem,refetch}) => {
    const {_id,title,price,description,image,isPending,name,email}=classItem
    const [disable,setdisable]=useState(true);
    const axiosSecure=useAxiosSecure()
    useEffect(() => {
        if (isPending === "accepted") {
          setdisable(false);
        }
      }, [isPending]);
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/classes/${item._id}`);
                
                if (res.data.deletedCount > 0) {
                  
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }
    return (
        <div className=" p-6 bg-black">
         <div className="card  bg-base-100 shadow-xl rounded-none">
  <figure><img className="w-full h-96" src={image} /></figure>
  <div className="card-body md:h-96">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <h2><span className="text-lg font-medium">Teacher Name: </span>{name}</h2>
    <h2><span className="text-lg font-medium">Teacher Email: </span>{email}</h2>
    
    <div>
        <p><span className="text-lg font-medium">Price: </span>${price}</p>
        <p><span className="text-lg font-medium">Status: </span>{isPending}</p>
    </div>
    <div className="card-actions flex  flex-wrap   justify-center gap-2 mt-4">
      <button onClick={()=>handleDeleteItem(classItem)}  className="btn btn-outline uppercase">Delete</button>
     <Link to={`/dashboard/updateClass/${_id}`}> <button className="btn btn-outline uppercase">Update</button></Link>
      <button disabled={disable} className="btn btn-outline uppercase">See Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ClassCard;