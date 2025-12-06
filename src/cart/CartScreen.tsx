import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import TotalViews from "./TotalViews";
import { products } from "../data/products";
import { s } from "react-native-size-matters";
import AppButton from "../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  addItemsTotheCart,
  DeleteItemFromTheCart,
  removeItemFormTheCart,
} from "../store/reducers/CartSlice";
import { Shipping, Taxes } from "../constants/constants";


const CartScreen = () => {

  const dispatch = useDispatch();

  const { items } = useSelector((state: RootState) => state.CartSlice);

  const navigation = useNavigation();

  const TotalCost = items.reduce((acc,item)=>acc+item.sum,0)

  const OrderTotal = TotalCost + Shipping+Taxes;

  return (
    <>
       {
      items.length<=0?
      (<EmptyCart></EmptyCart>):(
         <View style={{ flex: 1, paddingHorizontal: s(15) }}>
      
   
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem
            {...item}
            price={item.sum}
            onReducePress={() => {
              dispatch(removeItemFormTheCart(item));
            }}
            onDeletePress={() => {
              dispatch(DeleteItemFromTheCart(item));
            }}
            onIncreasePress={() => {
              dispatch(addItemsTotheCart(item));
            }}
          ></CartItem>
        )}
      ></FlatList>
      <TotalViews itemsPrice={TotalCost} orderTotal={OrderTotal} />
      <AppButton
        onPress={() => navigation.navigate("CheckoutScreen")}
        title="continue"
      ></AppButton>
    </View>
      )
      
      }
   
  </>);
};

export default CartScreen;

const styles = StyleSheet.create({});
