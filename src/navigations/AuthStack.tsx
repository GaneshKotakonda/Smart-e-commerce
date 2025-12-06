import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignInScreen from '../auth/SignInScreen';
import SignUp from '../auth/SignUp';
const Stack= createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
     } }
    >
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component={SignUp}/>

    </Stack.Navigator>
  )
}

export default AuthStack

