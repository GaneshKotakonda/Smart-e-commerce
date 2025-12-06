import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileSectionButton from '../components/buttons/ProfileSectionButton'
import HomeHeader from '../components/Header/HomeHeader'
import AppText from '../components/Texts/AppText'
import { s } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { SheetManager } from 'react-native-actions-sheet'
import LanguageActionSheet from '../components/Languages/LanguageActionSheet'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProfileScreen = () => {
  const naviagtion= useNavigation();
  const handelLogout= async ()=>{
      await AsyncStorage.removeItem("uid");
      naviagtion.navigate("AuthStack")
  }
  return (
    <View>
      <HomeHeader></HomeHeader>
      <AppText variant='bold' style={{marginTop:s(5),fontSize:s(18)}}> Hello Ganesh, </AppText>
<ProfileSectionButton title="my orders" onPress={()=>naviagtion.navigate("MyOrderScreen")}/> 
<ProfileSectionButton title="language" onPress={()=>{SheetManager.show("Lang_Sheet")}}/> 
<LanguageActionSheet/>
<ProfileSectionButton title="logout" onPress={handelLogout}/> 

 </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})