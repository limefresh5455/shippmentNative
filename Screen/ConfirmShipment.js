import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "./Header";
import * as ImagePicker from "react-native-image-picker";
import DocumentPicker from "react-native-document-picker";

const ConfirmShipment = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [file, setFile] = useState(null);
  handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, (respone) => {
      console.log("resposne", response);
    });
  };

  const selectFile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFile(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        throw err;
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentView}>
          <Text style={styles.h1}>Create a new</Text>
          <Text style={styles.h1m}> shipment</Text>
        </View>
        <View style={styles.businessForm}>
          <View style={styles.iconAligen}>
            <View
              style={{
                flex: 1,
                width: 5,
                height: 2,
                backgroundColor: "#cf9e63",
                marginTop: 25,
                marginRight: -30,
                marginLeft: 5,
              }}
            />
            <Icon name="square" size={45} color="#cf9e63" s />

            <View
              style={{
                flex: 1,
                height: 2,
                backgroundColor: "#cf9e63",
                marginTop: 25,
              }}
            />
            <Icon name="square" size={45} color="#cf9e63" s />
            <View
              style={{
                flex: 1,
                height: 2,
                backgroundColor: "#cf9e63",
                marginTop: 25,
                paddingRight: -20,
              }}
            />
            <Icon name="square" size={45} color="#cf9e63" s />
            <View
              style={{
                flex: 1,
                height: 2,
                backgroundColor: "#cf9e63",
                marginTop: 25,
                marginRight: 20,
              }}
            />
          </View>
          <View style={styles.labelHead}>
            <Text
              style={{
                // marginTop: 5,
                color: "#cf9e63",
              }}
            >
              Package & {"\n"}Payments {"\n"} Info
            </Text>
            <Text
              style={{
                paddingRight: 38,
                color: "#cf9e63",
              }}
            >
              shipment{"\n"} Info
            </Text>
            <Text
              style={{
                paddingRight: 62,
                color: "#cf9e63",
              }}
            >
              Done
            </Text>
          </View>
          <View style={styles.formTitle}>
            <Text style={styles.formTitleh1}>Image Upload:</Text>
            <Text style={styles.formTitleh2}>Step 3-4</Text>
          </View>
          <Text style={styles.label}>Upload Your Photo:*</Text>
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeText}
            //   value={text}
            placeholder="Email Id"
          />
          <Text style={styles.label}>Upload Your Signature Photo:*</Text>
         
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="UserName"
            keyboardType="Years in Business"
          />
          <View style={styles.btn}>
            <Pressable
              style={styles.prevbutton}
              onPress={() => navigation.navigate("ShipmentInfo")}
            >
              <Text style={styles.btntext}>Previous</Text>
              
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Submit")}
            >
              <Text style={styles.btntext}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1e6",
  },
  scrollView: {
    marginHorizontal: 20,
    marginTop: 110,
  },
  h1: {
    fontSize: 25,
    marginBottom: 28,
    color: "#b1aeae",
    fontWeight: "300",
  },
  h1m: {
    fontSize: 25,
    marginBottom: 28,
    fontWeight: "300",
    // lineHeight: 1.15
  },
  contentView: {
    paddingTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderStyle: "solid",
    borderBottomColor: "#6B6969",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 110,
  },

  businessForm: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingBottom: 26,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    backgroundColor: "#cf9e63",
    marginTop: 28,
    width: 100,
    height: 50,
    textAlign: "center",
    marginLeft: 200,
  },
  prevbutton: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    backgroundColor: "#b1aeae",
    marginTop: 28,
    width: 100,
    height: 50,
    textAlign: "center",
    marginLeft: 200,
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    width: 100,
    height: 50,
    textAlign: "center",
    paddingTop: 15,
  },
  formTitle: {
    paddingTop: 30,
    flexDirection: "row",
    paddingLeft: 5,
  },
  formTitleh1: {
    fontSize: 23,
    marginBottom: 28,
    color: "#cf9e63",
    fontWeight: "400",
  },
  formTitleh2: {
    fontSize: 23,
    marginBottom: 28,
    color: "#b1aeae",
    fontWeight: "400",
    paddingLeft: 50,
  },
  iconAligen: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
    paddingRight:5
  },
  label: {
    paddingLeft: 10,
    color: "gray",
    textAlign: "left",
  },
  labelHead: {
    flexDirection: "row",
    justifyContent: "space-around",
    // marginBottom:10
  },
});

export default ConfirmShipment;
