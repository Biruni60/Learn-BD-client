import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://reastaurant-server-3udmayv1z-raihan644s-projects.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;