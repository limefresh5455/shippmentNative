import {
  Text,
} from "react-native";
// import Slideshow from "react-native-image-slider-show";
import React, { useState, useEffect } from "react";
// import { Picker } from "@react-native-picker/picker";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Card } from "react-native-shadow-cards";
// import Header from "./Header";
import { View, StyleSheet, useWindowDimensions, StatusBar } from "react-native";
// import { TabView, SceneMap } from "react-native-tab-view";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { NavigationContainer } from "@react-navigation/native";
import SFD from "./SFD";
import STI from "./STI";
// import Trial from "./Trial";

const Tab = createMaterialTopTabNavigator();
const screenOptionStyle = {
  tabBarStyle: [
    {
      borderRadius: 99,
      backgroundColor: "white",
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
const ShipmentInfo = () => {
  const [minHeight, setMinHeight] = useState(1075);

  return (
    <>
      {/* // <SafeAreaView style={styles.container}> */}
      {/* <ScrollView style={{marginBottom:-600}}> */}
      <View style={styles.businessForm}>
        <View style={styles.formTitle}>
          <Text style={styles.formTitleh1}>Shipment info</Text>
        </View>
      </View>
      {/* </ScrollView> */}
      {/* <ScrollView > */}
      {/* <NavigationContainer> */}
        <Tab.Navigator
          style={{ minHeight: minHeight }}
          screenOptions={screenOptionStyle}
        >
          <Tab.Screen
            name="Ship From Details"
            component={SFD}
            listeners={{
              tabPress: (e) => {
                setMinHeight(1180);
              },
            }}
          />
          <Tab.Screen
            name="Ship To Information"
            component={STI}
            listeners={{
              tabPress: (e) => {
                setMinHeight(1190);
              },
            }}
          />
        </Tab.Navigator>
      {/* </NavigationContainer> */}
      {/* </ScrollView> */}
      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  businessForm: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingBottom: 26,
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
});

export default ShipmentInfo;
