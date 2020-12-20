import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-challenge2/us-central1/api' // btw this is typically used for debuggin just because its faster
});


export default instance;




