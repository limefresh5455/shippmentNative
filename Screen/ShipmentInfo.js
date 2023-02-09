import {
  Text,
  TextInput,
  Button,
  Linking,
  Pressable,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import Slideshow from "react-native-image-slider-show";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card } from "react-native-shadow-cards";
import Header from "./Header";
import { View, StyleSheet, useWindowDimensions, StatusBar } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SFD from "./SFD";
import STI from "./STI";

const Tab = createMaterialTopTabNavigator();
const screenOptionStyle = {
  tabBarStyle: [
    {
      borderRadius: 99,
      borderBottom: "none",
      marginLeft: 10,
      marginRight: 10,
      shadowOffset: { width: -2, height: 4 },
      shadowColor: "#171717",
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
  ],
};
const CreateShipment = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        {/* <KeyboardAwareScrollView> */}
        <View style={styles.contentView}>
          <Text style={styles.h1}>Create a new</Text>
          <Text style={styles.h1m}>shipment</Text>
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
            <Icon name="circle" size={45} color="#cf9e63" s />

            <View
              style={{
                flex: 1,
                height: 2,
                backgroundColor: "#cf9e63",
                marginTop: 25,
              }}
            />
            <Icon name="circle" size={45} color="#b1aeae" s />
            <View
              style={{
                flex: 1,
                height: 2,
                backgroundColor: "#b1aeae",
                marginTop: 25,
                paddingRight: -20,
              }}
            />
            <Icon name="circle" size={45} color="#b1aeae" s />
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
                paddingRight: 2,
                color: "#b1aeae",
              }}
            >
              shipment{"\n"} Info
            </Text>
            <Text
              style={{
                paddingRight: 80,
                color: "#b1aeae",
              }}
            >
              Done
            </Text>
          </View>
          <View style={styles.formTitle}>
            <Text style={styles.formTitleh1}>Shipment info</Text>
          </View>
        </View>
        {/* </KeyboardAwareScrollView> */}
      </SafeAreaView>

      {/* <NavigationContainer> */}
        <Tab.Navigator screenOptions={screenOptionStyle}>
          <Tab.Screen name="Ship From Details" component={SFD} />
          <Tab.Screen name="Ship To Information" component={STI} />
        </Tab.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
};

// Styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  scene: {
    flex: 1,
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
    // marginHorizontal: 20,
    marginTop: 110,
    padding: 10,
  },
  h1: {
    fontSize: 30,
    marginBottom: 28,
    color: "#b1aeae",
    fontWeight: "400",
  },
  h1m: {
    fontSize: 30,
    marginBottom: 28,
    fontWeight: "400",
    // lineHeight: 1.15
  },
  contentView: {
    paddingTop: 110,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginBottom: 20,
    borderStyle: "solid",
    borderBottomColor: "#6B6969",
    marginLeft: 16,
    marginRight: 20,
  },
  businessForm: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingBottom: 26,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    // elevation: 3,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "#c97e3b",
    marginTop: 28,
    width: 100,
    height: 50,
    textAlign: "center",
  },
  button1: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    backgroundColor: "#cf9e63",
    marginTop: 28,
    width: 100,
    height: 50,
    textAlign: "center",
  },

  btntext1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#cf9e63",
    width: 100,
    height: 50,
    textAlign: "center",
    paddingTop: 15,
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

  flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // marginLeft: 15,
    // marginRight: 15,
    justifyContent: "space-between",
    margin: 20,
  },

  txt: {
    fontSize: 20,
    fontWeight: 300,
  },

  cards: {
    width: 93,
    height: 120,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "HEX",
  },

  card: {
    padding: 10,
  },

  text: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  img: {
    width: 50,
    height: 60,
    justifyContent: "center",
  },

  formTitle: {
    paddingTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 15,
  },
  formTitleh1: {
    fontSize: 30,
    // marginBottom: ,
    // color: "#cf9e63",
    fontWeight: "500",
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
    marginTop: 2,
    paddingLeft: 16,
    paddingRight: 16,
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
    marginLeft: 20,
    // marginRight: 20,
    // paddingLeft: 20,
    // paddingRight: 20,
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
