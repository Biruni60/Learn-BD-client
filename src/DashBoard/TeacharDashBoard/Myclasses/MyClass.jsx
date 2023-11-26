import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../USER/AuthProvider";
import ClassCard from "./ClassCard";
import SectionTitle from "../../../Shared/SectionTitle";



const MyClass = () => {
    const axiosSeceure=useAxiosSecure()
    const {user,loading}=useContext(AuthContext)
    console.log(user);
    const {data:classes=[],refetch}=useQuery({
        queryKey:["classes"],
        enabled:!loading,
        queryFn:async ()=>{
            const res=await axiosSeceure.get(`/classes/${user?.email}`)
            return res.data
        }
    })
 
  
   console.log(classes);
    return (
      <>
          <div className="mb-20">
            <SectionTitle title="MY CLASSES"></SectionTitle>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
            classes.map(classItem=> <ClassCard key={classItem._id} classItem={classItem} refetch={refetch }></ClassCard>)
            }
        </div>
      </>
    );
};

export default MyClass;