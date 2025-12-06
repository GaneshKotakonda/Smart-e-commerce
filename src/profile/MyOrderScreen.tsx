import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeView from "../components/Views/AppSafeView";
import OrderItem from "../components/Cards/OrderItem";
import { orderData } from "../data/OrderData";
import { fetchUserOrders } from "../config/DataService";
import { getDateFromFireStoreTimeStampObject } from "../helpers/DateTimeHelper";

const MyOrderScreen = () => {
  const [OrderList, setOrderList] = useState([]);
  const getOrders = async () => {
    const response = await fetchUserOrders();
    setOrderList(response);
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <AppSafeView>
      <FlatList
        data={OrderList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem 
        date={getDateFromFireStoreTimeStampObject(item.createdAt)}
        totalAmount={item.totalProductsPriceSum}
        totalPrice={item.totalPrice}
        ></OrderItem>}
      ></FlatList>
    </AppSafeView>
  );
};

export default MyOrderScreen;

const styles = StyleSheet.create({});
