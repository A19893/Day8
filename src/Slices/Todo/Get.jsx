import getTodo from "../../Services/Todo.service";
import { getURL } from "../../Store/Actions/Types";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getData = createAsyncThunk({ getURL }, async () => {
  try{
  const response = await getTodo();
  console.log(response);
  return response;
  }
  catch(err){
    return err;
  }
});
