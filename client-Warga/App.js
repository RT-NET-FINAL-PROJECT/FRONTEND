import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "./navigators/MainTab";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNav"
          component={TabNavigation}
          options={{ headerTitle: "Logo" }}
        />
        {/* <Stack.Screen name="Details" component={Details} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
