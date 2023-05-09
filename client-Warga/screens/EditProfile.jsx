import { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Text, Card, ButtonGroup, Icon, Avatar, Button } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import {
  editProfileDetails,
  getCurrentLoggedIn,
} from "../stores/action/actionCreator";

export default function EditProfile({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  const [namaLengkap, setNamaLengkap] = useState();
  const [statusKeluarga, setStatusKeluarga] = useState();
  const [nomorTelp, setNomorTelp] = useState();
  const [tempatLahir, setTempatLahir] = useState();
  const [tanggalLahir, setTanggalLahir] = useState();
  const [pekerjaan, setPekerjaan] = useState();
  const [jenisKelamin, setJenisKelamin] = useState();
  const [statusPerkawinan, setStatusPerkawinan] = useState();
  const [agama, setAgama] = useState();
  const [noKtp, setNoKtp] = useState();
  const [noKk, setNoKk] = useState();
  const [date, setDate] = useState(new Date());

  const tanggalLahirFormat = new Date(tanggalLahir);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setTanggalLahir(currentDate);
  };

  console.log(tanggalLahir, date);
  const { currentLoggedIn } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      setLoading(true);
      await dispatch(getCurrentLoggedIn());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(currentLoggedIn);

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    setNamaLengkap(currentLoggedIn?.namaLengkap);
    setStatusKeluarga(currentLoggedIn?.status_keluarga);
    setNomorTelp(currentLoggedIn?.nomorTelp);
    setTempatLahir(currentLoggedIn?.tempat_lahir);
    setTanggalLahir(currentLoggedIn?.tanggal_lahir);
    setPekerjaan(currentLoggedIn?.pekerjaan);
    setJenisKelamin(currentLoggedIn?.jenis_kelamin);
    setStatusPerkawinan(currentLoggedIn?.status_perkawinan);
    setAgama(currentLoggedIn?.agama);
    setNoKtp(currentLoggedIn?.nomorKtp);
    setNoKk(currentLoggedIn?.nomorKk);
  }, [currentLoggedIn]);

  const handleSubmit = async () => {
    try {
      await dispatch(
        editProfileDetails({
          namaLengkap,
          status_keluarga: statusKeluarga,
          nomorTelp,
          tempat_lahir: tempatLahir,
          tanggal_lahir: tanggalLahir,
          pekerjaan,
          jenis_kelamin: jenisKelamin,
          status_perkawinan: statusPerkawinan,
          agama,
          nomorKtp: noKtp,
          nomorKk: noKk,
        })
      );
      navigation.navigate("Profile");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`);

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      maximumDate: new Date(),
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ marginVertical: 16 }}>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
              }}
            >
              Edit Your Profile Details
            </Text>
          </View>
          <Card containerStyle={styles.container}>
            <View>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Nama Lengkap
              </Text>
              <TextInput
                style={styles.input}
                value={namaLengkap}
                onChangeText={(text) => setNamaLengkap(text)}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Status Keluarga
              </Text>
              <TextInput
                style={styles.input}
                value={statusKeluarga}
                onChangeText={(text) => setStatusKeluarga(text)}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                No. Telepon
              </Text>
              <TextInput
                style={styles.input}
                value={nomorTelp}
                onChangeText={(text) =>
                  setNomorTelp(text.replace(/[^0-9]/g, ""))
                }
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Tempat Lahir
              </Text>
              <TextInput
                style={styles.input}
                value={tempatLahir}
                onChangeText={(text) => setTempatLahir(text)}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Tanggal Lahir
              </Text>
              <Text style={styles.input} onPress={showDatepicker}>
                {!tanggalLahir
                  ? "Pilih Tanggal"
                  : `${tanggalLahirFormat?.toLocaleString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}`}
              </Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Pekerjaan
              </Text>
              <TextInput
                style={styles.input}
                value={pekerjaan}
                onChangeText={(text) => setPekerjaan(text)}
              />
            </View>

            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Jenis Kelamin
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
                  selectedValue={jenisKelamin}
                  onValueChange={(itemValue, itemIndex) =>
                    setJenisKelamin(itemValue)
                  }
                >
                  <Picker.Item
                    enabled={false}
                    style={{ color: "grey" }}
                    label="Choose One"
                    value=""
                  />
                  <Picker.Item label="Laki-laki" value="Laki-laki" />
                  <Picker.Item label="Perempuan" value="Perempuan" />
                </Picker>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Status Perkawinan
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
                  selectedValue={statusPerkawinan}
                  onValueChange={(itemValue, itemIndex) =>
                    setStatusPerkawinan(itemValue)
                  }
                >
                  <Picker.Item
                    enabled={false}
                    style={{ color: "grey" }}
                    label="Choose One"
                    value=""
                  />
                  <Picker.Item label="Menikah" value="Menikah" />
                  <Picker.Item label="Belum Menikah" value="Belum Menikah" />
                </Picker>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                Agama
              </Text>
              <TextInput
                style={styles.input}
                value={agama}
                onChangeText={(text) => setAgama(text)}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                No. Kartu Tanda Penduduk
              </Text>
              <TextInput
                style={styles.input}
                value={noKtp}
                onChangeText={(text) => setNoKtp(text.replace(/[^0-9]/g, ""))}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#582d2f" }}
              >
                No. Kartu Keluarga
              </Text>
              <TextInput
                style={styles.input}
                value={noKk}
                onChangeText={(text) => setNoKk(text.replace(/[^0-9]/g, ""))}
              />
            </View>
            {loading ? (
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
                type="solid"
                loading
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
                onPress={() => handleSubmit()}
              />
            )}
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
