import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import { AuthContext } from "../../../USER/AuthProvider";
import AdminClassCard from "./AdminClassCard";



const AdminClasses = () => {
    const axiosSeceure=useAxiosSecure()
    const {user,loading}=useContext(AuthContext)
    console.log(user);
    const {data:classes=[],refetch}=useQuery({
        queryKey:["classes"],
        enabled:!loading,
        queryFn:async ()=>{
            const res=await axiosSeceure.get(`/classes`)
            return res.data
        }
    })
 
  
   console.log(classes);
    return (
      <>
          <div className="mb-20">
            <SectionTitle title="ALL CLASSES"></SectionTitle>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
            classes.map(classItem=> <AdminClassCard key={classItem._id} classItem={classItem} refetch={refetch }></AdminClassCard>)
            }
        </div>
      </>
    );
};

export default AdminClasses;