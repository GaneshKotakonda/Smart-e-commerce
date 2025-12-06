import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../styles/AppColors'
import { s, vs } from 'react-native-size-matters'
import AppText from '../Texts/AppText'

const OrderItem = ({date,totalAmount,totalPrice}) => {
  return (
    <View style={styles.main}>

    <View style={styles.container}>
        <AppText style={styles.txt} variant='bold'> OrderDetails: </AppText>
        <View style={{borderBottomWidth:1,marginHorizontal:s(12), borderColor:AppColors.medGrey}}/>
        <View style={{flexDirection:"row", justifyContent:"space-between"}} >
            <View style={styles.details} >

            <AppText>Total Price: {totalPrice}.00 </AppText>
             <AppText>Date: {date} </AppText>
            </View>
            <View style={styles.details} >

            <AppText style={{color:"red" , paddingRight:s(15)}}>${totalAmount}.00</AppText>
            
            </View>

        </View>
       
    </View>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    details:{
    marginBottom:s(20),
        marginTop:s(5),
        paddingLeft:s(22)
    },
    txt:{
    paddingHorizontal:s(15),
    paddingTop:s(10),
    fontSize:s(16)
    },
    main:{
marginHorizontal:s(10)
    },
    container:{
        marginBottom:s(20),
        marginTop:s(5),
        width:"100%",
        marginRight:s(10),
        height:vs(100),
        borderRadius: s(10),
        backgroundColor: AppColors.white,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: .2,


    }
})