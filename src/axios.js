import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-challenge2/us-central1/api'
});


export default instance;




