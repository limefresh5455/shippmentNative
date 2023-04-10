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
  TouchableOpacity,
  Platform,
  Modal,
} from "react-native";
// import Slideshow from "react-native-image-slider-show";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Card } from "react-native-shadow-cards";
// import AnimatedInput from "react-native-animated-input";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import Carousel from "react-native-snap-carousel";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DatePicker from "react-native-modern-datepicker";
// import moment from "moment";

const Trial = () => {
  //----- DatePicker -----//
  const [show, setShow] = useState(false);
  //----- DatePicker -----//

  const [selectedValue1, setSelectedValue1] = useState();
  // const [packagingDetails, setpackagingDetails] = useState([]);
  const [objectId, setObjectId] = useState([]);
  const [weight, setWeight] = useState("");
  const [mass, setMass] = useState("");
  const [deliveryConfirmation, setDeliveryConfirmation] = useState("");
  const [position, setPosition] = useState(0);
  const [formData, setFormData] = useState({
    packaging: "",
    weight: "",
    mass: "",
    date: "",
    item: "",
    signature: "",
    USdollar: "1.00",
  });

  // AsyncStorage.setItem("objectid", JSON.stringify(objectId));

  //--------- DatePicker -----//
  const handlePress = () => {
    setShow(!show);
  };
  const handleDate = (date) => {
    setFormData({ ...formData, date });
    setShow(false);
  };
  //----- DatePicker -----//

  const handleWeightChange = (weight) => {
    setFormData({ ...formData, weight });
  };

  const handleItemChange = (item) => {
    setFormData({ ...formData, item });
  };

  useEffect(() => {
    AsyncStorage.setItem("user", JSON.stringify(formData));
    // console.log("formdata1", formData);
  }, [formData]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.businessForm}>
          <View style={styles.formTitle}>
            <Text style={styles.formTitleh1}>Package info</Text>
          </View>

          <View>
            <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
              Packaging
            </Text>
            <Picker
              selectedValue={selectedValue1}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedValue1(itemValue, itemIndex);
                setFormData({ ...formData, packaging: itemValue });
              }}
              style={{ marginLeft: 8, borderColor: "black" }}
              value={formData.packaging}
            >
              <Picker.Item label="Select Packaging" value="" />
              <Picker.Item
                label="Customer Packaging, FedEx Express® Services"
                value="YOUR_PACKAGING"
              />
              <Picker.Item
                label="Customer Packaging, FedEx Ground® Economy (Formerly known as FedEx SmartPost®) Services"
                value="YOUR_PACKAGING"
              />
              <Picker.Item label="FedEx® Envelope" value="FEDEX_ENVELOPE" />
              <Picker.Item label="FedEx® Box" value="FEDEX_BOX" />
              <Picker.Item label="FedEx® Small Box" value="FEDEX_SMALL_BOX" />
              <Picker.Item label="FedEx® Medium Box" value="FEDEX_MEDIUM_BOX" />
              <Picker.Item label="FedEx® Large Box" value="FEDEX_LARGE_BOX" />
              <Picker.Item
                label="FedEx® Extra Large Box"
                value="FEDEX_EXTRA_LARGE_BOX"
              />
              <Picker.Item label="FedEx® 10kg Box" value="FEDEX_10KG_BOX" />
              <Picker.Item label="FedEx® 25kg Box" value="FEDEX_25KG_BOX" />
              <Picker.Item label="FedEx® Pak" value="FEDEX_PAK" />
              <Picker.Item label="FedEx® Tube" value="FEDEX_TUBE" />
            </Picker>
            <Text style={styles.inputs}></Text>

            <View
              style={{ display: "flex", flexDirection: "row", marginTop: -10 }}
            >
              <TextInput
                style={styles.input1}
                placeholder="Avg. weight"
                keyboardType="numeric"
                onChangeText={handleWeightChange}
                value={formData.weight}
              />
              <Picker
                selectedValue={mass}
                onValueChange={(itemValue, itemIndex) => {
                  setMass(itemValue);
                  setFormData({ ...formData, mass: itemValue });
                }}
                style={{
                  marginLeft: -160,
                  borderColor: "black",
                  borderTopWidth: 1,
                  marginBottom: 25,
                  marginTop: 23,
                  width: 200,
                }}
                value={formData.mass}
              >
                <Picker.Item label="Select Mass Unit" value="" />
                <Picker.Item label="lb" value="LB" />
                <Picker.Item label="oz" value="OZ" />
                <Picker.Item label="g" value="G" />
                <Picker.Item label="kg" value="KG" />
              </Picker>
            </View>

            <View
              style={{
                marginLeft: 13,
                marginRight: 14,
                marginBottom: 30,
                marginTop: -10,
              }}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    borderColor: "#32302e7a",
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    marginTop: 10,
                    padding: 8,
                    width: 140,
                  }}
                  onPress={handlePress}
                >
                  <Text
                    style={{
                      color: "black",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    DatePicker
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    borderColor: "#32302e7a",
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    marginTop: 10,
                    marginLeft: 25,
                    padding: 8,
                    width: 140,
                  }}
                >
                  {formData.date}
                </Text>
              </View>
              {show && (
                <DatePicker
                  mode="calendar"
                  format="YYYY-MM-DD"
                  onSelectedChange={(date) => handleDate(date)}
                  value={formData.selectedDate}
                  style={{
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 10,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}
                  textStyle={{
                    fontSize: 16,
                    color: "#333333",
                  }}
                  selectedTextStyle={{
                    fontWeight: "bold",
                  }}
                  selectedDayColor="#00BFFF"
                  selectedDayTextColor="#FFFFFF"
                  todayBackgroundColor="#F5F5F5"
                  todayTextStyle={{
                    fontWeight: "bold",
                    color: "#333333",
                  }}
                />
              )}
            </View>

            <Text
              style={{
                marginLeft: 18,
                marginBottom: -10,
                color: "#8d9092",
              }}
            >
              Reference(Will not show on label)
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Item Description"
              keyboardType="Years in Business"
              onChangeText={handleItemChange}
              value={formData.item}
            />

            <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
              Delivery confirmation
            </Text>
            <Picker
              selectedValue={deliveryConfirmation}
              onValueChange={(itemValue, itemIndex) => {
                setDeliveryConfirmation(itemValue);
                setFormData({ ...formData, signature: itemValue });
              }}
              style={{ marginLeft: 8, borderColor: "black" }}
              value={formData.signature}
            >
              <Picker.Item label="Select No. of packages" value="" />
              <Picker.Item label="No signature" value="No signature" />
              <Picker.Item label="Direct signature" value="Direct signature" />
              <Picker.Item label="Adult signature" value="Adult signature" />
            </Picker>
            <Text style={styles.inputs}></Text>
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
    paddingLeft: 20,
    justifyContent: "space-between",
    paddingLeft: -60,
    borderRadius: 10,
    paddingRight: 15,
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
    borderBottomColor: "#c7bdbd",
  },

  companyLogo: {
    width: 100,
    height: 60,
    resizeMode: "contain",
  },

  scrollView: {
    marginTop: -30,
    padding: 10,
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
    marginLeft: 14,
    marginRight: 13,
  },

  input1: {
    height: 40,
    margin: 12,
    padding: 10,
    marginBottom: 20,
    // borderStyle: "#6B6969",
    borderBottomColor: "#6B6969",
    borderWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    marginLeft: 16,
    marginRight: 150,
    marginTop: 28,
    borderColor: "#6B6969",
    width: 135,
    justifyContent: "center",
    textAlign: "center",
  },

  businessForm: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingBottom: 26,
  },

  flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
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
  },

  SquareShapeView: {
    marginTop: 20,
    width: 380,
    height: 80,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#FFFFFF",
    backgroundColor: "rgb(255,250,240)",
  },

  imagess: {
    justifyContent: "space-between",
  },

  slide: {
    justifyContent: "space-between",
  },
});

export default Trial;
