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
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { deleteComment } from "../stores/action/actionCreator";

export const UserComment = ({ comment, currentLoggedIn, postId }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      console.log(id);
      Alert.alert("", "Hapus Komentar?", [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
        { text: "OK", onPress: () => dispatch(deleteComment(id, postId)) },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Card.Divider />

      <View style={{ flexDirection: "row", marginBottom: 16 }}>
        <Avatar
          size={128}
          rounded
          source={
            comment?.photoUrl
              ? { uri: comment?.photoUrl }
              : {
                  uri: "https://publichealth.ouhsc.edu/Portals/1055a/Images/no-photo_1.png?ver=2021-06-23-120512-690",
                }
          }
          style={styles.icon}
        />
        <View style={{ marginLeft: 10, flexShrink: 1 }}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              {comment?.User?.namaLengkap}
            </Text>

            {currentLoggedIn?.id === comment?.user_id && (
              <Entypo
                name="dots-three-horizontal"
                size={16}
                color="grey"
                onPress={() => handleDelete(comment?.id)}
              />
            )}
          </View>
          {/* <Text style={{ textAlign: "right", marginBottom: 10 }}>Tanggal</Text> */}
          <Text>{comment?.comment}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});
