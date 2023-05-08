import { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Stack,
  TextInput,
} from "react-native";
import { Text, Card, Button, Icon, Avatar, Skeleton } from "@rneui/themed";

export const UserComment = ({ comment }) => {
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
          <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
            {comment?.User?.namaLengkap}
          </Text>
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
