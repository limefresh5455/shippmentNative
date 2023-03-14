import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Linking 
} from "react-native";
import React, { useState, useEffect } from "react";
// import { Ticket } from "../assets/img/ticket.png";
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import RNFetchBlob from "rn-fetch-blob";

let rateId;
export default function DownloadShipment({ navigation }) {
  const [image, setImage] = useState();


 useEffect(async() => {

   rateId = await AsyncStorage.getItem("rate_id");

   let data = {
     rate: rateId,
     label_file_type: "PDF",
     test: true,
     order: "",
     async: false,
   };


  // set static data
    // let data = {
    //   rate: "363eda578b5341a484f9cd3a458daf71",
    //   label_file_type: "PDF",
    //   test: true,
    //   order: "",
    //   async: false,
    // };

   console.log("rateid",data.rate)

   const token = "shippo_test_385ed1b28f50d525d8b9088ac3cbaed1bc9b8ff2";

   fetch("https://api.goshippo.com/transactions/", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Authorization: `ShippoToken ${token}`,
     },
     body: JSON.stringify(data),
   })
     .then((response) => response.json())
     .then((data) => {
        setImage(data.label_url);
       console.log("data.label_url", data);
     })
     .catch((e) => {
       console.log("errors", e);
     });
 }, []);
 console.log("image path ---------- "+image)




  // Dynamic Download pdf
  const handleDownload = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Linking.openURL(image);
      } else {
        console.log("Permission denied");
      }
    } catch (err) {
      console.log(err);
    }
  };


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

      <TouchableOpacity style={styles.button} onPress={handleDownload}>
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
