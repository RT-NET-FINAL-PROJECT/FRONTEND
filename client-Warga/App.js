import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import TabNavigation from "./navigators/MainTab";
// import Register from "./screens/Register";
// import Login from "./screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import EditProfile from "./screens/EditProfile";
// import RegisterGuest from "./screens/RegisterGuest";
// import Services from "./screens/Services";
// import Logo from "./components/Logo";
// import PostDetails from "./screens/PostDetails";
import { Provider } from "react-redux";
import store from "./stores";
import { useState } from "react";
import MainStack from "./navigators/MainStack";

const Stack = createNativeStackNavigator();

export default function App() {
  // const [isLogin, setIsLogin] = useState(false);

  // AsyncStorage.getItem("access_token").then((item) => {
  //   if (item) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // });
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}
