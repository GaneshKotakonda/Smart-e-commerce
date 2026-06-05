import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import HomeScreen from "../Home/HomeScreen";
import AllProductsScreen from "../Home/AllProductsScreen";
import ProfileScreen from "../profile/ProfileScreen";
import CartScreen from "../cart/CartScreen";
import { AppColors } from "../styles/AppColors";
import { s, vs } from "react-native-size-matters";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="HomeScreenPromo" component={HomeScreen} />
      <HomeStack.Screen name="AllProducts" component={AllProductsScreen} />
    </HomeStack.Navigator>
  );
}

export default function MainBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
        tabBarInactiveTintColor: "#999",
        tabBarLabelStyle: {
          marginTop: s(4),
          fontSize: s(11),
          paddingBottom: s(4),
        },
        tabBarStyle: {
          height: vs(65),
          paddingBottom: s(8),
          paddingTop: s(8),
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackNavigator}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: s(20) }}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: s(20) }}>🛒</Text>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: s(20) }}>👤</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
