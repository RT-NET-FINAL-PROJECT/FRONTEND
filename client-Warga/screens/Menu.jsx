import { Alert, View, Image, StyleSheet, ScrollView } from "react-native";
import { SimpleLineIcons, Entypo } from "@expo/vector-icons";

import { Text, Card, Button, Icon, Avatar } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices, logout } from "../stores/action/actionCreator";
import { useEffect, useState } from "react";

export default function Menu({ navigation }) {
  const [servicesLoading, setServicesLoading] = useState(false);
  const { services } = useSelector((state) => state.services);

  const dispatch = useDispatch();

  const fetchServices = async () => {
    try {
      setServicesLoading(true);
      await dispatch(getAllServices());
    } catch (error) {
      console.log(error);
    } finally {
      setServicesLoading(false);
    }
  };
  console.log(services);
  useEffect(() => {
    fetchServices();
  }, []);

  const handleLogout = async () => {
    try {
      Alert.alert(
        //title
        "Logout",
        //body
        "Anda yakin ingin logout?",
        [
          { text: "Yes", onPress: () => dispatch(logout(navigation)) },
          {
            text: "No",
            onPress: () => console.log("No Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: true }
        //clicking out side of alert will not cancel
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginHorizontal: 16 }}>
        <Text style={{ fontWeight: "bold", fontSize: 24, marginVertical: 16 }}>
          Menu
        </Text>
      </View>
      <View style={{ marginHorizontal: 16 }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#dddddd",
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
          }}
        >
          <Button
            title="Tamu"
            containerStyle={{
              height: 40,
              width: "100%",
              textAlign: "start",
            }}
            buttonStyle={{
              backgroundColor: "white",
              borderRadius: 8,
              justifyContent: "flex-start",
            }}
            titleStyle={{ color: "black" }}
            onPress={() => {
              navigation.navigate("Guest");
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#dddddd",
            borderRadius: 8,
            backgroundColor: "white",
            marginTop: 16,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Button
            title="Kas"
            containerStyle={{
              height: 40,
              width: "100%",
              textAlign: "start",
            }}
            buttonStyle={{
              backgroundColor: "white",
              borderRadius: 8,
              justifyContent: "flex-start",
            }}
            titleStyle={{ color: "black" }}
          />
        </View>
      </View>
      <Card containerStyle={styles.container}>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                width: "100%",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Layanan
            </Text>
          </View>
          <Button
            title="History"
            titleStyle={{ color: "black" }}
            containerStyle={{
              height: 40,
              width: "100%",
              textAlign: "start",
            }}
            buttonStyle={{
              backgroundColor: "white",
              borderRadius: 8,
              borderColor: "white",
              justifyContent: "flex-start",
            }}
            onPress={() => navigation.navigate("ServicesHistory")}
          />
          {services?.map((service, index) => {
            return (
              <View key={index}>
                <View
                  style={{
                    borderColor: "#ededed",
                    borderWidth: 1,
                    marginHorizontal: 10,
                  }}
                />
                <Button
                  title={service?.name}
                  titleStyle={{ color: "black" }}
                  containerStyle={{
                    height: 40,
                    width: "100%",
                    textAlign: "start",
                  }}
                  buttonStyle={{
                    backgroundColor: "white",
                    borderRadius: 8,
                    borderColor: "white",
                    justifyContent: "flex-start",
                  }}
                  onPress={() =>
                    navigation.navigate("Services", {
                      serviceName: service?.name,
                      serviceDescription: service?.deskripsi,
                    })
                  }
                />
              </View>
            );
          })}
        </View>
      </Card>
      <View style={{ marginHorizontal: 16 }}>
        {/* Divider */}
        <View
          style={{
            borderColor: "#ededed",
            borderWidth: 1,
            marginTop: 50,
            marginBottom: 10,
          }}
        />
        {/* End Divider */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#dddddd",
            borderRadius: 8,
            backgroundColor: "white",
            marginTop: 16,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Button
            title="Logout"
            containerStyle={{
              width: "100%",
              textAlign: "start",
              // marginHorizontal: 50,
            }}
            buttonStyle={{
              backgroundColor: "white",
              borderRadius: 8,
              justifyContent: "flex-start",
            }}
            titleStyle={{ color: "#C30909", marginLeft: 5 }}
            onPress={() => handleLogout()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "white",
    marginTop: 16,
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
  information: {
    flexDirection: "row",
    marginBottom: 6,
    marginTop: 8,
    justifyContent: "space-between",
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  description: {
    flex: 1,
    fontSize: 16,
    color: "black",
    alignItems: "center",
    alignContent: "center",
    textAlignVertical: "center",
    color: "#555555",
  },
});
