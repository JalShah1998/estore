import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./action";


const initialState = {

    categories:[],
    status:"idle",
    error:""
};
const categorySlice = createSlice({

    name:"category",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(getCategories.pending, (state) => {
            state.status = "loading...";
          })
          .addCase(getCategories.fulfilled, (state, action) => {
            state.status = "Success";
            state.categories = action.payload;
          })
          .addCase(getCategories.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          });
      },
    });
    
    export default categorySlice.reducer;