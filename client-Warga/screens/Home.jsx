import { View, Image, StyleSheet, ScrollView } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import { Text, Card, ButtonGroup, Icon, Avatar } from "@rneui/themed";
import EventCard from "../components/EventCard";
import { useEffect, useState } from "react";
import AnnouncementCard from "../components/AnnouncementCard";
import ProfileCard from "../components/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentLoggedIn } from "../stores/action/actionCreator";

export default function Home() {
  const [postType, setPostType] = useState(0);
  // 0 = Event, 1 = Announcement
  const { currentLoggedIn } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getCurrentLoggedIn());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ marginVertical: 20 }}>
          <ProfileCard user={currentLoggedIn} />

          <ButtonGroup
            buttons={["Event", "Announcement"]}
            selectedIndex={postType}
            onPress={(value) => {
              setPostType(value);
            }}
            containerStyle={{
              marginTop: 35,
              marginHorizontal: 16,
              borderRadius: 8,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
            selectedButtonStyle={{ backgroundColor: "white" }}
            selectedTextStyle={{ color: "#582d2f", fontWeight: "bold" }}
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
