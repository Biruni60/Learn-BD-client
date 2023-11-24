import { useContext } from "react";
import { AuthContext } from "../USER/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useTeacher = () => {
    const {user,loading}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const {data:isTeacher,isPending:isTeacherLoading}=useQuery({
        queryKey:[user?.email,"isTeacher"],
        enabled:!loading,
        queryFn:async()=>{
            const res=await axiosSecure.get(`/users/teacher/${user.admin}`)
            return res.data?.admin
        }
    })
    
    return  [isTeacher,isTeacherLoading]

};


export default useTeacher;