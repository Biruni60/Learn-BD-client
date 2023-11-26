import { useContext } from "react";
import SectionTitle from "./SectionTitle";
import { UserCard } from 'react-ui-cards'
import { AuthContext } from "../USER/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const UserProfile = () => {
   const {user,loading}=useContext(AuthContext)
   const axiosSecure=useAxiosSecure()


   const{data:userProfile}=useQuery({
    queryKey:['userProfile'],
    enabled:!loading,
    queryFn:async ()=>{
        const res =await axiosSecure.get(`/userprofile/${user.email}`)
        return res.data;
    }
 })
 const role=userProfile?.role
 const   number=userProfile?.phoneNumber

    return (
        <div>
        <div>
        <SectionTitle title="MY PROFILE"></SectionTitle>  
        </div>
        <div className="flex justify-center">
        <UserCard 
    float
    className="h-[80vh]"
    header='https://i.ibb.co/vmmvX9Z/2.png'
    avatar={user?.photoURL}
    name={user?.displayName}
    positionName={role}
    stats={[{name:"Mobile"},{value:`${number}`}]}
   
    
/>
        </div>
        
        </div>
    );
};

export default UserProfile;
