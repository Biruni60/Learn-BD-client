// Importing necessary dependencies and components
import React from "react";
import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

// Defining the Popular component
const Popular = () => {
    // Using custom hooks and setting up axios with authentication
    const axiosSecure = useAxiosSecure();

    // Configuring pagination for the Swiper
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    // Fetching popular courses data using react-query
    const { data: items = [] } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes`);
            return res.data;
        }
    });

    // Rendering the component
    return (
        <div>
            {/* Displaying the section title */}
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

// Exporting the Popular component
export default Popular;
