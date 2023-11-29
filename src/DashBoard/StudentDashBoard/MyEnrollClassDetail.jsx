import { useForm } from "react-hook-form";
import { IoIosSend, IoMdAdd } from "react-icons/io";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { MdAddComment } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { useContext, useState } from "react";
import { AuthContext } from "../../USER/AuthProvider";
import SectionTitle from "../../Shared/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import MyAssignmentCard from "./MyAssignmentCard";
const MyEnrollClassDetail = () => {
    const { register, handleSubmit, reset } = useForm();
    const {id}=useParams()
    const {user}=useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const [value,setValue]=useState(null)

    const { data: myassignments = [] } = useQuery({
        queryKey: ['myassignments'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/myassignments?id=${id}`);
            return res.data;
        }
    })     
    const { data: classItem = [] } = useQuery({
        queryKey: ['classItem'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/classdetail/${id}`);
            return res.data;
        }
    })     
console.log(myassignments);
    const onSubmit = async (data) => {
            const addEvaluation={
               description:data.description,
               ratings:value,
               classId:id,
               name:user?.displayName,
               image:user?.photoURL,
               title:classItem?.title
            }
            const classes=await axiosSecure.post('/evaluation',addEvaluation)
            if(classes.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Teacher Evaluation Completed`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
           
        
    }
    return (
        <div>
               <div className="-mt-[100px] lg:mt-0  flex justify-end">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-black text-white border-none " onClick={()=>document.getElementById('my_modal_3').showModal()}><MdAddComment  className="text-xl" /> Evaluate Teacher</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Descripsion"></textarea>
                    </div>
                    <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <ReactStars
                           count={5}
                           onChange={newValue=>{setValue(newValue)}}
                            size={24}
                           activeColor="#ffd700"
                         />
                    <button className="btn btn-outline w-full mt-8">
                        SEND <IoIosSend />
                    </button>
                </form>
    
  </div>
</dialog>
            </div>
            <div className="mt-16"><SectionTitle title="MY ASIGNMENTS"></SectionTitle></div>
            <div className="grid grid-cols-1 gap-4">
           {
         myassignments&&myassignments.map(myassignment=><MyAssignmentCard key={myassignment._id} myassignment={myassignment}></MyAssignmentCard>)
           }
            </div>
        </div>
    );
};

export default MyEnrollClassDetail;