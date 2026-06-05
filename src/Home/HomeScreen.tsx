import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { AppColors } from "../styles/AppColors";
import { s, vs } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { addItemsTotheCart } from "../store/reducers/CartSlice";
import { getProductsData } from "../config/DataService";
import { showMessage } from "react-native-flash-message";

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

interface HomeScreenProps {
  navigation: any;
}

function HomeScreen({ navigation }: HomeScreenProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<{ [key: string]: Product[] }>({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsData();
      setProducts(data);

      // Group products by category
      const grouped: { [key: string]: Product[] } = {};
      data.forEach((product: Product) => {
        if (!grouped[product.category]) {
          grouped[product.category] = [];
        }
        grouped[product.category].push(product);
      });
      setCategories(grouped);
    };

    fetchData();
  }, []);

  const featuredProducts = products.slice(0, 3);
  const categoryNames = Object.keys(categories).slice(0, 3);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("../assets/Images/app-logo.png")} style={styles.logo} />
        <Text style={styles.headerTitle}>Smart Shop</Text>
      </View>

      {/* Diwali Sale Banner */}
      <View style={styles.bannerContainer}>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>🎉 Diwali Sale 🎉</Text>
          <Text style={styles.bannerSubtitle}>Up to 50% OFF</Text>
          <Text style={styles.bannerDescription}>On Selected Items</Text>
        </View>
      </View>

      {/* Featured Products Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Items</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productScroll}>
          {featuredProducts.map((product) => (
            <View key={product.id} style={styles.featuredCard}>
              <Image
                source={{ uri: product.imageURL }}
                style={styles.featuredImage}
              />
              <Text style={styles.featuredTitle} numberOfLines={2}>
                {product.title}
              </Text>
              <Text style={styles.featuredPrice}>${product.price.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                  dispatch(addItemsTotheCart(product));
                  showMessage({
                    message: "Item added to cart",
                    type: "success",
                  });
                }}
              >
                <Text style={styles.addButtonIcon}>🛒</Text>
                <Text style={styles.addButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Category Sections */}
      {categoryNames.map((categoryName) => (
        <View key={categoryName} style={styles.section}>
          <Text style={styles.sectionTitle}>
            {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productScroll}>
            {categories[categoryName]?.slice(0, 4).map((product) => (
              <View key={product.id} style={styles.categoryCard}>
                <Image
                  source={{ uri: product.imageURL }}
                  style={styles.categoryImage}
                />
                <Text style={styles.categoryTitle} numberOfLines={1}>
                  {product.title}
                </Text>
                <Text style={styles.categoryPrice}>${product.price.toFixed(2)}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      ))}

      {/* Browse All Button */}
      <TouchableOpacity
        style={styles.browseButton}
        onPress={() => navigation.navigate("AllProducts")}
      >
        <Text style={styles.browseButtonText}>Browse All Products</Text>
        <Text style={styles.browseButtonIcon}>›</Text>
      </TouchableOpacity>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: AppColors.primary,
    paddingHorizontal: s(15),
    paddingVertical: vs(12),
  },
  logo: {
    width: s(30),
    height: s(30),
    tintColor: AppColors.white,
  },
  headerTitle: {
    marginLeft: s(10),
    fontSize: s(18),
    fontWeight: "bold",
    color: AppColors.white,
    fontFamily: "nunito-bold",
  },
  bannerContainer: {
    paddingHorizontal: s(12),
    paddingVertical: vs(12),
  },
  banner: {
    backgroundColor: "#FF6B6B",
    borderRadius: s(12),
    paddingVertical: vs(24),
    paddingHorizontal: s(16),
    alignItems: "center",
    justifyContent: "center",
  },
  bannerTitle: {
    fontSize: s(24),
    fontWeight: "bold",
    color: AppColors.white,
    marginBottom: vs(4),
    fontFamily: "nunito-bold",
  },
  bannerSubtitle: {
    fontSize: s(18),
    fontWeight: "600",
    color: AppColors.white,
    marginBottom: vs(4),
    fontFamily: "nunito-bold",
  },
  bannerDescription: {
    fontSize: s(14),
    color: AppColors.white,
    fontFamily: "nunito-medium",
  },
  section: {
    marginTop: vs(20),
    paddingHorizontal: s(12),
  },
  sectionTitle: {
    fontSize: s(16),
    fontWeight: "600",
    color: AppColors.black,
    marginBottom: vs(12),
    fontFamily: "nunito-bold",
  },
  productScroll: {
    marginHorizontal: -s(12),
    paddingHorizontal: s(12),
  },
  featuredCard: {
    width: s(140),
    marginRight: s(12),
    backgroundColor: AppColors.white,
    borderRadius: s(8),
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  featuredImage: {
    width: "100%",
    height: s(120),
    resizeMode: "contain",
    backgroundColor: AppColors.lightGrey,
  },
  featuredTitle: {
    fontSize: s(12),
    fontFamily: "nunito-medium",
    paddingHorizontal: s(8),
    paddingTop: vs(8),
    color: AppColors.black,
    lineHeight: s(14),
  },
  featuredPrice: {
    fontSize: s(14),
    fontWeight: "600",
    paddingHorizontal: s(8),
    paddingTop: vs(4),
    color: AppColors.black,
    fontFamily: "nunito-bold",
  },
  addButton: {
    flexDirection: "row",
    backgroundColor: AppColors.primary,
    padding: s(8),
    marginHorizontal: s(8),
    marginVertical: vs(8),
    borderRadius: s(6),
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: AppColors.white,
    fontFamily: "nunito-bold",
    fontSize: s(11),
    marginLeft: s(6),
  },
  addButtonIcon: {
    fontSize: s(16),
    lineHeight: s(18),
  },
  categoryCard: {
    width: s(130),
    marginRight: s(12),
    backgroundColor: AppColors.white,
    borderRadius: s(8),
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryImage: {
    width: "100%",
    height: s(100),
    resizeMode: "contain",
    backgroundColor: AppColors.lightGrey,
  },
  categoryTitle: {
    fontSize: s(12),
    fontFamily: "nunito-medium",
    paddingHorizontal: s(8),
    paddingTop: vs(8),
    color: AppColors.black,
  },
  categoryPrice: {
    fontSize: s(12),
    fontWeight: "600",
    paddingHorizontal: s(8),
    paddingBottom: vs(8),
    color: AppColors.primary,
    fontFamily: "nunito-bold",
  },
  browseButton: {
    flexDirection: "row",
    backgroundColor: AppColors.primary,
    marginHorizontal: s(12),
    marginVertical: vs(24),
    paddingVertical: vs(14),
    paddingHorizontal: s(16),
    borderRadius: s(8),
    alignItems: "center",
    justifyContent: "center",
  },
  browseButtonText: {
    fontSize: s(16),
    fontWeight: "600",
    color: AppColors.white,
    fontFamily: "nunito-bold",
  },
  browseButtonIcon: {
    color: AppColors.white,
    fontSize: s(24),
    marginLeft: s(6),
    lineHeight: s(24),
  },
  bottomSpacing: {
    height: vs(20),
  },
});
