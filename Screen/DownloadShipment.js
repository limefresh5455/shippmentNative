import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Linking,
} from "react-native";
import React, { useState, useEffect } from "react";
// import { Ticket } from "../assets/img/ticket.png";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import RNFetchBlob from "rn-fetch-blob";

let rateId;
export default function DownloadShipment({ navigation }) {
 //  const [image, setImage] = useState();

 
  const GetData = async () => {
    rateId = await AsyncStorage.getItem("rate_id");
  };
  GetData();

  // useEffect(() => {
  //   let data = {
  //     rate: rateId,
  //     label_file_type: "PDF",
  //     test: true,
  //     order: "",
  //     async: false,
  //   };
  //   const token = "shippo_test_385ed1b28f50d525d8b9088ac3cbaed1bc9b8ff2";
  //   console.log("get rate id - " + JSON.stringify(rateId));

  //   fetch("https://api.goshippo.com/transactions/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `ShippoToken ${token}`,
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setImage(data.label_url);
  //       console.log("data.label_url", data);
  //     })
  //     .catch((e) => {
  //       console.log("errors", e);
  //     });
  // }, []);
 // console.log("image path ---------- " + image);

  // const fileUrl =
  //   "https://www.techup.co.in/wp-content/uploads/2020/01/techup_logo_72-scaled.jpg";

  // const downloadFile = () => {
  //   // Get today's date to add the time suffix in filename
  //   let date = new Date();
  //   // File URL which we want to download
  //   let FILE_URL = fileUrl;
  //   // Function to get extention of the file url
  //   let file_ext = getFileExtention(FILE_URL);

  //   file_ext = "." + file_ext[0];

  //   // const RNFetchBlob = require("rn-fetch-blob");
  //   // // config: To get response by passing the downloading related options
  //   // // fs: Root directory path to download
  //   // const { config, fs } = RNFetchBlob;
  //   // let RootDir = fs.dirs.PictureDir;
  //   // let options = {
  //   //   fileCache: true,
  //   //   addAndroidDownloads: {
  //   //     path:
  //   //       RootDir +
  //   //       "/file_" +
  //   //       file_ext,
  //   //     description: "downloading file...",
  //   //     notification: true,
  //   //     // useDownloadManager works with Android only
  //   //     useDownloadManager: true,
  //   //   },
  //   // };
  //   // config(options)

  //   RNFetchBlob.config({
  //     fileCache: true,
  //     addAndroidDownloads: {
  //       useDownloadManager: true,
  //       notification: true,
  //       path: RNFetchBlob.fs.dirs.DownloadDir + "/file_",
  //       description: "Downloading PDF file...",
  //     },
  //   })
  //     .fetch("GET", FILE_URL)
  //     .then((res) => {
  //       // Alert after successful downloading
  //       console.log("res -> ", JSON.stringify(res));
  //       alert("File Downloaded Successfully.");
  //     });
  // };

  // const getFileExtention = (fileUrl) => {
  //   // To get the file extension
  //   return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  // };

  //----------- Static Download pdf ------------//
  const handleDownload = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Linking.openURL(
          "https://deliver.goshippo.com/73f761091b1a49b68cb11bdb53bbe799.pdf?Expires=1709732535&Signature=BPrTUOPsKUrjVymIcUHBfhH~cHYHMWcYAWe4zE6UI0MGE4tcCQeUILvV6wgLAwPFERmvDs0AyWF-xZCnitnSaoKMSAeF1CQokPW0za4vXWsgyiC9Da8o2pazPXpq8ai2n0EhWMKcf8REiKRbGfNmFWDa9H3hVsx4HeU98m5AzYSG~HNMGC5FovFbbdTw0z643uhKJavwjMrzjnz5N~NLrZVqCtTqwpnFhICAO4b773a4GiX950zpguksNbnIbpu6c3v9yuAKxPO5t62bxPTJFN0qX8EjPriGuaml1wadtkN9AQ6G8ilVMTsVbDxkMtpWY4XzE0zOCXX3p6Im-v0Kfw__&Key-Pair-Id=APKAJRICFXQ2S4YUQRSQ"
        );
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
