import axios from "axios";

const axiosUpload = axios.create({
    baseURL: 'https://learnbd-raihan644s-projects.vercel.app',
})

const useAxiosUpload = () => {
    return axiosUpload;
};

export default useAxiosUpload;