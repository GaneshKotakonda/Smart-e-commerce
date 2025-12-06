import { StyleSheet, Text, TextProps, TextStyle, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import  { FC } from 'react';
import { AppColors } from '../../styles/AppColors';

interface AppTextProps extends TextProps{
    children: React.ReactNode;
    style?: TextStyle | TextStyle[];
    variant?: "medium" | "bold"


}
const AppText :FC<AppTextProps>=({children , style , variant="medium", ...rest})=>{
  return (
    
      <Text {...rest} style={[styles[variant] ,style]}>
        {children}
      </Text>

  )
}

export default AppText

const styles = StyleSheet.create({
    bold:{
        fontSize: s(14),
        color:AppColors.black,
        fontFamily:"nunito-bold"

    },
      medium:{
        fontSize: s(14),
        color:AppColors.black,
                fontFamily:"nunito-medium"


    }
})