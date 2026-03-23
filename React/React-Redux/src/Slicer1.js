import { createSlice } from "@reduxjs/toolkit";

const Reactslicer = createSlice({
    name: "Slice1",
    initialState: { count: 0 },
    reducers: {
        Increment: (state) => { state.count += 1 },
        Decrement: (state) => { state.count -= 1 },
        Reset: (state) => { state.count = 0 },
        CustomCounter:(state,action)=>{state.count=state.count+action.payloadA}
    }
})

export const { Increment, Decrement, Reset, CustomCounter} = Reactslicer.actions;
export default Reactslicer.reducer;