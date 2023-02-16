import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
// import { Ticket } from "../assets/img/ticket.png";
import { NavigationContainer } from '@react-navigation/native';

export default function DownloadShipment({ navigation }) {
  return (
    <View style={styles.top}>
      <Image
        style={styles.ticket}
        source={require("../assets/img/ticket.png")}
      />

      <Text
        style={{
          textAlign: "center",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          textAlignVertical: "center",
          alignContent: "center",
          width: 280,
        }}
      >
        Download or Send Label and take the package to the shipping point
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}>DOWNLOAD LABEL</Text>
      </TouchableOpacity>

      {/* <Text
        style={{ marginTop: 20 }}
      >
        Cancel
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  ticket: {
    marginLeft: 38,
    marginRight: 38,
  },
  button: {
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 18,
    // elevation: 3,
    backgroundColor: "#cf9e63",
    marginTop: 28,
    // marginLeft: 6,
    width: 330,
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
    padding: 8,
  },
});
