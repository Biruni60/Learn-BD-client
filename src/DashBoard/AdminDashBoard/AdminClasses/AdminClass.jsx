import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Feedback from "./Feedback";
import { useParams } from "react-router-dom";


const AdminClass = () => {
    const axiosSeceure=useAxiosSecure()
    const {id}=useParams()
    const {data:feedbacks=[]}=useQuery({
        queryKey:["feedbacks"],
      
        queryFn:async ()=>{
            const res=await axiosSeceure.get(`/feedback/${id}`)
            return res.data
        }
    })

    return (
        <div>
            <SectionTitle title="FEEDBACK"></SectionTitle>
            <div className="grid grid-cols-1 gap-4 mt-20">
            {
                feedbacks.map(feedback=><Feedback key={feedback._id} feedback={feedback}></Feedback>)
            }
            </div>
        </div>
    );
};

export default AdminClass;