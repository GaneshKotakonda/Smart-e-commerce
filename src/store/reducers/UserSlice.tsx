import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserData: null,
  isLoading: true,
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: initialState,
  reducers: {
    setUserData: (state, action) => {
      state.UserData = action.payload;
      AsyncStorage.setItem("uid", JSON.stringify(action.payload));
      state.isLoading = false;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    logout: (state) => {
      state.UserData = null;
      state.isLoading = false;
      AsyncStorage.removeItem("uid");
    },
  },
});

export const { setUserData, setIsLoading, logout } = UserSlice.actions;
export default UserSlice.reducer;
