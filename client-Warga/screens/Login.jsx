import React, { FC, ReactElement, useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { Card, Button, Icon, Avatar } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { login } from "../stores/action/actionCreator";

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log(email, password);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      await dispatch(
        login({
          email,
          password,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

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
          Login to your account
        </Text>
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
        <Button
          title="Login"
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
          onPress={() => handleSubmit()}
        />
        <Text style={{ marginTop: 20 }}>
          Don't have an account yet?{" "}
          <Text
            style={{ color: "#2596be" }}
            onPress={() => navigation.push("Register")}
          >
            Register here
          </Text>{" "}
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
