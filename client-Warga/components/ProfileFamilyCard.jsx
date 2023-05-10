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

export default function ProfileFamilyCard({
  currentLoggedInFamily,
  currentLoggedIn,
}) {
  return (
    <View>
      {!currentLoggedInFamily ? (
        <Text>-</Text>
      ) : (
        <View>
          {currentLoggedInFamily?.map((family, index) => {
            return (
              <View key={index} style={{ marginTop: 16 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ fontSize: 20 }}>
                    <Text style={{ fontWeight: "bold", color: "#582d2f" }}>
                      {family?.namaLengkap}
                    </Text>
                    <Text>{family?.status_keluarga}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}
