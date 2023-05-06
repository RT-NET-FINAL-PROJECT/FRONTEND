import React, { FC, ReactElement, useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { Card, Button, Icon, Avatar } from "@rneui/themed";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  return (
    <View
      style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
    >
      <View
        style={{
          marginHorizontal: 16,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: "#C3C5C5",
          padding: 16,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>
          Create new account
        </Text>

        <View style={{ marginTop: 15 }}>
          <Text>Full Name</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text>No. KTP</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <Button
          title="Register"
          containerStyle={{
            height: 40,
            width: "100%",
            // marginHorizontal: 50,
            // marginVertical: 10,
            marginTop: 15,
          }}
          buttonStyle={{
            backgroundColor: "#582d2f",
            borderRadius: 8,
          }}
        />
        <Text style={{ marginTop: 20 }}>
          Already have an account?{" "}
          <Text
            style={{ color: "#2596be" }}
            onPress={() => navigation.push("Login")}
          >
            Login here
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
