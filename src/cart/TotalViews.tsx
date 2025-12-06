import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'
import AppText from '../components/Texts/AppText'
import { AppColors } from '../styles/AppColors'
import { Shipping, Taxes } from '../constants/constants'
interface ITotalsView
{
itemsPrice?: number;
orderTotal?: number;
}
const TotalViews:FC<ITotalsView> =({itemsPrice, orderTotal}) => {
  return (
    <View>
        <View style={styles.row}>
    <AppText style={styles.textTitle}>Total items price:</AppText>
<AppText style={styles.textPrice}>${itemsPrice}</AppText>
        </View>
        <View style={styles.row}>
<AppText style={styles.textTitle}>Taxes:</AppText>
<AppText style={styles.textPrice}>${Taxes}</AppText>
        </View>
        <View style={styles.row}>
<AppText style={styles.textTitle}>Shipping: </AppText>
<AppText style={styles.textPrice}>${Shipping}</AppText>
        </View>
<View style={styles.seprator}/>
<View style={styles.row}>
    <AppText style={styles.textTitle}>Total items price:</AppText>
<AppText style={styles.textPrice}>${orderTotal}</AppText>
        </View>
    </View>
  )
}

export default TotalViews

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:vs(20)
    },
    textTitle: {
fontSize: s(16),
flex: 1},
textPrice: {
fontSize: s(16),
color: AppColors.primary
},
seprator:{
height: 1,
width: "100%",
backgroundColor: AppColors.blueGrey,
marginVertical: vs(5)
}
})