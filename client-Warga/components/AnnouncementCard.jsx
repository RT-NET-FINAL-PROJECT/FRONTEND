import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SimpleLineIcons, Entypo, MaterialIcons } from "@expo/vector-icons";

import { Text, Card, Button, Icon, Avatar, Skeleton } from "@rneui/themed";

export default function AnnouncementCard({ post, postsLoading, navigation }) {
  const descriptionText =
    "Event Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis earum ex quaerat sint sapiente ab minus reprehenderit exercitationem nisi labore.";
  const descriptionTextShort =
    "Event Description Lorem ipsum dolor, sit amet consectetur";

  return (
    <>
      {postsLoading ? (
        <View>
          <View style={{ marginHorizontal: 16, marginTop: 10 }}>
            <Skeleton animation="wave" height={100} />
          </View>
          <View style={{ marginHorizontal: 16, marginTop: 10 }}>
            <Skeleton animation="wave" height={100} />
          </View>
          <View style={{ marginHorizontal: 16, marginTop: 10 }}>
            <Skeleton animation="wave" height={100} />
          </View>
        </View>
      ) : (
        <Card containerStyle={styles.container}>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PostDetails", { postId: post?.id })
              }
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    width: "100%",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  <MaterialIcons name="announcement" size={16} color="black" />
                  {"   "}
                  {post?.name}
                </Text>
              </View>
              <Image
                source={{
                  // uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BNGImiFNXoEc3ONE3biDks4T4Y9JkCJCMA&usqp=CAU",
                  uri: post?.imageUrl,
                }}
                style={{ width: "100%", height: 220, marginVertical: 10 }}
              />
              {/* Divider */}
              {/* <View
                style={{
                  borderColor: "#ededed",
                  borderWidth: 1,
                  marginTop: 10,
                  marginBottom: 16,
                }}
              /> */}
              {/* End Divider */}
              <Text style={styles.description}>
                {post?.deskripsi.length > 200
                  ? post?.deskripsi.substring(0, 200) + "..."
                  : post?.deskripsi}
                {post?.deskripsi.length > 200 ? (
                  <Text style={{ fontWeight: "bold" }}> See More</Text>
                ) : (
                  ""
                )}
              </Text>

              <Text
                style={{
                  textAlign: "right",
                }}
              >
                12-12-2023
              </Text>
            </TouchableOpacity>

            <View
              style={{
                marginTop: 12,
                flexDirection: "row",
                borderTopWidth: 1,
                borderColor: "#dddddd",
              }}
            >
              <Button
                title="••••"
                containerStyle={{
                  // height: 40,
                  width: "50%",
                  // marginHorizontal: 50,
                  // marginVertical: 10,

                  marginTop: 8,
                }}
                titleStyle={{
                  color: "grey",
                  fontWeight: "bold",
                  textAlignVertical: "center",
                }}
                buttonStyle={{
                  backgroundColor: "white",
                  borderRadius: 8,
                }}
                onPress={() =>
                  navigation.navigate("PostDetails", { postId: post?.id })
                }
              />
              <Button
                title="Comments"
                containerStyle={{
                  height: 40,
                  width: "50%",
                  // marginHorizontal: 50,
                  // marginVertical: 10,

                  marginTop: 8,
                }}
                titleStyle={{ color: "grey" }}
                buttonStyle={{
                  backgroundColor: "white",
                  borderRadius: 8,
                }}
                onPress={() =>
                  navigation.navigate("PostDetails", { postId: post?.id })
                }
              />
            </View>
          </View>
        </Card>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "white",
    marginTop: 8,

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
