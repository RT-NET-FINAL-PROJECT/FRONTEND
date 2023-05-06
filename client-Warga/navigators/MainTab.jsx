import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Menu from "../screens/Menu";

const Tab = createBottomTabNavigator();
export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#582d2f",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="menu" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  image: { width: 44, height: 21 },
});
