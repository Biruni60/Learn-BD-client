
import { useForm } from 'react-hook-form';
import SectionTitle from './../../Shared/SectionTitle';

import useAxiosSecure from './../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { AuthContext } from './../../USER/AuthProvider';
import { useQuery } from '@tanstack/react-query';
const TeachOn = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user,loading}=useContext(AuthContext)
    const [accepted,setAccepted]=useState(false)
    const [rejected,setRejected]=useState(false)
    const [pending,setPending]=useState(false)
    
    const axiosSecure = useAxiosSecure();
    const {data:apply,refetch}=useQuery({
        queryKey:["apply",user?.email],
        enabled:!loading,
        queryFn:async ()=>{
            const res=await axiosSecure.get(`/apply/${user?.email}`)
            if(res.data.isPending==="accepted"){
               setAccepted(true)
            }
           if(res.data.isPending==="rejected"){
               setRejected(true)
            }
           if(res.data.isPending==="pending"){
               setPending(true)
            }
            return res.data
        }
    })
    console.log(apply);
    const onSubmit = async (data) => {
      
          
            const item = {
                name: user?.displayName,
                experience:data.experience,
                category: data.category,
                email:user?.email,
                image:user?.photoURL,
                title:data.title,
                isPending:"pending"
               
            }
            // 
            const menuRes = await axiosSecure.post('/apply', item);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                refetch()
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Submitted for Review`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        
    
    };

    return (
        <div className="pt-32">
        <div>
       <SectionTitle title="APPLY NOW"></SectionTitle>
        </div>
       {
        apply?
       <div>
     {
      pending&&<p className='p-10 bg-lime-100 text-5xl mb-96 text-center my-10 mx-5 rounded-md text-green-700'>Your Request Is Being Reviewed</p>
     }
     {
        accepted&& <p className='p-10 bg-lime-100 text-5xl mb-96 text-center my-10 mx-5 rounded-md text-green-700'>Congrats, You Are Selected As A Teacher</p>
     }
     {
        rejected&& <div className="border border-black rounded-xl py-10 px-4 my-10">
        <form onSubmit={handleSubmit(onSubmit)}>
        <p className='text-center text-xl mt-3 text-red-600'>*Your Request is Rejected,Please Try With Different  Criteria*</p>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                           defaultValue={user?.displayName}
                        readOnly
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={user?.photoURL}
                              readOnly
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Experience</span>
                            </label>
                            <select defaultValue="default" {...register('experience', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="beginner">Beginner</option>
                                <option value="experienced">Experienced</option>
                                <option value="someIdea">Some Idea</option>
                                
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Title"
                                {...register('title', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="webDevelopment">Web Development</option>
                                <option value="digitalMarketing">Digital Marketing</option>
                               <option value="graphicDesign">Graphic Design</option>
                               <option value="mobileAppDevelopment">Mobile App Development</option>
                               <option value="dataScience">Data Science</option>
                                
                            </select>
                        </div>

                    <button className="btn btn-outline w-full ">
                        CHANGE THE REQUEST
                    </button>
                </form> 
        </div>
     }
       </div>
        :
        <div>
       <div className="border border-black rounded-xl py-10 px-4 my-10">
       <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                           defaultValue={user?.displayName}
                        readOnly
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={user?.photoURL}
                              readOnly
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Experience</span>
                            </label>
                            <select defaultValue="default" {...register('experience', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="beginner">Beginner</option>
                                <option value="experienced">Experienced</option>
                                <option value="someIdea">Some Idea</option>
                                
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Title"
                                {...register('title', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="webDevelopment">Web Development</option>
                                <option value="digitalMarketing">Digital Marketing</option>
                               <option value="graphicDesign">Graphic Design</option>
                               <option value="mobileAppDevelopment">Mobile App Development</option>
                               <option value="dataScience">Data Science</option>
                                
                            </select>
                        </div>

                    <button className="btn btn-outline w-full">
                        SUMMIT FOR REVIEW
                    </button>
                </form> 
       </div>
        </div>
       }
        </div>
    );
};

export default TeachOn;