import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../Views/AppSafeView'
import { AppColors } from '../../styles/AppColors'
import { vs } from 'react-native-size-matters'

function HomeHeader(){
  return (
      <View style={styles.container}>
<Image source ={require("../../assets/Images/app-logo.png")} style={styles.img}></Image>
    </View> 
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.primary,
        height:vs(38),
        paddingBottom:vs(5),
        justifyContent: 'center',
alignItems: 'center',
        },
        img:{
            tintColor:AppColors.white,
            height:vs(30),
            width:vs(30),
            
        }
})
