import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import AppText from "../components/Texts/AppText";
import AppButton from "../components/buttons/AppButton";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { AppColors } from "../styles/AppColors";
const EmptyCart = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: s(130),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Feather name="shopping-bag" size={120} color="black" style={{paddingBottom:s(30) ,opacity:.8}}/>
      <AppText style={styles.txt} variant="bold">
        {" "}
        Your Cart is Empty
      </AppText>
      <AppText variant="medium" style={styles.newtxt}>
        {" "}
        Browse our products and find something you like
      </AppText>
      <AppButton title="start shopping" style={styles.but} onPress={()=>navigation.navigate("HomeScreen")}></AppButton>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  txt: {
    marginHorizontal: s(50),
    fontSize: s(20),
  },
  newtxt: {
    paddingTop: s(10),
    fontSize: s(14),
    opacity: 0.8,
    color:AppColors.medGrey
  },
  but: {
    marginStart: s(45),
    marginTop: s(20),
    marginHorizontal: s(50),
    width: "80%",
  },
});
