import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileSectionButton from '../components/buttons/ProfileSectionButton'
import HomeHeader from '../components/Header/HomeHeader'
import AppText from '../components/Texts/AppText'
import { s } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { SheetManager } from 'react-native-actions-sheet'
import LanguageActionSheet from '../components/Languages/LanguageActionSheet'
import { useDispatch } from 'react-redux'
import { logout } from '../store/reducers/UserSlice'

const ProfileScreen = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{ name: "AuthStack" }],
    });
  };

  return (
    <View>
      <HomeHeader />
      <AppText variant='bold' style={{ marginTop: s(5), fontSize: s(18) }}>
        Hello User,
      </AppText>
      <ProfileSectionButton title="my orders" onPress={() => navigation.navigate("MyOrderScreen")} />
      <ProfileSectionButton title="language" onPress={() => { SheetManager.show("Lang_Sheet") }} />
      <LanguageActionSheet />
      <ProfileSectionButton title="logout" onPress={handleLogout} />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
