import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();
export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"Test"} component={<Text>Test</Text>} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
