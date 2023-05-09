import { useState } from "react";
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

import { Card, ButtonGroup, Button, Icon, Avatar } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { addGuest } from "../stores/action/actionCreator";

export default function EditProfile({ navigation }) {
  const [nama, setNama] = useState();
  const [nomorKtp, setNomorKtp] = useState();
  const [error, setError] = useState([]);

  // console.log(nama, nomorKtp);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      if (!nama || !nomorKtp) {
        throw "Lengkapi seluruh kolom";
      }
      await Alert.alert("", "Tamu berhasil ditambahkan.", [
        { text: "OK", onPress: () => console.log("Tambahkan tamu") },
        { text: "OK", onPress: () => dispatch(addGuest({ nama, nomorKtp })) },
      ]);
      await navigation.navigate("Guest");
    } catch (error) {
      Alert.alert("", "Lengkapi seluruh kolom.", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            marginTop: 16,
            marginHorizontal: 16,
          }}
        >
          Daftarkan Tamu
        </Text>
        <Card containerStyle={styles.container}>
          <View>
            {!error && <Text>{error}</Text>}
            <Text>
              Name <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={nama}
              onChangeText={(text) => setNama(text)}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>
              No. KTP <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={nomorKtp}
              onChangeText={(text) => setNomorKtp(text.replace(/[^0-9]/g, ""))}
            />
          </View>
          <Button
            title="Daftarkan"
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
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#C3C5C5",
    padding: 10,
    marginTop: 5,
    color: "black",
  },
});
