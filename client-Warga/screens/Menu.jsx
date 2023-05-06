import { View, Image, StyleSheet, ScrollView } from "react-native";
import { SimpleLineIcons, Entypo } from "@expo/vector-icons";

import { Text, Card, Button, Icon, Avatar } from "@rneui/themed";

export default function Menu({ post }) {
  const descriptionText =
    "Event Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis earum ex quaerat sint sapiente ab minus reprehenderit exercitationem nisi labore.";
  const descriptionTextShort =
    "Event Description Lorem ipsum dolor, sit amet consectetur";

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginHorizontal: 16 }}>
        <Text style={{ fontWeight: "bold", fontSize: 24, marginVertical: 16 }}>
          Menu
        </Text>
      </View>
      <View style={{ marginHorizontal: 16 }}>
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
            justifyContent: "flex-start",
          }}
        />
        <Button
          title="Kas"
          containerStyle={{
            height: 40,
            width: "100%",
            textAlign: "start",
            marginTop: 10,
          }}
          buttonStyle={{
            backgroundColor: "#582d2f",
            borderRadius: 8,
            justifyContent: "flex-start",
          }}
        />
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
            title="Pembuatan Surat Pengantar"
            containerStyle={{
              height: 40,
              width: "100%",
              textAlign: "start",
            }}
            buttonStyle={{
              backgroundColor: "#582d2f",
              borderRadius: 8,
              justifyContent: "flex-start",
            }}
          />
          <Button
            title="Pembuatan Surat Domisili"
            containerStyle={{
              height: 40,
              width: "100%",
              textAlign: "start",
              // marginHorizontal: 50,
              marginTop: 10,
            }}
            buttonStyle={{
              backgroundColor: "#582d2f",
              borderRadius: 8,
              justifyContent: "flex-start",
            }}
          />
          <Button
            title="Pembuatan Surat Nikah"
            containerStyle={{
              height: 40,
              width: "100%",
              textAlign: "start",
              // marginHorizontal: 50,
              marginTop: 10,
            }}
            buttonStyle={{
              backgroundColor: "#582d2f",
              borderRadius: 8,
              justifyContent: "flex-start",
            }}
          />
        </View>
      </Card>
      {/* Divider */}
      <View style={{ marginHorizontal: 16 }}>
        <View
          style={{
            borderColor: "#ededed",
            borderWidth: 1,
            marginTop: 50,
            marginBottom: 10,
          }}
        />
        {/* End Divider */}
        <Button
          title="Logout"
          containerStyle={{
            height: 40,
            width: "100%",
            textAlign: "start",
            // marginHorizontal: 50,
            marginTop: 10,
          }}
          buttonStyle={{
            backgroundColor: "#C30909",
            borderRadius: 8,
            justifyContent: "flex-start",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "white",
    marginTop: 16,
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
