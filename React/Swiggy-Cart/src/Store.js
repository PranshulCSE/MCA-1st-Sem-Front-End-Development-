import {configureStore} from "@reduxjs/toolkit";
import CartReducer from "./Slice";
const Store=configureStore({
    reducer :{
        slice:CartReducer,
    }
})
export default Store;