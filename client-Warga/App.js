import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "./navigators/MainTab";
import Register from "./screens/Register";
import Login from "./screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";
import EditProfile from "./screens/EditProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNav">
        <Stack.Screen
          name="TabNav"
          component={TabNavigation}
          options={{
            headerTitle: () => (
              <Image
                source={require("./assets/icon.png")}
                style={{ width: 40, height: 40 }}
              ></Image>
            ),
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerTitle: () => (
              <Image
                source={require("./assets/icon.png")}
                style={{ width: 40, height: 40 }}
              ></Image>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
