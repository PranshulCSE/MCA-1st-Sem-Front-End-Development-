import { configureStore, createStore } from "@reduxjs/toolkit";
import slicer from "./Slice"
const stores = configureStore({
    reducer:{
        slice1:slicer,
    }
})
export default stores;