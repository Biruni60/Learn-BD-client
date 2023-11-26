import { useEffect, useState } from "react";
import Swal from "sweetalert2";


import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AdminClassCard = ({classItem,refetch}) => {
    const {_id,title,description,image,isPending,  email}=classItem
   
    const axiosSecure=useAxiosSecure()
    const [disable, setdisable] = useState(true);

    useEffect(() => {
      if (isPending === "accepted") {
        setdisable(false);
      }
    }, [isPending]);
    const handleApprove = (item) => {
        const data={item}
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${item} it!`
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.put(`/addclass/${_id}`,data);
                
                if (res.data.modifiedCount > 0) {
                  
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Class Has Been ${item} `,
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
  <div className="card-body md:h-64">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    
    <h2><span className="text-lg font-medium">Teacher Email: </span>{email}</h2>
    <div className="card-actions flex  flex-wrap  b justify-center gap-2 mt-4">
      <button onClick={()=>handleApprove("accepted")}  className="btn btn-outline uppercase">Accept</button>
      <button onClick={()=>handleApprove("rejected")}  className="btn btn-outline uppercase">Reject</button>

      <button disabled={disable} className="btn btn-outline uppercase">See Progress</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AdminClassCard;