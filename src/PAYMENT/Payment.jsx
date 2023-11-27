import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";

import SectionTitle from "../Shared/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const axiosSecure=useAxiosSecure()
    const {id}=useParams()
    const{data:classDetail}=useQuery({
        queryKey:['classDetail',id],
        queryFn:async ()=>{
            const res =await axiosSecure.get(`/classdetail/${id}`)
            return res.data;
        
        }
     })
   
    return (
        <div>
            <SectionTitle title="MAKE PAYMENT"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm classDetail={classDetail}></CheckOutForm>
                </Elements>
            </div>  
        </div>
    );
};

export default Payment;