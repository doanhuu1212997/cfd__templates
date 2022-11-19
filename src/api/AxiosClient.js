import axios from 'axios';
// import { fetchrefreshToken } from 'redux/authSlice';
// import { getToken, setToken } from "utils/token"
// Set up default config for http requests here
import { fetchGetProduct } from "redux/productSlice";
const axiosClient = axios.create({
    baseURL: process.env.REACT_API,
    headers: {
        'content-type': 'application/json',
    },
});
// Handle all request	
axiosClient.interceptors.request.use(
    (config) => {
        return config
    }

);

// Handle all response
axiosClient.interceptors.response.use(
    (response) => {
        // Edit response config
        if (response && response.data) {
            return response.data
        }
        return response;
    },
    async (error) => {
        // // console.log(error.config)
        // let st = require("store/store");
        // let store = st.default;
        // if (error.request.status === 401 | error.request.status === 403) {
        //     let token = getToken()
        //     if (token) {
        //         console.log(token)
        //         const { payload } = await store.dispatch(fetchrefreshToken({
        //             refreshToken: token.refreshToken
        //         }))
        //         // if (payload?.data) {
        //         // 	token.accessToken = payload?.data.accessToken
        //         // 	setToken(token)
        //         // return axiosClient(error.config)
        //         // }
        //     }
        // }
        throw error
    }
);
export default axiosClient