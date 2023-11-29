import { useQuery } from "@tanstack/react-query";

import SectionTitle from "../../Shared/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const HomeStat = () => {
   
    const axiosPublic=useAxiosPublic()
    const { data: statistic={} } = useQuery({
        queryKey: ['statistic'],
       
        queryFn: async() => {
            const res = await axiosPublic.get(`/statistics`);
            return res.data;
        }
    })  
    console.log(statistic);   
    return (
        <div>
        <div className="my-10"><SectionTitle title="STATISTICS"></SectionTitle></div>
           <div className="card card-side h-96 bg-base-200 ">
 
  <div className="card-body ">
   <div className="my-auto ">
    <h2 className="text-2xl my-4"><span>Total User: </span>{statistic.users}</h2>
    <h2  className="text-2xl my-4"><span>Total Classes: </span>{statistic.classes}</h2>
    <h  className="text-2xl my-4"><span>Total Enrollments: </span>{statistic.enrollments}</h>
   </div>
  </div>
  <figure className="w-1/2"><img className="h-full" src="https://i.ibb.co/jZNHP9b/1263-1.jpg" alt="Movie"/></figure>
</div> 
        </div>
    );
};

export default HomeStat;