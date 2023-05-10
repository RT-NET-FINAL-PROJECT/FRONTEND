import { Image, View, Text } from "react-native";

export default function Logo() {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-71585.appspot.com/o/icon.png?alt=media&token=25865d4b-3f43-43ef-9065-5a82d65dcae5",
        }}
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
