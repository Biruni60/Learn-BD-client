import { useForm } from "react-hook-form";


import { MdBookmarkAdded } from "react-icons/md";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../USER/AuthProvider";
import SectionTitle from "../../../Shared/SectionTitle";



const UpdateClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const {id} =useParams()
   
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }); 
        if(res.data.success){
            const addClass={
                title:data.title,
                name:data.name,
                email:data.email,
                price:data.price,
                description:data.description,
                image:res.data.data.display_url,
               
            }
            const classes=await axiosSecure.put(`/classes/${id}`,addClass)
            console.log(classes);
            if(classes.data.modifiedCount>0){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updates.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/dashboard/myclasses')
            }
           
        }
    }
    return (
        <div>
             <div>
        <SectionTitle title="UPDATE CLASS"></SectionTitle>
        <div className="border border-black rounded-xl py-10 px-4 my-10">
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
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                           defaultValue={user?.displayName}
                            readOnly
                            
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />

                        
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                readOnly
                                defaultValue={user?.email}
                                {...register('email', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Descripsion"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn btn-outline w-full">
                        Update Class<MdBookmarkAdded />
                    </button>
                </form>
            </div>
        </div> 
        </div>
    );
};

export default UpdateClass;