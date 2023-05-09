import { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import { Foundation, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Card, ButtonGroup, Icon, Avatar } from "@rneui/themed";
import { baseUrl } from "../config/url";

export default function ProfilePictureCard({ currentLoggedIn, navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      const { uri } = result.assets[0];
      const ext = uri.split(".").pop();
      const name = uri.split("/").pop();
      setImage({
        uri: uri,
        type: `image/${ext}`,
        name,
      });
    }
  };

  console.log(image);

  return (
    <>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            width: "50%",
          }}
        >
          Profile Picture
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            width: "50%",
            textAlign: "right",
            textAlignVertical: "center",
            color: "blue",
          }}
          onPress={pickImage}
        >
          <Feather name="edit" size={20} color="black" />
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", marginVertical: 16 }}>
        <Avatar
          size={128}
          rounded
          source={
            currentLoggedIn?.photoUrl
              ? { uri: currentLoggedIn?.photoUrl }
              : {
                  uri: "https://publichealth.ouhsc.edu/Portals/1055a/Images/no-photo_1.png?ver=2021-06-23-120512-690",
                }
          }
          style={styles.icon}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "white",
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
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 128,
    height: 128,
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
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#C3C5C5",
    padding: 10,
    marginTop: 5,
    color: "black",
  },
});
