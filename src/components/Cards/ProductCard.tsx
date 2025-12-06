import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC, FunctionComponent } from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/AppColors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
interface IproductCard {
  imageUrl: string;
  price: number;
  title: string;
}
const ProductCard: FC<IproductCard> = ({ onCartButtonPress, title, imageUrl, price }) => {
  return (
    <View style={styles.container}>
      {/* cart button */}
      <View style={styles.cartButton}>
        <TouchableOpacity onPress={onCartButtonPress}>
          <MaterialCommunityIcons name="cart-heart" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/*image section */}
      <View style={styles.imagecontainer}>
        <Image
          style={styles.img}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      {/*details section */}
      <View style={styles.Detailscontainer}>
        <Text style={styles.text}> {title}</Text>
        <Text style={styles.price}> {price} $</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    height: vs(190),
    width: s(160),
    borderRadius: s(10),
    backgroundColor: AppColors.white,
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.2,
  },
  imagecontainer: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: s(130),
    width: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  Detailscontainer: {
    paddingTop: s(18),
    paddingHorizontal: s(10),
    paddingBottom: s(10),
  },
  text: {
    fontSize: s(15),
    paddingBottom: s(4),
    fontFamily: "nunito-medium",
  },
  price: {
    fontSize: s(13),
    fontFamily: "nunito-bold",
  },
  cartButton: {
    position: "absolute",
    height: s(28),
    width: s(28),
    borderRadius: s(14),
    backgroundColor: AppColors.black,
    left: s(5),
    top: s(5),
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
