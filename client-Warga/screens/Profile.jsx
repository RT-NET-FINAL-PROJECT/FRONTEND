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
import { Foundation, Feather } from "@expo/vector-icons";

import { Card, ButtonGroup, Icon, Avatar } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentLoggedIn, getFamily } from "../stores/action/actionCreator";
import ProfileDetailsCard from "../components/ProfileDetailsCard";
import ProfileBerkasCard from "../components/ProfileBerkasCard";
import ProfilePictureCard from "../components/ProfilePictureCard";
import ProfileVehicleCard from "../components/ProfileVehicleCard";
import { useIsFocused } from "@react-navigation/native";
import ProfileKtp from "../components/ProfileKtp";
import ProfileKk from "../components/ProfileKk";
import ProfileAkta from "../components/ProfileAkta";
import ProfileFamilyCard from "../components/ProfileFamilyCard";

export default function Profile({ navigation, route }) {
  const { currentLoggedIn, currentLoggedInFamily } = useSelector(
    (state) => state.users
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      try {
        dispatch(getCurrentLoggedIn());
        dispatch(getFamily());
      } catch (error) {
        console.log(error);
      }
    });
    return unsubscribe;
  }, [route, navigation]);
  // console.log(currentLoggedIn);
  console.log(currentLoggedInFamily.length);
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
            Your Profile
          </Text>
          <Card containerStyle={styles.container}>
            <ProfilePictureCard
              currentLoggedIn={currentLoggedIn}
              navigation={navigation}
            />
            <Card.Divider />
            {/* ProfileDetails Component */}
            <ProfileDetailsCard
              currentLoggedIn={currentLoggedIn}
              navigation={navigation}
            />
            <Card.Divider style={{ marginTop: 20 }} />
            {/* END ProfileDetails Component */}
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                width: "50%",
              }}
            >
              Keluarga
            </Text>
            <ProfileFamilyCard
              currentLoggedInFamily={currentLoggedInFamily}
              currentLoggedIn={currentLoggedIn}
            />
          </Card>
          <Card containerStyle={styles.container}>
            <Text style={{ fontWeight: "bold", fontSize: 16, width: "50%" }}>
              Berkas Foto
            </Text>

            <ProfileKtp
              currentLoggedIn={currentLoggedIn}
              navigation={navigation}
            />

            <Card.Divider />

            <ProfileKk
              currentLoggedIn={currentLoggedIn}
              navigation={navigation}
            />

            <Card.Divider />

            <ProfileAkta
              currentLoggedIn={currentLoggedIn}
              navigation={navigation}
            />
          </Card>
          {/* <ProfileKtp
            currentLoggedIn={currentLoggedIn}
            navigation={navigation}
          /> */}
          {/* <ProfileBerkasCard
            currentLoggedIn={currentLoggedIn}
            navigation={navigation}
          /> */}
          <ProfileVehicleCard
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
