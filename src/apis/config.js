import axios from 'axios';

const axiosInstance = axios.create({

    baseURL: "https://api.themoviedb.org/3",
    params: {   
        
        // apiKey: '3ed45b6cde289fd24989aff790c23ee2',
        // language: 'en-US'
    }

})
export default axiosInstance;