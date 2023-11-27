import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Link, useParams } from 'react-router-dom';

const ClassDetail = () => {
    const axiosSecure=useAxiosSecure()
    const {id}=useParams()
    const{data:classDetail}=useQuery({
        queryKey:['classDetail',id],
        queryFn:async ()=>{
            const res =await axiosSecure.get(`/classdetail/${id}`)
            return res.data;
        
        }
     })
   
    return (
       classDetail&&<div className='py-40 bg-base-300'>
        <SectionTitle title="CLASS DETAILS"></SectionTitle>
            <div className="card card-side max-w-2xl mx-auto mt-20 bg-base-100 s">
  <figure className='w-1/2'><img className='w-full h-full' src={classDetail.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{classDetail.title}</h2>
    <p>{classDetail.description}</p>
    <p><span className='text-lg font-semibold'>Teacher Name: </span>{classDetail.name}</p>
    <p><span  className='text-lg font-semibold'>Price: $</span>{classDetail.price}</p>
    <div className="card-actions justify-end">
     <Link to={`/payment/${classDetail._id}`}> <button className="btn btn-outline text-lime-600">PAY NOW</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ClassDetail;