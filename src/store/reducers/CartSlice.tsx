import { createSlice } from "@reduxjs/toolkit";
import EmptyCart from "../../cart/EmptyCart";
interface CartItem{
    id:number|string,
    qty:number,
    sum:number,
    price:number,
    name:string,

}
interface cartState{
    items: CartItem[]
}
const initialState={
    items :[]
}
const CartSlice=createSlice({
    name:"cart",
    initialState: initialState,
    reducers:{
    // increase the item
       addItemsTotheCart:(state,action)=>{
        const ExistingItem = state.items.find(
            item => item.id ===action.payload.id
        )
        if(ExistingItem){
            ExistingItem.qty+=1;
            ExistingItem.sum+= action.payload.price
        }else{

            state.items.push({
            ...action.payload,
            qty:1,
            sum:action.payload.price,
            }) 
        }
       },
    // decrease the item 
removeItemFormTheCart:(state,action)=>{
    const ExistingItem = state.items.find(
        item => item.id ===action.payload.id
 )
 if(ExistingItem && ExistingItem.qty!=1){
ExistingItem.qty -=1;
ExistingItem.sum -= action.payload.price
 }else{

 state.items= state.items.filter(
    item=> item.id!==action.payload.id)
 }
},
    // delete the item 
DeleteItemFromTheCart:(state,action)=>{
state.items= state.items.filter(
    item=> item.id!==action.payload.id)
},
    // empty the array
EmptyTheCart:(state)=>{
state.items=[];
}
    }

})
export const {addItemsTotheCart,removeItemFormTheCart,DeleteItemFromTheCart,EmptyTheCart} =CartSlice.actions
export default CartSlice.reducer;