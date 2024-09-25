import Axios from "axios";

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withXSRFToken: true
});

export default axios;
