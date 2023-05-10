import { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Text, Card, ButtonGroup, Button, Icon, Avatar } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentLoggedIn,
  submitServices,
  submitServicesWithImage,
} from "../stores/action/actionCreator";
import * as ImagePicker from "expo-image-picker";

export default function Services({ navigation, route }) {
  // console.log(route.params.serviceName);
  const [serviceName, setServiceName] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const { currentLoggedIn } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    setServiceName(route?.params?.serviceName);
    dispatch(getCurrentLoggedIn());
  }, [route?.params?.serviceName]);

  // console.log(currentLoggedIn);

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

  const handleSubmit = async () => {
    try {
      if (
        !currentLoggedIn?.namaLengkap ||
        !currentLoggedIn?.nomorTelp ||
        !currentLoggedIn?.nomorKk ||
        !currentLoggedIn?.nomorKtp ||
        !currentLoggedIn?.status_keluarga ||
        !currentLoggedIn?.kkImg ||
        !currentLoggedIn?.ktpImg ||
        !currentLoggedIn?.aktaImg ||
        !currentLoggedIn?.agama ||
        !currentLoggedIn?.jenis_kelamin ||
        !currentLoggedIn?.status_perkawinan ||
        !currentLoggedIn?.pekerjaan ||
        !currentLoggedIn?.tempat_lahir ||
        !currentLoggedIn?.tanggal_lahir
      ) {
        throw "Untuk menggunakan layanan ini anda harus melengkapi data diri dan berkas di Profile anda.";
      }
      if (!keterangan) {
        throw "Anda harus mengisi kolom Keterangan";
      }
      if (serviceName === "Layanan Pengurusan Nikah" && !image) {
        throw "Anda harus melampirkan foto yang dibutuhkan";
      }

      if (serviceName === "Layanan Pengurusan Nikah") {
        await dispatch(
          submitServicesWithImage(
            route?.params?.serviceId,
            keterangan,
            image,
            navigation
          )
        );
      } else {
        await dispatch(
          submitServices(route?.params?.serviceId, keterangan, navigation)
        );
      }

      setIsEditing(false);
      setImage(null);
      navigation.navigate("Menu");
      Alert.alert("", `Permintaan ${serviceName} berhasil dibuat.`, [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } catch (error) {
      console.log(error);
      Alert.alert("", `${error}`, [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setImage(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            marginHorizontal: 16,
            marginTop: 16,
          }}
        >
          Pembuatan {route?.params?.serviceName}
        </Text>
        <Card containerStyle={styles.container}>
          <View>
            <Text>{route?.params?.serviceDescription}</Text>

            <View style={{ marginTop: 15 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Keterangan <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput
                editable
                multiline
                numberOfLines={5}
                maxLength={10000}
                onChangeText={(text) => setKeterangan(text)}
                value={keterangan}
                style={styles.input}
              />
            </View>

            {serviceName === "Layanan Pengurusan Nikah" && (
              <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      flex: 3,
                    }}
                  >
                    Lampirkan Foto <Text style={{ color: "red" }}>*</Text>
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
                      <MaterialIcons name="add" size={24} color="black" />
                    </Text>
                  ) : (
                    // <Text
                    //   style={{
                    //     fontWeight: "bold",
                    //     fontSize: 15,
                    //     textAlign: "right",
                    //     textAlignVertical: "center",
                    //     color: "red",
                    //   }}
                    //   onPress={handleCancel}
                    // >
                    //   Cancel
                    // </Text>
                    <Text></Text>
                  )}
                </View>

                {image ? (
                  <Card.Image
                    style={{ padding: 0, marginVertical: 8 }}
                    source={{
                      uri: image.uri,
                    }}
                  />
                ) : (
                  <View>
                    <Text
                      style={{
                        fontWeight: "normal",
                        fontSize: 15,
                        color: "black",
                      }}
                    >
                      {"  "}
                      Foto belum ditambahkan
                    </Text>
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
                      onPress={handleSave}
                    />
                  </View>
                )}
              </View>
            )}

            {serviceName ? (
              <Button
                title="Kirim"
                containerStyle={{
                  height: 40,
                  width: "100%",
                  textAlign: "start",
                  marginTop: 15,
                }}
                buttonStyle={{
                  backgroundColor: "#582d2f",
                  borderRadius: 8,
                }}
                onPress={() => handleSubmit()}
              />
            ) : (
              <Button
                title="Submit"
                containerStyle={{
                  height: 40,
                  width: "100%",
                  textAlign: "start",
                  marginTop: 15,
                }}
                buttonStyle={{
                  backgroundColor: "#582d2f",
                  borderRadius: 8,
                }}
                loading
              />
            )}
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "white",
    marginBottom: 20,

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
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#C3C5C5",
    padding: 10,
    marginTop: 5,
    color: "black",
    textAlignVertical: "top",
  },
});
