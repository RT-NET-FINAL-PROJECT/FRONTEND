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
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteGuest,
  getCurrentLoggedIn,
} from "../stores/action/actionCreator";

export default function Guest({ navigation }) {
  const [tamuLoading, setTamuLoading] = useState(false);
  const { currentLoggedIn } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const fetchTamu = async () => {
    try {
      setTamuLoading(true);
      await dispatch(getCurrentLoggedIn());
    } catch (error) {
      console.log(error);
    } finally {
      setTamuLoading(false);
    }
  };

  useEffect(() => {
    fetchTamu();
  }, []);

  const handleDelete = async (id, name) => {
    try {
      console.log(id);
      Alert.alert("", `Hapus ${name} dari daftar tamu?`, [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "OK",
          onPress: () => {
            dispatch(deleteGuest(id));
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(currentLoggedIn);

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
          Tamu
        </Text>
        <Card containerStyle={styles.container}>
          <Button
            title="Daftarkan Tamu"
            containerStyle={{
              height: 40,
              width: "100%",
              textAlign: "start",
            }}
            buttonStyle={{
              backgroundColor: "#582d2f",
              borderRadius: 8,
            }}
            onPress={() => navigation.navigate("RegisterGuest")}
          />
          {tamuLoading ? (
            <View></View>
          ) : (
            <View>
              {currentLoggedIn?.Guests?.map((guest, index) => {
                return (
                  <View key={index} style={{ marginTop: 16 }}>
                    <Card.Divider />

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ fontSize: 20 }}>
                        <Text style={{ fontWeight: "bold" }}>
                          {guest?.name}
                        </Text>
                        <Text>{guest?.nomorKtp}</Text>
                      </View>
                      <View style={{ fontSize: 20 }}>
                        <MaterialIcons
                          style={{ textAlign: "right", color: "red" }}
                          name="delete"
                          size={24}
                          color="black"
                          onPress={() => handleDelete(guest?.id, guest?.name)}
                        />
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
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
