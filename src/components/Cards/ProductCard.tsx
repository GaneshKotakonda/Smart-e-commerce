import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/AppColors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface IproductCard {
  imageUrl: string;
  price: number;
  title: string;
  onCartButtonPress?: () => void;
  rating?: number;
}

const ProductCard: FC<IproductCard> = ({ onCartButtonPress, title, imageUrl, price, rating }) => {
  return (
    <View style={styles.container}>
      {/* Image on left */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.img}
          source={{
            uri: imageUrl,
          }}
        />
      </View>

      {/* Details on right */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        
        {rating && (
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons name="star" size={s(14)} color="#FFA500" />
            <Text style={styles.rating}>{rating.toFixed(1)}</Text>
          </View>
        )}

        <Text style={styles.price}>${price.toFixed(2)}</Text>

        <TouchableOpacity 
          style={styles.cartButton}
          onPress={onCartButtonPress}
        >
          <MaterialCommunityIcons name="cart-plus" size={s(18)} color="white" />
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: AppColors.white,
    marginHorizontal: s(12),
    marginVertical: vs(8),
    borderRadius: s(8),
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  imageContainer: {
    width: s(120),
    height: vs(120),
    backgroundColor: AppColors.lightGrey,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    padding: s(12),
    justifyContent: "space-between",
  },
  title: {
    fontSize: s(13),
    fontFamily: "nunito-bold",
    color: AppColors.black,
    lineHeight: s(18),
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: vs(4),
  },
  rating: {
    fontSize: s(12),
    marginLeft: s(4),
    color: AppColors.medGrey,
    fontFamily: "nunito-medium",
  },
  price: {
    fontSize: s(16),
    fontFamily: "nunito-bold",
    color: AppColors.black,
    marginTop: vs(6),
  },
  cartButton: {
    flexDirection: "row",
    backgroundColor: AppColors.primary,
    paddingVertical: vs(8),
    paddingHorizontal: s(10),
    borderRadius: s(6),
    alignItems: "center",
    justifyContent: "center",
    marginTop: vs(8),
  },
  cartButtonText: {
    color: AppColors.white,
    fontSize: s(12),
    fontFamily: "nunito-bold",
    marginLeft: s(6),
  },
});
