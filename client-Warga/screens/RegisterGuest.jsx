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
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            marginTop: 16,
            marginHorizontal: 16,
          }}
        >
          Register Guest
        </Text>
        <Card containerStyle={styles.container}>
          <View>
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
