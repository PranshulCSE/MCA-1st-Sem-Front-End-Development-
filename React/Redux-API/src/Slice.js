
import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";


const Fetchdata= createAsyncThunk(
    // A ction : payload
    'Coin/Fetch',
    async (args,ThunkAPI)=>{
        try{
            const res=await fetch(`https://api.coingecko.com/api/v3/coins/market?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data=await res.json();
            return data;
        }
        catch(error){
            return ThunkAPI.rejectWithValue(error.message);
        }
    }
)

const slicer1=createSlice({
    name:'slice1',
    initialState:{data:[],loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder 
        .addCase(Fetchdata.pending,(state)=>{
            state.loading = true;
            state.error= null;
        })
        .addCase(Fetchdata.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=false;
        })
        .addCase(Fetchdata.rejected ,(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        })
    }
})

export default slicer1.reducer;
export {Fetchdata};