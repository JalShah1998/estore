import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems:[],
    totalItemsPrice:0,
    totalItems:0,
    totalQuantity:0
}

const cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addCartItem : (state,action)=>{
            let itemexists = state.cartItems.find((item)=>item.id===action.payload.id)
            
            if (!itemexists){
                state.cartItems = [...state.cartItems, action.payload];
                state.totalQuantity = ++state.totalQuantity;
                state.totalItemsPrice = state.totalItemsPrice + action.payload.price;
                state.totalItems = ++state.totalItems;
            }
        },
        updateItemQuantity : (state,action)=>{
            let index = action.payload.key;
            if(action.payload.operator==="+"){
                ++state.cartItems[index].quantity;
                state.totalItemsPrice=state.totalItemsPrice+action.payload.price;
                ++state.totalQuantity;
            }
            else{
                --state.cartItems[index].quantity
                state.totalItemsPrice=state.totalItemsPrice+action.payload.price;
                --state.totalQuantity;
            }

        }
    },
    deleteCartItem:(state,action)=>{
        let filteredCart = state.cartItems.filter((elem)=>{
            return elem.id!=action.payload.id;
        })
        state.cartItems=filteredCart;
        state.totalItemsPrice=state.totalItemsPrice-(action.payload.price * action.payload.quantity);
        state.totalQuantity = state.totalQuantity;
        --state.totalItems;
    }
})

export const {addCartItem,updateItemQuantity,deleteCartItem} = cartSlice.actions;
export default cartSlice.reducer;