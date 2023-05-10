import { View, Image, StyleSheet, ScrollView } from "react-native";

import { Text, Card, ButtonGroup, Icon, Avatar } from "@rneui/themed";

export default function ProfileCard({ user }) {
  // console.log(user)

  return (
    <Card containerStyle={styles.container}>
      <View style={styles.user}>
        <View>
          <Text style={styles.name}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#582d2f" }}
            >
              Hi
            </Text>
            {", "}
            {user?.namaLengkap}
          </Text>
          {/* <Text style={styles.name}>{user?.rt_id}</Text> */}
        </View>
        <Avatar
          size={64}
          rounded
          source={
            user?.photoUrl
              ? { uri: user?.photoUrl }
              : {
                  uri: "https://publichealth.ouhsc.edu/Portals/1055a/Images/no-photo_1.png?ver=2021-06-23-120512-690",
                }
          }
          style={styles.icon}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
    color: "black",
    alignItems: "center",
    alignContent: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});
