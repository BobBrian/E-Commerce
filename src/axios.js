import axios from "axios"

const instance = axios.create({
    baseURL: '...' // This is where the Api Wll be house (aka the Cloud Function)
});


export default instance;




