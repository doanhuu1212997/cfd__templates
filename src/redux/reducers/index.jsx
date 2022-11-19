import authReducer from './authReducers'
import homeReducers from './homeReducers'
import coureseReducers from "./coureseReducers"
import { configureStore } from "@reduxjs/toolkit"
export default {
    auth: authReducer,
    home: homeReducers,
    coures: coureseReducers,

}