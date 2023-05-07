import { useEffect, useState } from "react";
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

import { Card, ButtonGroup, Icon, Avatar } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentLoggedIn } from "../stores/action/actionCreator";
import ProfileDetailsCard from "../components/ProfileDetailsCard";
import ProfileBerkasCard from "../components/ProfileBerkasCard";

export default function Profile({ navigation }) {
  const { currentLoggedIn } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getCurrentLoggedIn());
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(currentLoggedIn);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
            Your Profile
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
                  fontSize: 16,
                  width: "50%",
                }}
              >
                Profile Picture
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
            <Card.Divider />
            {/* ProfileDetails Component */}
            <ProfileDetailsCard
              currentLoggedIn={currentLoggedIn}
              navigation={navigation}
            />
            {/* END ProfileDetails Component */}
          </Card>
          <ProfileBerkasCard
            currentLoggedIn={currentLoggedIn}
            navigation={navigation}
          />
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
