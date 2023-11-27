import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AllClassesCard from "./AllClassesCard";



const AllClasses = () => {
    const axiosPublic=useAxiosPublic()
    const {data:classes=[]}=useQuery({
        queryKey:["classes"],
        queryFn:async ()=>{
            const res=await axiosPublic.get(`/addedclasses`)
            return res.data
        }
    })
    console.log(classes);
    return (
        <div className="bg-base-200" >
        <div>
        <div className="hero h-[40vh] mb-10" style={{backgroundImage: 'url(https://i.ibb.co/MhSZWTw/Moon-1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">##Join Our Classes For A Better Career</h1>
     
    </div>
  </div>
</div>
        </div>
        <SectionTitle title="OFFERED CLASSES"></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {
            classes.map(classItem=> <AllClassesCard key={classItem._id} classItem={classItem} ></AllClassesCard>)
            }
        </div>
        </div>
    );
};

export default AllClasses;