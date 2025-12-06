import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React,{FC} from 'react'
import { AppColors } from '../../styles/AppColors'

interface AppSafeViewProps{
    children: React.ReactNode,
    style?:ViewStyle;
} 
const AppSafeView: FC<AppSafeViewProps> = ({children , style}) => {
  return (
    <SafeAreaView style={styles.SafeArea}>
        <View style={[styles.container,style]}>
            {children}
        </View>
    </SafeAreaView>
  )
}

export default AppSafeView

const styles = StyleSheet.create({
    SafeArea:{
        flex: 1,
        backgroundColor:AppColors.white,
        paddingTop: Platform.OS ==="android"? StatusBar.currentHeight||0 : 0
    },
    container:{
flex:1,
    }
})
