import axios from "axios"

const baseURL = "https://1606117-nodejs-tt.vercel.app";

const api = axios.create({
    baseURL,
})

export default api