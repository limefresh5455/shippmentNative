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
  Dimensions,
  ScrollView,
} from "react-native";
import Slideshow from "react-native-image-slider-show";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
// import {  Text, View } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
import { Card } from "react-native-shadow-cards";
import AnimatedInput from "react-native-animated-input";
import Header from "./Header";
// import { Avatar, Button, Card, Text } from 'react-native-paper';

const data = [
  {
    title: "Credit Card",
    url: "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/value-savings/card-faces/simplyclick-card-face.webp",
  },
  {
    title: "Credit Card",
    url: "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/value-savings/card-faces/simplyclick-card-face.webp",
  },
];

const CreateShipment = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === data.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  });

  // const width = Dimensions.get('window').width;

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
                paddingRight: 38,
                color: "#b1aeae",
              }}
            >
              shipment{"\n"} Info
            </Text>
            <Text
              style={{
                paddingRight: 70,
                color: "#b1aeae",
              }}
            >
              Done
            </Text>
          </View>
          <View style={styles.formTitle}>
            <Text style={styles.formTitleh1}>Package info</Text>
          </View>

          <View style={styles.flex}>
            <Card style={styles.cards}>
              <View style={styles.card}>
                <Image
                  source={require("../assets/img/ups.png")}
                  style={styles.img}
                />
                <Text style={styles.text}>USPS</Text>
              </View>
            </Card>

            <Card style={styles.cards}>
              <View style={styles.card}>
                <Image
                  source={require("../assets/img/ups.png")}
                  style={styles.img}
                />
                <Text style={styles.text}>UPS</Text>
              </View>
            </Card>

            <Card style={styles.cards}>
              <View style={styles.card}>
                <Image
                  source={require("../assets/img/ups.png")}
                  style={styles.img}
                />
                <Text style={styles.text}>FedEx</Text>
              </View>
            </Card>
          </View>

          <View>
            <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
              Service Type
            </Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              style={{ marginLeft: 8, borderColor: "black" }}
            >
              <Picker.Item label="Select Service type" value="" />
              <Picker.Item label="FedEx Priority" value="FedEx Priority" />
              <Picker.Item label="FedEx Standard" value="FedEx Standard" />
            </Picker>
            <Text style={styles.inputs}></Text>

            <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
              Packaging
            </Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              style={{ marginLeft: 8, borderColor: "black" }}
            >
              <Picker.Item label="Select Packaging" value="" />
              <Picker.Item label="FedEx Demo" value="FedEx Priority" />
              <Picker.Item label="FedEx Demo" value="FedEx Standard" />
              <Picker.Item label="FedEx Demo" value="FedEx Priority" />
              <Picker.Item label="FedEx Demo" value="FedEx Standard" />
              <Picker.Item label="FedEx Box" value="FedEx Standard" />
            </Picker>
            <Text style={styles.inputs}></Text>

            <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
              Number of Package
            </Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              style={{ marginLeft: 8, borderColor: "black" }}
            >
              <Picker.Item label="Select No. of packages" value="" />
              <Picker.Item label="Single" value="FedEx Priority" />
              <Picker.Item label="Multi" value="FedEx Standard" />
            </Picker>
            <Text style={styles.inputs}></Text>

            <AnimatedInput
              style={styles.input}
              placeholder="Avg. weight"
              keyboardType="Years in Business"
              styleBodyContent={{
                borderBottomWidth: 8,
                borderBottomColor: "#57bdff",
              }}
            />

            <AnimatedInput
              style={styles.input}
              placeholder="Ship date"
              keyboardType="Years in Business"
              styleBodyContent={{
                borderBottomWidth: 8,
                borderBottomColor: "#57bdff",
              }}
            />

            <AnimatedInput
              style={styles.input}
              placeholder="Reference"
              keyboardType="Years in Business"
              styleBodyContent={{
                borderBottomWidth: 8,
                borderBottomColor: "#57bdff",
              }}
            />

            <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
              Address Book
            </Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              style={{ marginLeft: 8, borderColor: "black" }}
            >
              <Picker.Item label="Select No. of packages" value="" />
              <Picker.Item label="Single" value="FedEx Priority" />
              <Picker.Item label="Multi" value="FedEx Standard" />
            </Picker>
            <Text style={styles.inputs}></Text>

            <AnimatedInput
              style={styles.input}
              placeholder="Insured value of package"
              keyboardType="Years in Business"
              styleBodyContent={{
                borderBottomWidth: 8,
                borderBottomColor: "#57bdff",
              }}
            />

            <View style={styles.flex}>
              <Text style={{ fontSize: 20 }}>Amount pay from</Text>
              <Text style={{ fontSize: 17, marginTop: 5, color: "#e3b993" }}>
                Add New
              </Text>
            </View>

            <View style={styles.flex}>
              <View style={styles.slide}>
                <Slideshow
                  position={position}
                  dataSource={data}
                  style={styles.imagess}
                />
              </View>
            </View>
          </View>

          <View style={styles.flex}>
            <Pressable
              style={styles.button}
              // onPress={() => navigation.navigate("ShipmentInfo")}
            >
              <Text style={styles.btntext1}>Cancel</Text>
            </Pressable>

            <Pressable
              style={styles.button1}
              onPress={() => navigation.navigate("ShipmentInfo")}
            >
              <Text style={styles.btntext}>Continue</Text>
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
    backgroundColor: "white",
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
  inputs: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: -48,
    borderStyle: "solid",
    borderBottomColor: "#c7bdbd",
    
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
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginBottom: 20,
    borderStyle: "solid",
    borderBottomColor: "#6B6969",
    marginLeft: 40,
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
    paddingTop: 30,
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
  imagess: {
    justifyContent: "space-between",
  },
  slide: {
    justifyContent: "space-between",
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
