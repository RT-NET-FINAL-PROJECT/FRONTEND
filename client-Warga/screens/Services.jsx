import { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";

import { Text, Card, ButtonGroup, Button, Icon, Avatar } from "@rneui/themed";

export default function Services({ navigation, route }) {
  // console.log(route.params.serviceName);
  const [serviceName, setServiceName] = useState("");
  console.log(serviceName);

  useEffect(() => {
    setServiceName(route?.params?.serviceName);
  }, [route?.params?.serviceName]);

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
              Pembuatan {route?.params?.serviceName}
            </Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>Pesan</Text>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: "#C3C5C5",
                marginTop: 5,
              }}
            >
              <TextInput
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                // onChangeText={(text) => onChangeText(text)}
                value={""}
                style={{ padding: 10, textAlignVertical: "top" }}
              />
            </View>
          </View>
          {serviceName ? (
            <Button
              title="Submit"
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
          ) : (
            <Button
              title="Submit"
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
              loading
            />
          )}
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
