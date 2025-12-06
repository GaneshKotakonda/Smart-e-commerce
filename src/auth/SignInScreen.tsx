import { Image, StyleSheet, Text, View } from "react-native";
import AppSafeView from "../components/Views/AppSafeView";
import { s, vs } from "react-native-size-matters";
import AppText from "../components/Texts/AppText";
import AppButton from "../components/buttons/AppButton";
import { AppColors } from "../styles/AppColors";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import AppTextInputControler from "../components/inputs/AppTextInputControler";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/reducers/UserSlice";
<FlashMessage position="top" />;

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email must be entered")
      .min(8, "minimum 8 char should be entered"),
    password: yup
      .string()
      .required("password must be entered")
      .min(6, "minimum 6 char should be entered"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;





const SignInScreen = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation();
  const LoginDetails = async (data: FormData) => {
    try {
      const UserCrendentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const UserDataObj={
        uid : UserCrendentials.user.uid
      }
      dispatch(setUserData(UserDataObj));
      navigation.navigate("MainBottomTabs");
    } catch (error: any) {
      let errorMsg = "";

      switch (error.code) {
        case "auth/user-not-found":
          errorMsg = "User not found";
          break;
        case "auth/invalid-credential":
        case "auth/wrong-password":
          errorMsg = "Wrong email or password";
          break;
        case "auth/invalid-email":
          errorMsg = "Invalid email format";
          break;
        case "auth/too-many-requests":
          errorMsg = "Too many attempts. Please try again later.";
          break;
        case "auth/network-request-failed":
          errorMsg = "Network error. Check your connection.";
          break;
        default:
          errorMsg = "Error occurred during sign in";
      }

      console.log(error);
      showMessage({
        type: "danger",
        message: errorMsg,
      });
    }
  };
  return (
    <AppSafeView style={styles.container}>
      <FlashMessage position="top" />

      <Image
        source={require("../assets/Images/app-logo.png")}
        style={styles.img}
      />
      <AppTextInputControler
        control={control}
        name={"email"}
        placeholder={"enter ur email"}
        keyboardType="email-address"
      />
      <AppTextInputControler
        control={control}
        name={"password"}
        placeholder={"enter ur password"}
        secureTextEntry={true}
      />
      <AppText
        variant="medium"
        style={{ fontWeight: "bold", paddingTop: vs(10) }}
      >
        {" "}
        Smart E-commerce
      </AppText>
      <AppButton title="Login" onPress={handleSubmit(LoginDetails)}></AppButton>
      <AppButton
        title="SignUp"
        style={{ backgroundColor: AppColors.white }}
        textStyle={{ color: AppColors.black }}
        onPress={() => navigation.navigate("SignUp")}
      ></AppButton>
    </AppSafeView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  img: { height: vs(160), width: s(160) },
  container: {
    alignItems: "center",
    paddingHorizontal: s(12),
  },
});
