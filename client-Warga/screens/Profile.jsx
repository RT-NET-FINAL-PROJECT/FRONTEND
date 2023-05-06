import { useState } from "react";
import { View, Image, StyleSheet, ScrollView, TextInput } from "react-native";

import { Text, Card, ButtonGroup, Icon, Avatar } from "@rneui/themed";
export default function Profile({ navigation }) {
  const [fullName, setFullName] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ marginHorizontal: 16, marginVertical: 16 }}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                width: "50%",
              }}
            >
              Profile
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                width: "50%",
                textAlign: "right",
                textAlignVertical: "center",
                color: "blue",
              }}
              onPress={() => navigation.navigate("EditProfile")}
            >
              Edit Profile
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center", marginVertical: 16 }}>
            <Avatar
              size={128}
              rounded
              source={{
                uri: "https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
              }}
              style={styles.icon}
            />
          </View>
          <View>
            <Text>Full Name</Text>
            <TextInput
              style={styles.input}
              value={"Jamal Kusman"}
              editable={false}
              // selectTextOnFocus={false}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>Status Keluarga</Text>
            <TextInput
              style={styles.input}
              value={"Kepala Keluarga"}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>No. Telp</Text>
            <TextInput
              style={styles.input}
              value={"0123123123"}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text>No. KTP</Text>
            <TextInput
              style={styles.input}
              value={"0392019201239"}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>Foto KTP</Text>
            <TextInput
              style={styles.input}
              value={""}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>No. KK</Text>
            <TextInput
              style={styles.input}
              value={""}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>Foto KK</Text>
            <TextInput
              style={styles.input}
              value={""}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>Foto Akta</Text>
            <TextInput
              style={styles.input}
              value={""}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>Agama</Text>
            <TextInput
              style={styles.input}
              value={""}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>Jenis Kelamin</Text>
            <TextInput
              style={styles.input}
              value={""}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>Status Perkawinan</Text>
            <TextInput
              style={styles.input}
              value={""}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>Pekerjaan</Text>
            <TextInput
              style={styles.input}
              value={""}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>Tempat Lahir</Text>
            <TextInput
              style={styles.input}
              value={""}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>Tanggal Lahir</Text>
            <TextInput
              style={styles.input}
              value={""}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#2596be",
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
