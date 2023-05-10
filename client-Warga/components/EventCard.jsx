import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Stack,
} from "react-native";
import { Text, Card, Button, Icon, Avatar, Skeleton } from "@rneui/themed";
import { SimpleLineIcons, Entypo } from "@expo/vector-icons";

export default function EventCard({ post, navigation, postsLoading }) {
  console.log(postsLoading);
  const descriptionText =
    "Event Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis earum ex quaerat sint sapiente ab minus reprehenderit exercitationem nisi labore.";
  const descriptionTextShort =
    "Event Description Lorem ipsum dolor, sit amet consectetur";

  return (
    <>
      {postsLoading ? (
        <View>
          <View style={{ marginHorizontal: 16, marginTop: 10 }}>
            <Skeleton animation="wave" height={200} />
          </View>
          <View style={{ marginHorizontal: 16, marginTop: 10 }}>
            <Skeleton animation="wave" height={200} />
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
                  style={{ width: "100%", fontSize: 16, fontWeight: "bold" }}
                >
                  {post?.name}
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
                {post?.deskripsi.length > 100
                  ? post?.deskripsi.substring(0, 100) + "..."
                  : post?.deskripsi}
                {post?.deskripsi.length > 100 ? (
                  <Text style={{ fontWeight: "bold" }}> See More</Text>
                ) : (
                  ""
                )}
              </Text>
              <View style={styles.information}>
                <Text style={{ fontWeight: "bold" }}>
                  {post?.biaya?.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </Text>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Entypo name="location-pin" size={24} color="black" />
                    <Text>{post?.lokasi}</Text>
                  </View>
                  <Text
                    style={{
                      textAlign: "right",
                    }}
                  >
                    20-12-2001
                  </Text>
                </View>
              </View>
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
    marginTop: 16,
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
