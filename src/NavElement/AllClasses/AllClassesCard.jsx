import { useState } from "react";
import { Link } from "react-router-dom";


const AllClassesCard = ({classItem}) => {
    const {_id,title,price,description,image,name,email}=classItem
    const [enrollment,setEnrollment]=useState(0)
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
       <p><span className="text-lg font-medium">Total Enrollment: </span>{enrollment}</p>
   </div>
   <div className="card-actions w-full mt-4">
    
    <Link to={`/class/${_id}`}> <button className="btn btn-outline uppercase ">Enroll</button></Link>
     
   </div>
 </div>
</div>
       </div>
    );
};

export default AllClassesCard;