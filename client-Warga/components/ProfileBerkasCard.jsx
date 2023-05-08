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

export default function ProfileBerkasCard({ currentLoggedIn, navigation }) {
  return (
    <Card containerStyle={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 16, width: "50%" }}>
        Berkas Foto
      </Text>

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
            onPress={() => navigation.navigate("EditProfile")}
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
            onPress={() => navigation.navigate("EditProfile")}
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
            onPress={() => navigation.navigate("EditProfile")}
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
