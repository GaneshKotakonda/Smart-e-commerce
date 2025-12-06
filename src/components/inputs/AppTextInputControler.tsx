import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import AppInput from "./AppInput";
import { AppColors } from "../../styles/AppColors";
import AppText from "../Texts/AppText";
import { s, vs } from "react-native-size-matters";

interface AppTextInputControlerProps<T extends FieldValues>{
control:Control<T>,
  name:Path<T>,
  rules?:object,
  placeholder:String,
  secureTextEntry?:boolean
  keyboardType?:"default"|"email-address"|"numeric";
}
const AppTextInputControler = <T extends FieldValues>({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
  keyboardType,
}:AppTextInputControlerProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={error && styles.error}
          ></AppInput>

          {error && <AppText style={styles.errorMsg}>{error.message} </AppText>}
        </>
      )}
    ></Controller>
  );
};

export default AppTextInputControler;

const styles = StyleSheet.create({
  error: {
    borderColor: AppColors.red,
  },
  errorMsg: {
    margin: vs(-5),
    marginStart: s(10),
    fontSize: s(12),
    color: AppColors.red,
  },
});
