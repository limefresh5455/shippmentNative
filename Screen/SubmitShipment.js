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
const SubmitShipment = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
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
                paddingRight: 38,
                color: "#cf9e63",
              }}
            >
              Done
            </Text>
          </View>
          <View style={styles.formTitle}>
          <Text style={styles.formTitleh1}>Finish:</Text>
          <Text style={styles.formTitleh2}>Step4-4</Text>
        </View>
          <View  >
            <Text style={styles.successHead} >SUCCESS!</Text>
          </View>
          <View style={styles.checkSign}> 
          <Image
          style={styles.companyLogo}
          source={{
            uri: "https://i.imgur.com/GwStPmg.png",
          }}
        />
          </View>
          <View  >
          <Text style={styles.successMsg}>You Have{"\n"} Successfully{"\n"} Signed Up</Text>
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
    marginTop:110
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
    paddingLeft: 118,

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
  successHead:{
    fontSize: 25,
    marginBottom: 28,
    color: "#cf9e63",
    fontWeight: "400",
    textAlign: "center",
  },
  successMsg:{
    fontSize: 22,
    marginBottom: 28,
    color: "#cf9e63",
    fontWeight: "400",
    textAlign: "center",
  },
  checkSign:{
    alignItems:'center',
    marginBottom:20
  },
  SquareShapeView: {
    marginTop:20,
    width:380,
    height: 80,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'white',
    backgroundColor:'white'
    // paddingLeft:20,
  },
});

export default SubmitShipment;
