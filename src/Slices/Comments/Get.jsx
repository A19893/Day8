import getComments from '../../Services/Comments.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const getComment=createAsyncThunk(
    'GettingComments',
    async()=>{
        try{
            console.log("Aaya")
        const comm=await getComments();
        console.log(comm);
        return comm.data;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }
)