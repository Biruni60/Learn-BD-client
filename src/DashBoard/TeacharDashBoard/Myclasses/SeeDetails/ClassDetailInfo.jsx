import { useForm } from "react-hook-form";
import { IoMdAdd } from "react-icons/io"
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { MdBookmarkAdded } from "react-icons/md";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../../Shared/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


const ClassDetailInfo = () => {
    const { register, handleSubmit, reset } = useForm();
    const {id}=useParams()
    console.log(id);
     const[enrollment,setEnrollment]=useState(0)
     const[submission,setSubmission]=useState(0)
     const[assignment,setAssignment]=useState(0)
    const axiosSecure = useAxiosSecure();
    const { data: detail = {} } = useQuery({
      queryKey: ['detail'],
      queryFn: async() => {
          const res = await axiosSecure.get(`/teacher-stats/${id}`);
          return res.data;
      }
  })     
  console.log(detail);
 useEffect(()=>{
  setAssignment(detail?.assignment?.length || 0)
  setEnrollment(detail?.enrollment?.length || 0)
  setSubmission(detail?.submission?.length || 0)
 },[detail])
    const onSubmit = async (data) => {
            const addClass={
                title:data.title,
                deadline:data.deadline,
                description:data.description,
                classId:id
            }
            const classes=await axiosSecure.post('/addassignments',addClass)
            if(classes.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Assignment Added`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
           
        
    }
    return (
        <div>
            <div className="-mt-[100px] lg:mt-0  flex justify-end">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-black text-white border-none " onClick={()=>document.getElementById('my_modal_3').showModal()}><IoMdAdd className="text-xl" /> Create Assignment</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input
                            type="date"
                            
                            {...register('deadline', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Descripsion"></textarea>
                    </div>
                    <button className="btn btn-outline w-full mt-8">
                        CREATE ASSIGNMENT<MdBookmarkAdded />
                    </button>
                </form>
    
  </div>
</dialog>
            </div>
           <div className="py-20">
           <SectionTitle  title="CLASS PROGRESS SECTION"></SectionTitle>
           </div>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
           <div className="p-4 bg-black">
           <div className="card  bg-lime-400 rounded-none">
  <div className="card-body">
    <h2 className="text-2xl font-bold text-center">Total Enrollment</h2>
    <h2 className="text-2xl font-bold text-center">{enrollment}</h2>
  </div>
</div>
           </div>
         <div className="p-4 bg-black">
         <div className="card  bg-lime-400  rounded-none ">
  <div className="card-body">
    <h2 className="text-2xl font-bold text-center">Total Assignment</h2>
    <h2 className="text-2xl font-bold text-center">{assignment}</h2>
  </div>
</div>
         </div>
           <div className="p-4 bg-black">
           <div className="card  bg-lime-400 rounded-none ">
  <div className="card-body">
    <h2 className="text-2xl font-bold text-center">Per Day Submission</h2>
    <h2 className="text-2xl font-bold text-center">{submission}</h2>
  </div>
</div>
           </div>
            </div>
        </div>
    );
};

export default ClassDetailInfo;