import { useContext, useEffect } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../USER/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import MyClassCard from "./MyClassCard";
import SectionTitle from "../../Shared/SectionTitle";


const MyEnrollClass = () => {
    const axiosSecure = useAxiosSecure();
    const {user,loading}=useContext(AuthContext)
    const { data: myclass = [] } = useQuery({
        queryKey: ['myclass', user?.email],
        enabled:!loading,
        queryFn: async() => {
            const res = await axiosSecure.get(`/myclass?email=${user.email}`);
            return res.data;
        }
    })     
    return (

        <div>
        <SectionTitle title="MY CLASSES"></SectionTitle>
          <div className="grid grid-cols-1  gap-4 mt-10">
            {
                myclass&&myclass.map(myclassitem=><MyClassCard key={myclassitem._id} myclassitem={myclassitem}></MyClassCard>)
            }
        </div>  
        </div>
    );
};

export default MyEnrollClass;