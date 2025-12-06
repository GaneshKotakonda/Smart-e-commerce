import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { isLoading } from "expo-font";
const initialState={
    UserData:null,
    isLoading:true,
}
const UserSlice = createSlice({
    name :"UserSlice",
    initialState: initialState,
    reducers:{
        setUserData:(state,action)=>{
         state.UserData = action.payload;
         AsyncStorage.setItem("uid",JSON.stringify(action.payload));
         state.isLoading=true;
        },
        setIsLoading:(state,action)=>{
            state.isLoading=action.payload
        }
    }
    
})
export const {setUserData,setIsLoading} = UserSlice.actions;
export default UserSlice.reducer;
