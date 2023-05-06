import { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";

import { Text, Card, ButtonGroup, Button, Icon, Avatar } from "@rneui/themed";

export default function EditProfile({ navigation }) {
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
              }}
            >
              Register Guest
            </Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>Name</Text>
            <TextInput
              style={styles.input}
              value={""}
              editable={false}
              // selectTextOnFocus={false}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>No. KTP</Text>
            <TextInput
              style={styles.input}
              value={""}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <Button
            title="Register Guest"
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
          />
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
