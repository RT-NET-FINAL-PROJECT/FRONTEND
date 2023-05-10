import { useEffect, useState, useCallback } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Text,
  Linking,
} from "react-native";
import { Foundation, Feather } from "@expo/vector-icons";

import { Card, ButtonGroup, Icon, Avatar, Button } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentLoggedIn } from "../stores/action/actionCreator";

export default function DetailsRt({ navigation, route }) {
  const { currentLoggedIn } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getCurrentLoggedIn());
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const supportedURL = "https://google.com";

  // console.log(currentLoggedIn);
  // const OpenURLButton = ({ url, children }) => {
  //   const handlePress = useCallback(async () => {
  //     // Checking if the link is supported for links with custom URL scheme.
  //     const supported = await Linking.canOpenURL(url);

  //     if (supported) {
  //       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
  //       // by some browser in the mobile
  //       await Linking.openURL(url);
  //     } else {
  //       Alert.alert(`Don't know how to open this URL: ${url}`);
  //     }
  //   }, [url]);

  //   return (
  //     <Button
  //       style={{ backgroundColor: "black" }}
  //       title={children}
  //       onPress={handlePress}
  //     />
  //   );
  // };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ marginVertical: 16 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              width: "50%",
              marginHorizontal: 16,
            }}
          >
            Details RT
          </Text>
          <Card containerStyle={styles.container}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                {`RT ${currentLoggedIn?.Rt?.rt}/${currentLoggedIn?.Rt?.rw} ${currentLoggedIn?.Rt?.kelurahan}, ${currentLoggedIn?.Rt?.kecamatan}, ${currentLoggedIn?.Rt?.kotaKabupaten}, ${currentLoggedIn?.Rt?.provinsi}`}
              </Text>
            </View>

            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Kepala RT
              </Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
              >
                {"  "}
                {currentLoggedIn?.Rt?.kepala_rt}
              </Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#582d2f",
                  marginBottom: 10,
                }}
              ></Text>

              <View style={{ width: "50%" }}>
                <Button
                  title="Grup Whatsapp"
                  containerStyle={{
                    height: 40,
                    width: "100%",
                    textAlign: "start",
                  }}
                  buttonStyle={{
                    backgroundColor: "#582d2f",
                    borderRadius: 8,
                  }}
                  onPress={() =>
                    Linking.openURL(currentLoggedIn?.Rt?.link_grup_wa)
                  }
                />
                {/* <OpenURLButton url={currentLoggedIn?.Rt?.link_grup_wa}>
                  Join Whatsapp
                </OpenURLButton> */}
              </View>
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
