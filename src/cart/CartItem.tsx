import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { s } from "react-native-size-matters";
import AppText from "../components/Texts/AppText";
import App from "../../App";
import AntDesign from "@expo/vector-icons/AntDesign";
import { AppColors } from "../styles/AppColors";
interface ICartItem {
  title: string;
  price: string | number;
  imageURL: string;
  qty: number;
  onDeletePress: () => void;
  onIncreasePress: () => void;
  onReducePress: () => void;
}
const CartItem: FC<ICartItem> = ({
  title,
  price,
  imageURL,
  qty,
  onDeletePress,
  onIncreasePress,
  onReducePress,
}) => {
  
  return (
    <View style={styles.container}>
      {/* image conatiner */}
      <View style={styles.ImageContainer}>
        <Image style={styles.img} source={{ uri:imageURL  }}></Image>
      </View>
      {/* details */}
      <View style={styles.detailsConatiner}>
        <AppText style={styles.Text}> {title}</AppText>
        <AppText style={styles.Price} variant="bold">
          {" "}
          $ {price}
        </AppText>
        <View style={styles.QtyConatiner}>
          <Pressable onPress ={onIncreasePress}style={styles.iconButton}>
            <AntDesign name="plus" size={18} color="black" />
          </Pressable>
          <AppText style={{ paddingHorizontal: s(10), paddingVertical: s(4) }}>
            {qty}
          </AppText>
          <Pressable onPress={onReducePress} style={styles.iconButton}>
            <AntDesign name="minus" size={18} color="black" />
          </Pressable>
        </View>
      </View>
      {/* delete */}
      <View style={styles.deleteContainer}>
        <Pressable onPress={onDeletePress} style={styles.deletebutton}>
          <AntDesign name="delete" size={15} color="red" />
          <AppText style={styles.deleteText}>delete</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginHorizontal: s(10),
    borderBottomWidth: 1.2,
    borderColor: AppColors.blueGrey,
  },
  ImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsConatiner: {
    flex: 2.5,
  },
  deleteContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  img: {
    height: s(80),
    width: s(80),
    borderRadius: s(5),
  },
  Text: {
    fontSize: s(12),
    paddingTop: s(8),
    paddingStart: s(15),
  },
  Price: {
    fontSize: s(15),
    paddingVertical: s(7),
    paddingStart: s(15),
  },
  deleteText: {
    fontSize: s(12),
    paddingEnd: s(5),
    paddingBottom: s(5),
    paddingStart: s(5),
    color: AppColors.medGrey,
  },
  deletebutton: {
    flexDirection: "row",
  },
  QtyConatiner: {
    borderWidth: s(1),
    borderColor: AppColors.disableGrey,
    width: s(80),
    justifyContent: "center",
    alignItems: "center",
    marginStart: s(15),
    borderRadius: s(30),
    flexDirection: "row",
    marginBottom: s(4),
  },
  iconButton: {
    height: s(20),
    width: s(20),
    borderRadius: s(10),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
