import { View, Image, StyleSheet, ScrollView } from "react-native";
import { SimpleLineIcons, Entypo } from "@expo/vector-icons";

import { Text, Card, Button, Icon, Avatar } from "@rneui/themed";

export default function EventCard({ event }) {
  return (
    <Card containerStyle={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ width: "50%", fontSize: 16, fontWeight: "bold" }}>
            Event Name
          </Text>
        </View>
        {/* Divider */}
        <View
          style={{
            borderColor: "black",
            borderWidth: 1,
            marginTop: 10,
            marginBottom: 16,
          }}
        />
        {/* End Divider */}
        <Text style={styles.name}>
          Event Description Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Officiis earum ex quaerat sint sapiente ab minus reprehenderit
          exercitationem nisi labore.
        </Text>
        <View style={styles.user}>
          <Text>IDR 5.000</Text>

          <View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Entypo name="location-pin" size={24} color="black" />
              <Text>Location</Text>
            </View>
            <Text
              style={{
                textAlign: "right",
              }}
            >
              12-12-2023
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "white",
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
    marginTop: 8,
    justifyContent: "space-between",
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "black",
    // borderColor: "black",
    // borderWidth: 1,
    alignItems: "center",
    alignContent: "center",
    textAlignVertical: "center",
    color: "#555555",
  },
});
