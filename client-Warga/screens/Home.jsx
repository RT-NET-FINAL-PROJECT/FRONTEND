import { View, Image, StyleSheet, ScrollView } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import { Text, Card, Button, Icon, Avatar } from "@rneui/themed";
import EventCard from "../components/EventCard";

export default function Home() {
  const user = {
    name: "Jane Doe",
    avatar:
      "https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <Card containerStyle={styles.container}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ width: "50%", fontSize: 16, fontWeight: "bold" }}>
                Profile
              </Text>

              <SimpleLineIcons
                name="options-vertical"
                size={16}
                color="black"
              />
            </View>
            {/* Divider */}
            <View
              style={{
                borderColor: "#2187ab",
                borderWidth: 2,
                marginTop: 10,
                marginBottom: 16,
              }}
            />
            {/* End Divider */}
            <View style={styles.user}>
              <Avatar
                size={64}
                rounded
                source={user.avatar ? { uri: user.avatar } : {}}
                style={styles.image}
              />
              <Text style={styles.name}>{user.name}</Text>
            </View>
          </View>
        </Card>
        <Text
          style={{
            marginLeft: 16,
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 20,
          }}
        >
          Events
        </Text>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#2596be",
  },
  eventContainer: {
    borderRadius: 10,
    backgroundColor: "#145369",
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "white",
    // borderColor: "black",
    // borderWidth: 1,
    alignItems: "center",
    alignContent: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});
