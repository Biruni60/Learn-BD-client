// Importing necessary dependencies and components
import React from "react";
import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Popular = () => {
    
    const axiosPublic = useAxiosPublic();


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

   
    const { data: items = [] } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/classes`);
            return res.data;
        }
    });


    return (
        <div>
            <SectionTitle title="POPULAR COURSES"></SectionTitle>

            <div className="my-16">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
              {
                items&&items.slice(0,6).map(item=>  <SwiperSlide key={item._id}>
                    <img className="h-60" src={item.image} alt="" />
                   
                </SwiperSlide>)
              }
              
            </Swiper>
            </div>
        </div>
    );
};


export default Popular;
