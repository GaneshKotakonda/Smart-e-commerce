import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/AppColors'

// Define props interface
interface AppInputProps extends TextInputProps {
  placeholder?: string,
  secureTextEntry?: boolean
  value?: string
  onChangeText?: (text: string) => void
  keyboardType?: TextInputProps['keyboardType']
  style?: object
}

const AppInput: React.FC<AppInputProps> = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
  style,
  ...rest
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      style={[styles.input, style]}
      {...rest}
    />
  )
}

export default AppInput

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: vs(40),
    borderRadius: s(20),
    borderColor: AppColors.black,
    borderWidth: 1,
    marginVertical: s(10),
    paddingStart: s(10),
  },
})
