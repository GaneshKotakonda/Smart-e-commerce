import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HomeHeader from "../components/Header/HomeHeader";
import ProductCard from "../components/Cards/ProductCard";
import { AppColors } from "../styles/AppColors";
import { FlatList } from "react-native-gesture-handler";
import { s, vs } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { addItemsTotheCart } from "../store/reducers/CartSlice";
import { getProductsData } from "../config/DataService";

interface Product {
  id: number;
  title: string;
  price: number;
  imageURL: string;
  description: string;
  category: string;
  rating?: number;
  stock?: number;
}

function AllProductsScreen() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    const data = await getProductsData();
    setAllProducts(data);
    setFilteredProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product: Product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <HomeHeader onSearchChange={handleSearch} searchValue={searchQuery} />
      {filteredProducts.length === 0 ? (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateText}>No products found</Text>
          <Text style={styles.emptyStateSubText}>
            Try searching with different keywords
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item: Product) => item.id.toString()}
          renderItem={({ item }: { item: Product }) => (
            <ProductCard
              title={item.title}
              price={item.price}
              imageUrl={item.imageURL}
              rating={item.rating}
              onCartButtonPress={() => {
                dispatch(addItemsTotheCart(item));
              }}
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

export default AllProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  listContainer: {
    paddingVertical: vs(8),
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(20),
  },
  emptyStateText: {
    fontSize: s(18),
    fontWeight: "600",
    color: AppColors.black,
    marginBottom: vs(8),
    textAlign: "center",
  },
  emptyStateSubText: {
    fontSize: s(14),
    color: AppColors.medGrey,
    textAlign: "center",
  },
});
