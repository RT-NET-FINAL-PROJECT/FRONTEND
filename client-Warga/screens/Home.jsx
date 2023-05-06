import { View, Image, StyleSheet, ScrollView } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import { Text, Card, ButtonGroup, Icon, Avatar } from "@rneui/themed";
import EventCard from "../components/EventCard";
import { useState } from "react";
import AnnouncementCard from "../components/AnnouncementCard";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  const [postType, setPostType] = useState(0);
  // 0 = Event, 1 = Announcement
  const user = {
    name: "Jane Doe",
    avatar:
      "https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View>
          <ProfileCard user={user} />

          <ButtonGroup
            buttons={["Event", "Announcement"]}
            selectedIndex={postType}
            onPress={(value) => {
              setPostType(value);
            }}
            containerStyle={{
              marginTop: 30,
              marginHorizontal: 16,
              borderRadius: 8,
            }}
            selectedButtonStyle={{ backgroundColor: "#582d2f" }}
          />
          {postType === 0 ? <EventCard /> : <AnnouncementCard />}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#2596be",
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
    marginRight: 10,
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
