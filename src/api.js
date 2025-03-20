import axios from "axios";
const API = axios.create({
  baseURL: "https://internship-backend.onrender.com/api", // Your Render backend URL
});
export default API;
