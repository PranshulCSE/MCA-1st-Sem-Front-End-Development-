import { configureStore } from "@reduxjs/toolkit";
import Slice1Reducer from "./Slicer1";
const stores = configureStore({
    reducer: {
        slice1: Slice1Reducer
    }
})
export default stores;