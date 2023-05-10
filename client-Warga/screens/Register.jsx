import React, { FC, ReactElement, useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import { Card, Button, Icon, Avatar } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { getRts, register } from "../stores/action/actionCreator";

export default function Register({ navigation }) {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [ktpNumber, setKtpNumber] = useState();
  const [statusKeluarga, setStatusKeluarga] = useState();
  const [rt, setRt] = useState();

  const { usersLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const { rts } = useSelector((state) => state.rts);

  useEffect(() => {
    dispatch(getRts());
  }, []);

  console.log(rts);

  const handleSubmit = async () => {
    try {
      if (
        !fullName ||
        !email ||
        !password ||
        !phoneNumber ||
        !ktpNumber ||
        !statusKeluarga ||
        !rt
      ) {
        throw "Lengkapi seluruh kolom.";
      }
      await dispatch(
        register({
          fullName,
          email,
          password,
          phoneNumber,
          ktpNumber,
          statusKeluarga,
          rt,
        })
      );
      await navigation.navigate("Login");

      await Alert.alert(
        "",
        `Akun berhasil dibuat, mohon tunggu untuk diverifikasi.`,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    } catch (error) {
      console.log(error);
      Alert.alert("", `${error}`, [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  // console.log({
  //   fullName,
  //   email,
  //   password,
  //   phoneNumber,
  //   ktpNumber,
  //   statusKeluarga,
  //   rt,
  // });

  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
          <Image
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/portfolio-71585.appspot.com/o/RT-NET.png?alt=media&token=453a4ac0-32b0-4cd6-9638-7b0fb5c5c1b3",
            }}
            style={{ width: 150, height: 150 }}
          />
        </View>
        <Card containerStyle={styles.container}>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>
            Create new account
          </Text>

          <View style={{ marginTop: 15 }}>
            <Text>
              Full Name <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={(text) => setFullName(text)}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>
              Email <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>
              Password <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>
              No. Telp <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={(text) =>
                setPhoneNumber(text.replace(/[^0-9]/g, ""))
              }
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>
              No. KTP <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={ktpNumber}
              onChangeText={(text) => setKtpNumber(text.replace(/[^0-9]/g, ""))}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>
              Status Keluarga <Text style={{ color: "red" }}>*</Text>
            </Text>
            <View
              style={{
                marginTop: 5,
                height: 40,
                borderWidth: 1,
                borderRadius: 8,
                borderColor: "#C3C5C5",
                color: "black",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Picker
                style={{ width: "100%" }}
                selectedValue={statusKeluarga}
                onValueChange={(itemValue, itemIndex) =>
                  setStatusKeluarga(itemValue)
                }
              >
                <Picker.Item
                  enabled={false}
                  style={{ color: "grey" }}
                  label="Choose One"
                  value=""
                />
                <Picker.Item label="Kepala Keluarga" value="Kepala Keluarga" />
                <Picker.Item
                  label="Anggota Keluarga"
                  value="Anggota Keluarga"
                />
              </Picker>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>
              RT <Text style={{ color: "red" }}>*</Text>
            </Text>
            <View
              style={{
                marginTop: 5,
                height: rt ? 80 : 40,
                borderWidth: 1,
                borderRadius: 8,
                borderColor: "#C3C5C5",
                color: "black",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Picker
                style={{ width: "100%" }}
                selectedValue={rt}
                onValueChange={(itemValue, itemIndex) => setRt(itemValue)}
                numberOfLines={3}
              >
                <Picker.Item
                  enabled={false}
                  style={{ color: "grey" }}
                  label="Choose One"
                  value=""
                />
                {rts.map((rt, index) => {
                  return (
                    <Picker.Item
                      key={index}
                      label={`RT ${rt?.rt}/${rt?.rw} ${rt?.kelurahan}, ${rt?.kecamatan}, ${rt?.kotaKabupaten}, ${rt?.provinsi}`}
                      value={rt?.id}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
          <Button
            title="Register"
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
            Already have an account?{" "}
            <Text
              style={{ color: "#2596be" }}
              onPress={() => navigation.push("Login")}
            >
              Login here
            </Text>
          </Text>
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
    // marginTop: 300,

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
