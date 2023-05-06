import { Image, View, Text } from "react-native";

export default function Logo() {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Image
        source={require("../assets/icon.png")}
        style={{ width: 40, height: 40 }}
      ></Image>
      <Text
        style={{
          paddingLeft: 8,
          fontWeight: "bold",
          fontSize: 20,
          color: "#3d040c",
        }}
      >
        RT - NET
      </Text>
    </View>
  );
}
