import { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Stack,
  TextInput,
  Alert,
} from "react-native";
import { Text, Card, Button, Icon, Avatar, Skeleton } from "@rneui/themed";
import { SimpleLineIcons, Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  commentar,
  getCurrentLoggedIn,
  getPostDetails,
} from "../stores/action/actionCreator";
import { UserComment } from "../components/UserComment";

export default function PostDetails({ route, comments, navigation }) {
  const { postId } = route.params;
  const [postsLoading, setPostsLoading] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);
  const [comment, setComment] = useState();
  const { postDetails: post } = useSelector((state) => state.posts);
  const { currentLoggedIn } = useSelector((state) => state.users);

  console.log(comment);

  const dispatch = useDispatch();

  const fetchPosts = async () => {
    try {
      setPostsLoading(true);
      await dispatch(getCurrentLoggedIn());
      await dispatch(getPostDetails(postId));
    } catch (error) {
      console.log(error);
    } finally {
      setPostsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (postId) => {
    try {
      setCommentLoading(true);

      if (!comment) {
        Alert.alert("", "Masukkan Komentar", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        setCommentLoading(false);
        return;
      }
      await dispatch(commentar(postId, comment));
      await setComment("");
    } catch (error) {
      console.log(error);
    } finally {
      setCommentLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {postsLoading ? (
          <View>
            <View style={{ marginHorizontal: 16, marginTop: 22 }}>
              <Skeleton animation="wave" height={250} />
            </View>
            <View style={{ marginHorizontal: 16, marginTop: 10 }}>
              <Skeleton animation="wave" height={500} />
            </View>
          </View>
        ) : (
          <View style={{ marginBottom: 22 }}>
            <Card containerStyle={styles.container}>
              <View>
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
                <Text style={styles.description}>{post?.deskripsi}</Text>
                <View style={styles.information}>
                  <Text style={{ fontWeight: "bold" }}>
                    {post?.biaya?.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </Text>
                  <Text
                    style={{
                      textAlign: "right",
                    }}
                  >
                    20-12-2001
                  </Text>
                </View>
              </View>
            </Card>
            <Card containerStyle={styles.container}>
              <View style={{ marginBottom: 20 }}>
                <TextInput
                  editable
                  multiline
                  numberOfLines={2}
                  maxLength={10000}
                  onChangeText={(text) => setComment(text)}
                  value={comment}
                  style={styles.input}
                />
                {commentLoading ? (
                  <Button
                    title="Solid"
                    containerStyle={{
                      marginTop: 8,
                      height: 40,
                      width: "100%",
                      borderWidth: 1,
                      borderColor: "#c5c5c4",
                      borderRadius: 8,
                      marginTop: 8,
                    }}
                    buttonStyle={{
                      backgroundColor: "#582d2f",
                      borderRadius: 8,
                    }}
                    type="solid"
                    loading
                  />
                ) : (
                  <Button
                    title="Comment"
                    containerStyle={{
                      height: 40,
                      width: "100%",
                      borderWidth: 1,
                      borderColor: "#582d2f",
                      borderRadius: 8,
                      // marginHorizontal: 50,
                      // marginVertical: 10,

                      marginTop: 8,
                    }}
                    titleStyle={{ color: "white" }}
                    buttonStyle={{
                      backgroundColor: "#582d2f",
                      borderRadius: 8,
                    }}
                    onPress={() => handleSubmit(postId)}
                  />
                )}
              </View>
              {post?.Comments?.map((comment, index) => {
                return (
                  <UserComment
                    comment={comment}
                    currentLoggedIn={currentLoggedIn}
                    postId={postId}
                    key={index}
                  />
                );
              })}
            </Card>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "white",
    marginVertical: 20,

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
  icon: {
    width: 40,
    height: 40,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#C3C5C5",
    padding: 10,
    marginTop: 5,
    color: "black",
    textAlignVertical: "top",
  },
});
