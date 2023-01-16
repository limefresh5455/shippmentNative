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
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "./Header";
const CreateShipment = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <Header />
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
            <Icon name="square" size={45} color="#b1aeae" s />
            <View
              style={{
                flex: 1,
                height: 2,
                backgroundColor: "#b1aeae",
                marginTop: 25,
                paddingRight: -20,
              }}
            />
            <Icon name="square" size={45} color="#b1aeae" s />
            <View
              style={{
                flex: 1,
                height: 2,
                backgroundColor: "#b1aeae",
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
                color: "#b1aeae",
              }}
            >
              shipment{"\n"} Info
            </Text>
            <Text
              style={{
                paddingRight: 38,
                color: "#b1aeae",
              }}
            >
              Done
            </Text>
          </View>
          <View style={styles.formTitle}>
            <Text style={styles.formTitleh1}>PackageInfo</Text>
            <Text style={styles.formTitleh2}>Step1-4</Text>
          </View>
          <Text style={styles.label}>Email:*</Text>
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeText}
            //   value={text}
            placeholder="Email Id"
          />
          <Text style={styles.label}>Username:*</Text>
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="UserName"
            keyboardType="Years in Business"
          />
          <Text style={styles.label}>Password:*</Text>
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Password"
            keyboardType="Years in Business"
          />
          <Text style={styles.label}>Confirm Password:*</Text>
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder=" Confirm Password"
            keyboardType="Years in Business"
          />
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("ShipmentInfo")}
          >
            <Text style={styles.btntext}>NEXT</Text>
          </Pressable>
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
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    // marginHorizontal: 90,
    paddingLeft: 20,
    justifyContent: "space-between",
    paddingLeft: -60,
    borderRadius: 10,
  },
  companyLogo: {
    width: 100,
    height: 60,
    resizeMode: "contain",
    // paddingLeft:20
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
    flexWrap: "wrap",
    paddingLeft: 15,
  },
  formTitleh1: {
    fontSize: 25,
    marginBottom: 28,
    color: "#cf9e63",
    fontWeight: "400",
  },
  formTitleh2: {
    fontSize: 25,
    marginBottom: 28,
    color: "#b1aeae",
    fontWeight: "400",
    paddingLeft: 55,
  },
  iconAligen: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
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
  SquareShapeView: {
    marginTop: 20,
    width: 380,
    height: 80,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#FFFFFF",
    backgroundColor: "rgb(255,250,240)",
    // paddingLeft:20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 25,
    paddingRight: 15,
    justifyContent: "space-between",
    paddingLeft: -65,
  },
});

export default CreateShipment;
