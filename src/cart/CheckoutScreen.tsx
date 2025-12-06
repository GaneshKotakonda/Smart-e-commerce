import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import AppButton from "../components/buttons/AppButton";
import { AppColors } from "../styles/AppColors";
import { useForm } from "react-hook-form";
import AppTextInputControler from "../components/inputs/AppTextInputControler";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Shipping, Taxes } from "../constants/constants";
import { addDoc, collection, doc } from "firebase/firestore";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { EmptyTheCart } from "../store/reducers/CartSlice";
import { db } from "../config/Firebase";


const schema = yup
  .object({
    FullName: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be  atleast 3 character"),
    PhoneNumber: yup
      .string()
      .required("Ph no is required ")
      .matches(/^[0-9]+$/, "must be digits ")
      .min(10, "Ph no must be atleast 10 character "),
    DetailedAddress: yup
      .string()
      .required("Address is requied ")
      .min(15, "Must be 15 characters "),
  })
  .required();
  type FormData = yup.InferType<typeof schema>


const CheckoutScreen = () => {
  <FlashMessage position="top"/>
  const dispatch = useDispatch()

  const navigation= useNavigation();

  const {items} = useSelector((state:RootState)=> state.CartSlice)

  const {UserData} = useSelector((state:RootState)=> state.UserSlice)

  const totalProductsPriceSum= items.reduce((acc,item)=> acc+=item.sum ,0)

  const totalPrice = totalProductsPriceSum+Taxes+Shipping;


  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const saveOrder = async (formdata) => {
    try {
      const orderbody ={
        ...formdata,
        items,
        createdAt: new Date(),
        totalPrice,
        totalProductsPriceSum,

      }

      const UserOrderRef = collection(doc(db,"users",UserData.uid),"orders") 
       await addDoc(UserOrderRef,orderbody );
       const OrderRef = collection(db , "orders")
        await addDoc(OrderRef,orderbody)
      showMessage({
        type: "success",
        message:"order placed Successfully"
      })
      navigation.goBack();
      dispatch(EmptyTheCart())

      console.log(formdata);

    } catch (error) {
      
    }
  };
  return (
    <View style={{ paddingHorizontal: s(15), flex: 1 }}>
      <View style={styles.container}>
        <AppTextInputControler
          control={control}
          name={"FullName"}
          placeholder="FullName"
        ></AppTextInputControler>
        <AppTextInputControler
          control={control}
          name={"PhoneNumber"}
          placeholder="PhoneNumber"
        ></AppTextInputControler>
        <AppTextInputControler
          control={control}
          name={"DetailedAddress"}
          placeholder="DetailedAddress"
        ></AppTextInputControler>
      </View>
      <View style={styles.bottom}>
        <AppButton
          title="Confirm"
          onPress={handleSubmit(saveOrder)}
        ></AppButton>
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowColor: AppColors.black,
  },
  bottom: {
    width: "100%",
    position: "absolute",
    bottom: s(0),
    marginStart: s(15),
    marginBottom: s(10),
  },
});
