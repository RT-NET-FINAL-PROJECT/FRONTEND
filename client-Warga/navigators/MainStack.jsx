import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "./MainTab";
import Register from "../screens/Register";
import Login from "../screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditProfile from "../screens/EditProfile";
import RegisterGuest from "../screens/RegisterGuest";
import Services from "../screens/Services";
import Logo from "../components/Logo";
import PostDetails from "../screens/PostDetails";
import { Provider, useSelector } from "react-redux";
import store from "../stores";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  const [isLogin, setIsLogin] = useState(false);
  const { login } = useSelector((state) => state.users);

  useEffect(() => {
    AsyncStorage.getItem("access_token").then((item) => {
      console.log(item);
      if (item) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, [login]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLogin ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="TabNav"
              component={TabNavigation}
              options={{
                headerTitle: () => <Logo />,
              }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{
                headerTitle: () => <Logo />,
              }}
            />
            <Stack.Screen
              name="RegisterGuest"
              component={RegisterGuest}
              options={{
                headerTitle: () => <Logo />,
              }}
            />
            <Stack.Screen
              name="Services"
              component={Services}
              options={{
                headerTitle: () => <Logo />,
              }}
            />
            <Stack.Screen
              name="PostDetails"
              component={PostDetails}
              options={{
                headerTitle: () => <Logo />,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
