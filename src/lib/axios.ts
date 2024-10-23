import Axios from "axios";

const axiosInstance = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers:{
        "Content-Type": "application/json",
    },
    withXSRFToken: true
});

export default axiosInstance;
