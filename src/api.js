import axios from "axios";

const API = axios.create({
    baseURL: "https://meetmysoul-backend-1.onrender.com", // backend base URL
});

export default API;
