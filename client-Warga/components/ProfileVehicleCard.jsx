import { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

import { Text, Card, ButtonGroup, Button, Icon, Avatar } from "@rneui/themed";
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteGuest,
  deleteVehicle,
  getCurrentLoggedIn,
} from "../stores/action/actionCreator";

export default function ProfileVehicleCard({ navigation, currentLoggedIn }) {
  const [vehicleLoading, setVehicleLoading] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async (id, name, nomorPolisi) => {
    try {
      console.log(id);
      Alert.alert("", `Hapus ${name} dengan nomor polisi ${nomorPolisi}?`, [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "OK",
          onPress: () => {
            dispatch(deleteVehicle(id));
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(currentLoggedIn);

  return (
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
          Data Kendaraan
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
          // onPress={pickImage}
        >
          <MaterialIcons
            name="add"
            size={24}
            color="black"
            onPress={() => navigation.navigate("AddVehicle")}
          />
        </Text>
      </View>
      {vehicleLoading ? (
        <View></View>
      ) : (
        <View style={{ marginTop: 18 }}>
          {currentLoggedIn?.Vehicles?.map((vehicle, index) => {
            return (
              <View key={index} style={{ marginTop: 16 }}>
                {index !== 0 && <Card.Divider />}

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ fontSize: 20 }}>
                    <Text style={{ fontWeight: "bold" }}>{vehicle?.name}</Text>
                    <Text>{vehicle?.nomorPolisi}</Text>
                  </View>
                  <View style={{ fontSize: 20 }}>
                    <MaterialIcons
                      style={{ textAlign: "right", color: "red" }}
                      name="delete"
                      size={24}
                      color="black"
                      onPress={() =>
                        handleDelete(
                          vehicle?.id,
                          vehicle?.name,
                          vehicle?.nomorPolisi
                        )
                      }
                    />
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      )}
    </Card>
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
