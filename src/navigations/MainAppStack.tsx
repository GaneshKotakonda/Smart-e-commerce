import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainBottomTabs from "./MainBottomTabs";
import { s } from "react-native-size-matters";
import CheckoutScreen from "../cart/CheckoutScreen";
import MyOrderScreen from "../profile/MyOrderScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setIsLoading, setUserData } from "../store/reducers/UserSlice";
const Stack = createStackNavigator();

const MainAppStack = () => {
  const { UserData ,isLoading} = useSelector((state: RootState) => state.UserSlice);
  const dispatch = useDispatch();
  const isSignedIn = async () => {
    try {
      const storedData: any = await AsyncStorage.getItem("uid");
      if(storedData){
    dispatch(setUserData(JSON.parse(storedData)));
  }else{
    // dispatch(setIsLoading(false));
  }
    
    } catch (error) {
    // dispatch(setIsLoading(false))

    }
    
  };
  useEffect(() => {
    isSignedIn;
  }, []);


  // if(isLoading){
  //   return null;
  // }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={UserData ? "MainBottomTabs" : "AuthStack"}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainBottomTabs" component={MainBottomTabs} />
      <Stack.Screen
        options={{ headerShown: true }}
        name="CheckoutScreen"
        component={CheckoutScreen}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="MyOrderScreen"
        component={MyOrderScreen}
      />
    </Stack.Navigator>
  );
};

export default MainAppStack;

const styles = StyleSheet.create({});
