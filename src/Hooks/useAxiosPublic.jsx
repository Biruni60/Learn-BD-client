import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://learnbd-raihan644s-projects.vercel.app',
    withCredentials:true
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;