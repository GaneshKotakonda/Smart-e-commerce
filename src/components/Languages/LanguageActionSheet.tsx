import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActionSheet from 'react-native-actions-sheet'
import AppText from '../Texts/AppText'
import AppButton from '../buttons/AppButton'
import { s } from 'react-native-size-matters'
import RadiowithTitle from '../inputs/RadiowithTitle'

const LanguageActionSheet = () => {
  return (
    
      <ActionSheet id="Lang_Sheet">
            <View  style={styles.containerSheet}>

       <AppText style={{textAlign:"center" , paddingBottom:s(20) , fontSize:s(18)}}>Choose a Language</AppText>
       <RadiowithTitle selected ={true} title={"English"}/>
       <RadiowithTitle selected ={false} title={"Spanish"} />
       <AppButton title="confirm"></AppButton>
            </View>
        </ActionSheet>

  )
}

export default LanguageActionSheet

const styles = StyleSheet.create({
    containerSheet:{
    padding:s(16)
    }
})