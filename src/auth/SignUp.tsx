import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../components/Views/AppSafeView";
import { s, vs } from "react-native-size-matters";
import AppText from "../components/Texts/AppText";
import AppButton from "../components/buttons/AppButton";
import { AppColors } from "../styles/AppColors";
import { useNavigation } from "@react-navigation/native";
import AppTextInputControler from "../components/inputs/AppTextInputControler";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { setUserData } from "../store/reducers/UserSlice";
import { useDispatch } from "react-redux";

const schema = yup
  .object({
    UserName: yup
      .string()
      .required("UserName Must be entered ")
      .min(5, "minium 5 char required"),
    email: yup
      .string()
      .required("email must be eneterd")
      .min(10, "Minimum 10 letters should be entered"),
    password: yup
      .string()
      .required("password must be entered")
      .min(6, "Minimum 6 letters should be entered"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;





const SignUp = () => {
  const navigation = useNavigation();
const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const CreateAccount = async (data: FormData) => {
    try {
      const userCreation = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );


      
      navigation.navigate("MainBottomTabs");
      Alert.alert("user Created");
      const UserDataObj={
        uid : userCreation.user.uid
      }
      dispatch(setUserData(UserDataObj));
      
    } catch (error:any){

      let errorMessage = "";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "The email address is invalid.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "The password is too weak.";
      } else {
        errorMessage = "An error occurred during sign-up.";
      }
showMessage({
  type:"danger",
  message:errorMessage
})
    }
  };
  return (
    <AppSafeView style={styles.container}>
      <Image
        source={require("../assets/Images/app-logo.png")}
        style={styles.img}
      />

      <AppTextInputControler
        control={control}
        name={"UserName"}
        placeholder={"UserName"}
      />
      <AppTextInputControler
        control={control}
        name={"email"}
        placeholder={"email"}
        keyboardType="email-address"
      />
      <AppTextInputControler
        control={control}
        name={"password"}
        placeholder={"password"}
        secureTextEntry={true}
      />
      <AppText variant="medium" style={{ fontWeight: "bold" }}>
        {" "}
        Smart E-commerce
      </AppText>
      <AppButton
        title="Create New Account"
        onPress={handleSubmit(CreateAccount)}
      ></AppButton>
      <AppButton
        title="Go to Sign In "
        style={{ backgroundColor: AppColors.white }}
        textStyle={{ color: AppColors.black }}
        onPress={() => navigation.navigate("SignInScreen")}
      ></AppButton>
    </AppSafeView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  img: { height: vs(160), width: "100%" },
  container: {
    alignItems: "center",
    paddingHorizontal: s(12),
  },
});
