import { View, Image, StyleSheet, ScrollView } from "react-native";
import { SimpleLineIcons, Entypo } from "@expo/vector-icons";

import { Text, Card, Button, Icon, Avatar } from "@rneui/themed";

export default function AnnouncementCard({ post }) {
  const descriptionText =
    "Event Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis earum ex quaerat sint sapiente ab minus reprehenderit exercitationem nisi labore.";
  const descriptionTextShort =
    "Event Description Lorem ipsum dolor, sit amet consectetur";

  return (
    <Card containerStyle={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ width: "100%", fontSize: 16, fontWeight: "bold" }}>
            Announcement Name
          </Text>
        </View>
        {/* Divider */}
        <View
          style={{
            borderColor: "#ededed",
            borderWidth: 1,
            marginTop: 10,
            marginBottom: 16,
          }}
        />
        {/* End Divider */}
        <Text style={styles.description}>
          {descriptionText.length > 200
            ? descriptionText.substring(0, 200) + "..."
            : descriptionText}
          {descriptionText.length > 200 ? (
            <Text style={{ fontWeight: "bold" }}> See More</Text>
          ) : (
            ""
          )}
        </Text>
        {/* <View style={styles.information}>
          <Text style={{ fontWeight: "bold" }}>IDR 10.000</Text>
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
        </View> */}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "white",
    marginTop: 8,
  },
  fonts: {
    marginBottom: 8,
  },
  information: {
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
  description: {
    flex: 1,
    fontSize: 16,
    color: "black",
    alignItems: "center",
    alignContent: "center",
    textAlignVertical: "center",
    color: "#555555",
  },
});