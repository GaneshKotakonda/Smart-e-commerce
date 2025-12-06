import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./reducers/CartSlice"
import UserSlice from"./reducers/UserSlice"
export const store=configureStore({
    reducer:{
         CartSlice: CartSlice,
         UserSlice: UserSlice,
    }
})
export type RootState=ReturnType<typeof store.getState>;