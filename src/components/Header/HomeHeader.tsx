import { Image, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import AppSafeView from '../Views/AppSafeView'
import { AppColors } from '../../styles/AppColors'
import { vs, s } from 'react-native-size-matters'

interface HomeHeaderProps {
  onSearchChange?: (text: string) => void;
  searchValue?: string;
}

function HomeHeader({ onSearchChange, searchValue }: HomeHeaderProps) {
  return (
      <View>
        <View style={styles.container}>
          <Image source ={require("../../assets/Images/app-logo.png")} style={styles.img}></Image>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor={AppColors.medGrey}
            onChangeText={onSearchChange}
            value={searchValue}
          />
        </View>
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
    },
    searchContainer: {
      backgroundColor: AppColors.primary,
      paddingHorizontal: s(15),
      paddingVertical: vs(10),
    },
    searchInput: {
      backgroundColor: AppColors.white,
      borderRadius: s(8),
      paddingHorizontal: s(12),
      paddingVertical: vs(8),
      fontSize: s(14),
      color: AppColors.black,
    },
})
