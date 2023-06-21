import {createSlice} from '@reduxjs/toolkit'
import { getComment } from './Comments/Get'
const initialState={
comments:null
}
export const Slices=createSlice({
    name:"API",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
     builder.addCase(getComment.fulfilled,(state,action)=>{
        state.comments=action.payload;
     })
    }
})
export default Slices.reducer