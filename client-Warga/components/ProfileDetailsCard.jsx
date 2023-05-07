import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import { Foundation } from "@expo/vector-icons";

export default function ProfileDetailsCard({ currentLoggedIn, navigation }) {
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
          Details
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
          onPress={() => navigation.navigate("EditProfile")}
        >
          Edit
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          {currentLoggedIn?.namaLengkap}
        </Text>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={{ textAlign: "center" }}>
          {currentLoggedIn?.status_keluarga}
        </Text>
      </View>
      <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Foundation name="telephone" size={24} color="black" />
        <Text style={{ marginLeft: 5 }}>{currentLoggedIn?.nomorTelp}</Text>
      </View>
      <View style={{ marginTop: 60 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}>
          Tempat Lahir
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
          {"  "}
          {currentLoggedIn?.tempat_lahir ? currentLoggedIn?.tempat_lahir : "-"}
        </Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}>
          Tanggal Lahir
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
          {"  "}
          {currentLoggedIn?.tanggal_lahir
            ? currentLoggedIn?.tanggal_lahir
            : "-"}
        </Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}>
          Pekerjaan
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
          {"  "}
          {currentLoggedIn?.pekerjaan ? currentLoggedIn?.pekerjaan : "-"}
        </Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}>
          Jenis Kelamin
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
          {"  "}
          {currentLoggedIn?.jenis_kelamin
            ? currentLoggedIn?.jenis_kelamin
            : "-"}
        </Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}>
          Status Perkawinan
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
          {"  "}
          {currentLoggedIn?.status_perkawinan
            ? currentLoggedIn?.status_perkawinan
            : "-"}
        </Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}>
          Agama
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
          {"  "}
          {currentLoggedIn?.agama ? currentLoggedIn?.agama : "-"}
        </Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}>
          No. Kartu Tanda Penduduk
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
          {"  "}
          {currentLoggedIn?.nomorKtp}
        </Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}>
          No. Kartu Keluarga
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
          {"  "}
          {currentLoggedIn?.nomorKk ? currentLoggedIn?.nomorKk : "-"}
        </Text>
      </View>
    </>
  );
}
