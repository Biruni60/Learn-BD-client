import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ReactStars from "react-rating-stars-component";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle";
const FeedbackHome = () => {
    const axiosSecure = useAxiosSecure();
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
       
        queryFn: async() => {
            const res = await axiosSecure.get(`/feedback`);
            return res.data;
        }
    })     
    return (
        <div >
        <SectionTitle title="FEEDBACK FROM USER"></SectionTitle>
           <div className="bg-base-200 my-10">
           <Swiper navigation={true} modules={[Navigation]}  className="mySwiper">

{
    reviews.map(review => <SwiperSlide
        key={review._id}
    >
        <div className="flex flex-col items-center mx-24 my-16">
        <h2 className="text-2xl font-semibold">{review.title}</h2>
        <ReactStars
    count={5}
   value={review.ratings}
    size={24}
    activeColor="#ffd700"
  />
            <p className="py-8">{review.description}</p>
           <div className="flex">
           <div className="avatar">
  <div className="w-12 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={review.image} />
  </div>
</div>
           <h3 className="text-2xl text-lime-400 text-center">{review.name}</h3>
           </div>
        </div>
    </SwiperSlide>)
}
</Swiper> 
           </div>
        </div>
    );
};

export default FeedbackHome;