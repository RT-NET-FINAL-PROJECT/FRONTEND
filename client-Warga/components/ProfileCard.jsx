import { View, Image, StyleSheet, ScrollView } from "react-native";

import { Text, Card, ButtonGroup, Icon, Avatar } from "@rneui/themed";

export default function ProfileCard({ user }) {
  return (
    <Card containerStyle={styles.container}>
      <View style={styles.user}>
        <View>
          <Text style={styles.name}>Hi, {user.name}</Text>
          <Text style={styles.name}>RT 3</Text>
        </View>
        <Avatar
          size={64}
          rounded
          source={user.avatar ? { uri: user.avatar } : {}}
          style={styles.icon}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#582d2f",
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "white",
    alignItems: "center",
    alignContent: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});
