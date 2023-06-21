import getDataUser from '../../Services/User.service'
// import { getUser } from '../../Store/Actions/Types'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const getUsersData=createAsyncThunk(
    'getUsers',
    async()=>{
        try{
        const response=await getDataUser();
        console.log(response.data)
         return response.data;
        }
        catch(err){
            return err;
        }
    }
)