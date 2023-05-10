import { View, Image, StyleSheet, ScrollView } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import { Text, Card, ButtonGroup, Icon, Avatar, Skeleton } from "@rneui/themed";
import EventCard from "../components/EventCard";
import { useEffect, useState } from "react";
import AnnouncementCard from "../components/AnnouncementCard";
import ProfileCard from "../components/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getAnnouncementPosts,
  getCurrentLoggedIn,
  getEventPosts,
} from "../stores/action/actionCreator";

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [postsLoading, setPostsLoading] = useState(false);
  const [postType, setPostType] = useState(0);
  // 0 = Event, 1 = Announcement
  const { currentLoggedIn } = useSelector((state) => state.users);
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const fetchCurrentLoggedIn = async () => {
    try {
      setLoading(true);
      await dispatch(getCurrentLoggedIn());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchCurrentLoggedIn();
    });
    return unsubscribe;
  }, []);

  const fetchPosts = async () => {
    try {
      setPostsLoading(true);
      if (postType === 0) {
        await dispatch(getEventPosts());
      }
      if (postType === 1) {
        await dispatch(getAnnouncementPosts());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPostsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [postType]);

  // console.log(postsLoading);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View>
          <View style={{ marginHorizontal: 16, marginVertical: 36 }}>
            <Skeleton animation="wave" height={80} />
          </View>
          <View style={{ marginHorizontal: 16 }}>
            <Skeleton animation="wave" height={45} />
          </View>
          <View style={{ marginHorizontal: 16, marginTop: 10 }}>
            <Skeleton animation="wave" height={200} />
          </View>
          <View style={{ marginHorizontal: 16, marginTop: 10 }}>
            <Skeleton animation="wave" height={200} />
          </View>
        </View>
      ) : (
        <ScrollView>
          <View style={{ marginVertical: 20 }}>
            <ProfileCard user={currentLoggedIn} />

            <ButtonGroup
              buttons={["Event", "Pengumuman"]}
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
            {}
            {postType === 0
              ? posts.map((post, index) => {
                  return (
                    <EventCard
                      post={post}
                      navigation={navigation}
                      postsLoading={postsLoading}
                      key={index}
                    />
                  );
                })
              : posts.map((post, index) => {
                  return (
                    <AnnouncementCard
                      post={post}
                      navigation={navigation}
                      postsLoading={postsLoading}
                      key={index}
                    />
                  );
                })}
          </View>
        </ScrollView>
      )}
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
