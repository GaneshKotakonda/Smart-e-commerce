import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Home/HomeScreen";
import ProfileScreen from "../profile/ProfileScreen";
import CartScreen from "../cart/CartScreen";
import { AppColors } from "../styles/AppColors";
import { s, vs } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();
export default function MainBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
        tabBarLabelStyle: {
          marginTop: s(4),
          fontSize: s(12),
        },
        tabBarStyle: {
          height: vs(40),
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Ionicons name="cart" size={26} color="black" />,
        }}
        name="CartScreen"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" size={26} color="black" />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
