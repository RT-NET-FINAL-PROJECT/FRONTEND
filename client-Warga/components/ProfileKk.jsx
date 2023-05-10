import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Text,
  Alert,
} from "react-native";
import { Card, ButtonGroup, Icon, Avatar, Button } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { uploadProfileKk } from "../stores/action/actionCreator";

export default function ProfileKk({ currentLoggedIn, navigation }) {
  const [image, setImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    setIsEditing(true);

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

  const dispatch = useDispatch();

  const uploadImage = async () => {
    const data = new FormData();
    data.append("photoUrl", image);

    try {
      await dispatch(uploadProfileKk(image, navigation));

      setIsEditing(false);
      await Alert.alert("", `Upload foto Kartu Keluarga success.`, [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setImage(null);
  };
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            color: "#582d2f",
            flex: 3,
          }}
        >
          Foto Kartu Keluarga
        </Text>
        {!isEditing ? (
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              textAlign: "right",
              textAlignVertical: "center",
              color: "blue",
            }}
            onPress={handleEdit}
            // onPress={pickImage}
          >
            <Feather name="edit" size={20} color="black" />
          </Text>
        ) : (
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              textAlign: "right",
              textAlignVertical: "center",
              color: "red",
            }}
            onPress={handleCancel}
          >
            Cancel
          </Text>
        )}
      </View>

      {image ? (
        <Card.Image
          style={{ padding: 0, marginVertical: 16 }}
          source={{
            uri: image.uri,
          }}
        />
      ) : (
        <View>
          {currentLoggedIn?.kkImg ? (
            <Card.Image
              style={{ padding: 0, marginVertical: 16 }}
              source={{
                uri: currentLoggedIn?.kkImg,
              }}
            />
          ) : (
            <Text
              style={{ fontWeight: "normal", fontSize: 15, color: "black" }}
            >
              Foto belum ditambahkan
            </Text>
          )}
        </View>
      )}

      {isEditing && (
        <View style={{ flex: 1, alignItems: "center" }}>
          <Button
            title="Pilih Gambar"
            containerStyle={{
              marginHorizontal: "auto",
              height: 35,
              textAlign: "start",
              marginTop: 15,
            }}
            titleStyle={{ fontSize: 12 }}
            buttonStyle={{
              backgroundColor: "#582d2f",
              borderRadius: 8,
            }}
            onPress={pickImage}
          />
          <Button
            title="Save"
            containerStyle={{
              marginHorizontal: "auto",
              height: 35,
              // width: "80%",
              textAlign: "start",
              marginTop: 15,
            }}
            titleStyle={{ color: "blue" }}
            buttonStyle={{
              backgroundColor: "white",
              borderRadius: 8,
            }}
            onPress={uploadImage}
          />
        </View>
      )}
    </View>
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
});
