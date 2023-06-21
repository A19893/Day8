import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./Todo/Get";
import { getUsersData } from "./Users/getData";
const initialState={
    tasks:null,
    users:null
}
export const SliceFile=createSlice({
    name:'AsyncAPI',
    initialState:initialState,
    reducer:{
    },
    extraReducers:(builder)=>{
     builder.addCase(getData.fulfilled,(state,action)=>{
        console.log(action.payload.data);
        state.tasks=action.payload.data;
     })
     builder.addCase(getData.rejected,(state,action)=>{
        console.log(action.err)
     })
     builder.addCase(getUsersData.fulfilled,(state,action)=>{
        console.log(action)
        state.users=action.payload
     })
    }
})

export default SliceFile.reducer