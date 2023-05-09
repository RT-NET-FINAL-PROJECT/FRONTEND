import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import { Card, ButtonGroup, Icon, Avatar } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function ProfileBerkasCard({ currentLoggedIn, navigation }) {
  const [ktpImg, setKtpImg] = useState(null);
  const [kkImg, setKkImg] = useState(null);
  const [aktaImg, setAktaImg] = useState(null);

  const pickKtpImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      const ext = uri.split(".").pop();
      const name = uri.split("/").pop();
      setKtpImg({
        uri: uri,
        type: `image/${ext}`,
        name,
      });
    }
  };

  const pickKkImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      const ext = uri.split(".").pop();
      const name = uri.split("/").pop();
      setKkImg({
        uri: uri,
        type: `image/${ext}`,
        name,
      });
    }
  };

  const pickAktaImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      const ext = uri.split(".").pop();
      const name = uri.split("/").pop();
      setAktaImg({
        uri: uri,
        type: `image/${ext}`,
        name,
      });
    }
  };

  return (
    <Card containerStyle={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 16, width: "50%" }}>
        Berkas Foto
      </Text>
      {ktpImg && (
        <Image
          source={{ uri: ktpImg.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}
      {kkImg && (
        <Image
          source={{ uri: kkImg.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}
      {aktaImg && (
        <Image
          source={{ uri: aktaImg.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}

      <View style={{ marginTop: 30 }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "#582d2f",
              flex: 3,
            }}
          >
            Foto Kartu Tanda Penduduk
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              flex: 1,
              textAlign: "right",
              textAlignVertical: "center",
              color: "blue",
            }}
            onPress={pickKtpImage}
          >
            <Feather name="edit" size={20} color="black" />
          </Text>
        </View>
        <Text style={{ fontWeight: "normal", fontSize: 15, color: "black" }}>
          {"  "}
          {currentLoggedIn?.ktpImg ? "" : "Foto belum ditambahkan"}
        </Text>
      </View>

      <View style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "#582d2f",
              flex: 3,
            }}
          >
            Foto Kartu Keluarga
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              flex: 1,
              textAlign: "right",
              textAlignVertical: "center",
              color: "blue",
            }}
            onPress={pickKkImage}
          >
            <Feather name="edit" size={20} color="black" />
          </Text>
        </View>
        <Text style={{ fontWeight: "normal", fontSize: 15, color: "black" }}>
          {"  "}
          {currentLoggedIn?.kkImg ? "" : "Foto belum ditambahkan"}
        </Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "#582d2f",
              flex: 3,
            }}
          >
            Foto Akta
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              flex: 1,
              textAlign: "right",
              textAlignVertical: "center",
              color: "blue",
            }}
            onPress={pickAktaImage}
          >
            <Feather name="edit" size={20} color="black" />
          </Text>
        </View>
        <Text style={{ fontWeight: "normal", fontSize: 15, color: "black" }}>
          {"  "}
          {currentLoggedIn?.aktaImg ? "" : "Foto belum ditambahkan"}
        </Text>
      </View>
    </Card>
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
