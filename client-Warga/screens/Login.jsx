import React, { FC, ReactElement, useState } from "react";
import { StyleSheet, TextInput, Text, View, Alert, Image } from "react-native";
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
      Alert.alert("", `${error}`, [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
    >
      <View
        style={{
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-71585.appspot.com/o/RT-NET.png?alt=media&token=453a4ac0-32b0-4cd6-9638-7b0fb5c5c1b3",
          }}
          style={{ width: 150, height: 150 }}
        />
      </View>
      <Card containerStyle={styles.container}>
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
      </Card>
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
