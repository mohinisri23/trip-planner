import axios from "axios";

const api = axios.create({
  baseURL: "https://trip-planner-cnig.onrender.com/api",
});

export default api;