import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle";
import TeacherRequestCard from "./TeacherRequestCard";


const TeacherRequest = () => {
    const axiosSecure = useAxiosSecure();
    const {data:teachers,refetch}=useQuery({
        queryKey:["teachers"],
        queryFn:async ()=>{
            const res=await axiosSecure.get(`/teacherrequest`)
            return res.data
        }
    })
    console.log(teachers);
    return (
        <div>
         <SectionTitle title="TEACHER REQUEST"></SectionTitle>   
         <div className="mt-20 grid grid-cols-1 gap-10">
            {
                teachers&& teachers.map(teacher=> <TeacherRequestCard key={teacher._id} teacher={teacher} refetch={refetch}></TeacherRequestCard>)
            }
         </div>
        </div>
    );
};

export default TeacherRequest;