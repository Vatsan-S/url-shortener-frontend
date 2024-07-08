import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allData : []
}

const urlSlice = createSlice({
    name:"url",
    initialState,
    reducers:{
            updateAllData:(state,action)=>{
                state.allData = action.payload
            }
    }
})

export const{updateAllData} = urlSlice.actions
export default urlSlice.reducer