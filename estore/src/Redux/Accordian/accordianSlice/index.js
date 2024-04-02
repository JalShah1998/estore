import { createSlice } from "@reduxjs/toolkit";

const initialState = [

    {
        category:"Men",
        items:["Coat","Shirt","Jacket","Pants"]
    },
    {
        category:"Men",
        items:["Coat","Shirt","Jacket","Pants"]
    },
    {
        category:"Men",
        items:["Coat","Shirt","Jacket","Pants"]
    },
    {
        category:"Men",
        items:["Coat","Shirt","Jacket","Pants"]
    },

]

const accordianSlice = createSlice({

    name:"accordian",
    initialState
   
})

export default accordianSlice;