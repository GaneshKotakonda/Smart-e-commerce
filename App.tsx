import React from "react";
import { StyleSheet } from "react-native";
import AppSafeView from "./src/components/Views/AppSafeView";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigations/MainAppStack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import FlashMessage from "react-native-flash-message";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/localisation/i18n";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [fontLoaded] = useFonts({
    "nunito-bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "nunito-medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
    ...Entypo.font,
    ...Ionicons.font,
    ...MaterialCommunityIcons.font,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <AppSafeView style={styles.container}>
      <FlashMessage position="top" />

      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <NavigationContainer>
            <MainAppStack />
          </NavigationContainer>
        </I18nextProvider>
      </Provider>
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});