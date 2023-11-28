import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";


const TeacherRequestCard = ({teacher,refetch}) => {
    const {_id,name,image,experience,title,email,category,isPending}=teacher;
    const [disable,setDisable]=useState(false)
   useEffect(()=>{
    if(isPending !=="pending")
    {
        setDisable(true)
    }
   },[isPending])
    const axiosSecure = useAxiosSecure();
    const handleApprove = (item) => {
    
        const data={item}
        console.log(item);
        if(item==="accepted")
        {
           const res= axiosSecure.put(`/users/maketeacher/${email}`) 
            console.log(res.data);
        }
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
                const res = await axiosSecure.put(`/approveteacher/${_id}`,data);
                
                if (res.data.modifiedCount > 0) {
                  
                   refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Request Has Been ${item} `,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }
    return (
        <div>
            <div className="card  bg-lime-100 shadow-xl">
  <div className="card-body">
   
    <h2 className="text-center text-2xl font-semibold">Teacher</h2>
    <div className="flex mx-auto items-center mt-4">
  
    <div >
    <div className="avatar">
  <div className="w-12 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={image} />
  </div>
</div>
    </div>
    <p className="text-xl font-semibold">{name}</p>
    </div>
     <p className="mx-auto"> <span className="text-xl font-semibold">Experience: </span>{experience}</p>
      <p  className="mx-auto"> <span  className="text-xl font-semibold">Title: </span>{title}</p>
      <p  className="mx-auto"> <span  className="text-xl font-semibold">Category: </span>{category}</p>
      <p  className="mx-auto"> <span  className="text-xl font-semibold">Status: </span>{isPending}</p>
     <div className="flex  flex-wrap   justify-center gap-2 mt-4">
     <button disabled={disable} onClick={()=>handleApprove("accepted")}  className="btn btn-outline uppercase">Accept</button>
      <button disabled={disable} onClick={()=>handleApprove("rejected")}  className="btn btn-outline uppercase">Reject</button>
     </div>
  </div>
</div>
        </div>
    );
};

export default TeacherRequestCard;