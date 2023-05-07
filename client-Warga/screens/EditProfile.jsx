import { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";

import { Text, Card, ButtonGroup, Icon, Avatar } from "@rneui/themed";
export default function EditProfile({ navigation }) {
  const [fullName, setFullName] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ marginVertical: 16 }}>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
              }}
            >
              Edit Your Profile Details
            </Text>
          </View>
          <Card containerStyle={styles.container}>
            <View>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Nama Lengkap
              </Text>
              <TextInput
                style={styles.input}
                value={"Jamal Kusman"}
                editable={false}
                // selectTextOnFocus={false}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Status Keluarga
              </Text>
              <TextInput
                style={styles.input}
                value={"Kepala Keluarga"}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                No. Telp
              </Text>
              <TextInput
                style={styles.input}
                value={"0123123123"}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Tempat Lahir
              </Text>
              <TextInput
                style={styles.input}
                value={""}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Tanggal Lahir
              </Text>
              <TextInput
                style={styles.input}
                value={""}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Pekerjaan
              </Text>
              <TextInput
                style={styles.input}
                value={""}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>

            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Jenis Kelamin
              </Text>
              <TextInput
                style={styles.input}
                value={""}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Status Perkawinan
              </Text>
              <TextInput
                style={styles.input}
                value={""}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Agama
              </Text>
              <TextInput
                style={styles.input}
                value={""}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                No. Kartu Tanda Penduduk
              </Text>
              <TextInput
                style={styles.input}
                value={"0392019201239"}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                No. Kartu Keluarga
              </Text>
              <TextInput
                style={styles.input}
                value={""}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
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
