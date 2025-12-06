import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from '../Texts/AppText'
import { s } from 'react-native-size-matters'
import { AppColors } from '../../styles/AppColors'

interface RadiowithTitleProps {
  selected: boolean;
  title: string;
  onPress?: () => void;
}

const RadiowithTitle: React.FC<RadiowithTitleProps> = ({ selected, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.circle}>
          {selected && <View style={styles.inner} />}
        </View>
        <AppText style={{ marginStart: s(6), fontSize: s(17) }}>{title}</AppText>
      </View>
    </TouchableOpacity>
  )
}

export default RadiowithTitle

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  circle: {
    height: s(20),
    width: s(20),
    borderRadius: s(10),
    borderWidth: s(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: s(10),
  },
  inner: {
    height: s(10),
    width: s(10),
    borderRadius: s(5),
    borderWidth: s(1),
    backgroundColor: AppColors.black,
  },
})
