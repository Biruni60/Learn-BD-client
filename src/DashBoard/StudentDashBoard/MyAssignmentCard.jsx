import { useContext } from "react";
import { AuthContext } from "../../USER/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { l } from "@everymatrix/em-card/dist/em-card";
import Swal from "sweetalert2";


const MyAssignmentCard = ({myassignment}) => {
    const {description,title,deadline,classId}=myassignment
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const handleSubmit = async () => {
        const addSubmission={
          classId:classId,
          name:user?.name,
          email:user?.email,
        }
        const classes=await axiosSecure.post('/submission',addSubmission)
        if(classes.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Submitted`,
                showConfirmButton: false,
                timer: 1500
              });
        }
       
    
}   
    return (
        <div >
          <div className="p-4  bg-lime-100">
          <div className="card glass ">
  <div className="card-body  ">
  <h2 className="text-2xl font-semibold">{title}</h2>
    <p>{description}</p>
    <p><span className="text-xl font-semibold">Deadline: </span>{deadline}</p>
           
    <div className="card-actions justify-end">
      <button onClick={handleSubmit} className="btn btn-outline w-32">SUBMIT</button>
    </div>
  </div>
</div>
          </div>
        </div>
    );
};

export default MyAssignmentCard;