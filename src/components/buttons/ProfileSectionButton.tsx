import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import AppText from "../Texts/AppText";
import { AppColors } from "../../styles/AppColors";
import { s, vs } from "react-native-size-matters";
interface IprofileButton{
    onPress: ()=>void;
    title: string;
}
const ProfileSectionButton: FC<IprofileButton> = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppText variant="medium" style={styles.textTitle}>
        {title}
      </AppText>
      <Text style={styles.arrowIcon}>›</Text>
    </TouchableOpacity>
  );
};
export default ProfileSectionButton;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomColor: AppColors.lightGrey,
    paddingBottom: vs(10),
    marginTop: vs(14),
    paddingHorizontal: s(10),
    flexDirection: "row",
    borderBottomWidth: 0.8,
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: s(16),

    color: AppColors.primary,
  },
  textContainer: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: s(8),
  },
  arrowIcon: {
    color: AppColors.black,
    fontSize: s(26),
    lineHeight: s(28),
  },
});
