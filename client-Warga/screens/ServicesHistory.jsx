import { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Text,
  Alert,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import { Card, ButtonGroup, Button, Icon, Avatar } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import {
  addGuest,
  getCurrentLoggedIn,
  getSubmission,
} from "../stores/action/actionCreator";

export default function ServicesHistory() {
  const [serviceLoading, setServiceLoading] = useState(false);
  const { submissions } = useSelector((state) => state.submissions);
  const dispatch = useDispatch();

  const fetchTamu = async () => {
    try {
      setServiceLoading(true);
      await dispatch(getSubmission());
    } catch (error) {
      console.log(error);
    } finally {
      setServiceLoading(false);
    }
  };

  useEffect(() => {
    fetchTamu();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            marginTop: 16,
            marginHorizontal: 16,
          }}
        >
          History
        </Text>
        <Card containerStyle={styles.container}>
          {submissions.length === 0 ? (
            <View>
              <Text>Kosong</Text>
            </View>
          ) : (
            <View>
              {submissions?.map((submission, index) => {
                return (
                  <View key={index}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <View style={{ fontSize: 20 }}>
                        <Text style={{ fontWeight: "bold" }}>
                          {submission?.keterangan}
                        </Text>
                        <Text>{submission?.keperluan}</Text>
                      </View>
                      <View style={{ fontSize: 20 }}>
                        <Text>
                          {submission?.status?.charAt(0).toUpperCase() +
                            submission?.status?.slice(1)}
                        </Text>
                        {/* <MaterialIcons
                          style={{ textAlign: "right", color: "red" }}
                          name="delete"
                          size={24}
                          color="black"
                          // onPress={() => handleDelete(guest?.id, guest?.name)}
                        /> */}
                      </View>
                    </View>
                    <Card.Divider />
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
