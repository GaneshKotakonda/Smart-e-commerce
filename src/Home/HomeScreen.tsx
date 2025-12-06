import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HomeHeader from "../components/Header/HomeHeader";
import ProductCard from "../components/Cards/ProductCard";
import { AppColors } from "../styles/AppColors";
import { FlatList } from "react-native-gesture-handler";
import { s } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { addItemsTotheCart } from "../store/reducers/CartSlice";
import { getProductsData } from "../config/DataService";

function HomeScreen() {
    const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await getProductsData()
        setProducts(data);

  };
  useEffect(() => {
    fetchData();
  }, []);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <HomeHeader></HomeHeader>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            price={item.price}
            imageUrl={item.imageURL}
            onCartButtonPress={() => {
              dispatch(addItemsTotheCart(item));
            }}
          ></ProductCard>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", margin: s(10) }}
      ></FlatList>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
