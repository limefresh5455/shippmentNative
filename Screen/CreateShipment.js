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
} from "react-native";
import Slideshow from "react-native-image-slider-show";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card } from "react-native-shadow-cards";
import AnimatedInput from "react-native-animated-input";
import DatePicker from "react-native-datepicker";
import { Formik } from "formik";
import * as Yup from "yup";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";

const data = [
  {
    imgUrl:
      "https://www.axisbank.com/images/default-source/default-album/ace-credit-card.jpg",
  },
  {
    imgUrl:
      "https://1.bp.blogspot.com/-vbR02D5OHjs/XTxr17QOLaI/AAAAAAAAARE/11BvbYw9ZI84U-Jwjs2Z29Z3aWLwgNp7wCLcBGAs/s1600/Axis%2BBank%2BRewards%2BPlus.jpg",
  },
];

const CreateShipment = () => {



  const [deliveryConfirmation, setDeliveryConfirmation] = useState("");
  const [position, setPosition] = useState(0);
  const [serviceDetails, setserviceDetails] = useState([]);
  const [selectedValue, setSelectedValue] = useState();
  const [packagingDetails, setpackagingDetails] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState();
  const [weight, setWeight] = useState("");
  const [mass, setMass] = useState("");

  const handlePress = (value) => {
    // console.log(value)
    fetch(
      "https://api.goshippo.com/carrier_accounts/?carrier=" +
        value +
        "&service_levels=1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "ShippoToken shippo_test_385ed1b28f50d525d8b9088ac3cbaed1bc9b8ff2",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setserviceDetails(data.results[0].service_levels);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch("https://api.goshippo.com/parcel-templates?carrier=" + value, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "ShippoToken shippo_test_385ed1b28f50d525d8b9088ac3cbaed1bc9b8ff2",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data.results);
        setpackagingDetails(data.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const serviceList = () => {
    // console.log(serviceDetails)
    return serviceDetails.map((service) => {
      return <Picker.Item label={service.name} value={service.name} />;
    });
  };

  const packageList = () => {
    // console.log("asddjfdjfd")
    return packagingDetails.map((service) => {
      return <Picker.Item label={service.name} value={service.name} />;
    });
  };

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === data.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  });

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const isCarousel = React.useRef(null);

  return (
    <Formik
      initialValues={{
        service: selectedValue,
        packaging: selectedValue1,
        weight: "",
        mass: mass,
        item: "",
        signature: deliveryConfirmation,
        USdollar: "",
      }}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        handleSubmit,
      }) => (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.businessForm}>
              <View style={styles.formTitle}>
                <Text style={styles.formTitleh1}>Package info</Text>
              </View>

              <View style={styles.flex}>
                <TouchableOpacity
                  onPress={() => handlePress("usps")}
                  style={{
                    borderBottomWidth: 1,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRadius: 9,
                  }}
                >
                  <Card style={styles.cards}>
                    <View style={styles.card}>
                      <Image
                        source={require("../assets/img/ups.png")}
                        style={styles.img}
                      />
                      <Text style={styles.text}>USPS</Text>
                    </View>
                  </Card>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handlePress("ups")}
                  style={{
                    borderColor: "black",
                    borderBottomWidth: 1,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRadius: 9,
                  }}
                >
                  <Card style={styles.cards}>
                    <View style={styles.card}>
                      <Image
                        source={require("../assets/img/ups.png")}
                        style={styles.img}
                      />
                      <Text style={styles.text}>UPS</Text>
                    </View>
                  </Card>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handlePress("fedex")}
                  style={{
                    borderColor: "black",
                    borderBottomWidth: 1,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRadius: 9,
                  }}
                >
                  <Card style={styles.cards}>
                    <View style={styles.card}>
                      <Image
                        source={require("../assets/img/ups.png")}
                        style={styles.img}
                      />
                      <Text style={styles.text}>FedEx</Text>
                    </View>
                  </Card>
                </TouchableOpacity>
              </View>

              <View>
                <Text
                  style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}
                >
                  Service Type
                </Text>
                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue);
                    console.log("serviceValue", itemValue);
                  }}
                  style={{ marginLeft: 8, borderColor: "black" }}
                  value={values.service}
                >
                  <Picker.Item label="Select Service type" value="" />
                  {serviceList()}
                </Picker>
                <Text style={styles.inputs}></Text>

                <Text
                  style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}
                >
                  Packaging
                </Text>
                <Picker
                  selectedValue={selectedValue1}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue1(itemValue)
                  }
                  style={{ marginLeft: 8, borderColor: "black" }}
                  onChangeText={handleChange("packaging")}
                  value={values.packaging}
                >
                  <Picker.Item label="Select Packaging" value="" />
                  {packageList()}
                </Picker>
                <Text style={styles.inputs}></Text>

                {/* <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
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
            <Text style={styles.inputs}></Text> */}

                <TextInput
                  style={styles.input1}
                  placeholder="Avg. weight"
                  keyboardType="numeric"
                  onChangeText={handleChange("weight")}
                  value={values.weight}
                />
                <Picker
                  selectedValue={mass}
                  onValueChange={(itemValue, itemIndex) => setMass(itemValue)}
                  style={{
                    marginLeft: 8,
                    borderColor: "black",
                    marginBottom: 25,
                    marginTop: -25,
                  }}
                  onChangeText={handleChange("mass")}
                  value={values.mass}
                >
                  <Picker.Item label="Select Mass Unit" value="" />
                  <Picker.Item label="lb" value="lb" />
                  <Picker.Item label="oz" value="oz" />
                  <Picker.Item label="g" value="g" />
                  <Picker.Item label="kg" value="kg" />
                </Picker>

                {/* <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              textStyle={{ color: "green" }}
              style={{
                marginLeft: 16,
                borderBottomColor: "#c7bdbd",
                borderWidth: 1,
                borderStyle: "solid",
              }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              // onDateChange={(date) => setDate(date)}
              disabled={false}
            /> */}

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
                  onChangeText={handleChange("item")}
                  value={values.item}
                />

                <Text
                  style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}
                >
                  Delivery confirmation
                </Text>
                <Picker
                  selectedValue={deliveryConfirmation}
                  onValueChange={(itemValue, itemIndex) =>
                    setDeliveryConfirmation(itemValue)
                  }
                  style={{ marginLeft: 8, borderColor: "black" }}
                  onChangeText={handleChange("signature")}
                  value={values.signature}
                >
                  <Picker.Item label="Select No. of packages" value="" />
                  <Picker.Item
                    label="Signature required"
                    value="Signature required"
                  />
                  <Picker.Item label="Demo" value="Demo" />
                </Picker>
                <Text style={styles.inputs}></Text>

                <Text
                  style={{
                    marginTop: 20,
                    marginLeft: 18,
                    marginBottom: -10,
                    color: "#8d9092",
                  }}
                >
                  Insured value of package
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="$ 1.00"
                  keyboardType="numeric"
                  onChangeText={handleChange("USdollar")}
                  value={values.USdollar}
                />

                <View style={styles.flex}>
                  <Text style={{ fontSize: 20 }}>Amount pay from</Text>
                  <Text
                    style={{ fontSize: 17, marginTop: 5, color: "#e3b993" }}
                  >
                    Add New
                  </Text>
                </View>

                <View style={styles.slide}>
                  <Carousel
                    layout="default"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={data}
                    renderItem={CarouselCardItem}
                    sliderWidth={340}
                    itemWidth={330}
                    inactiveSlideShift={0}
                    useScrollView={true}
                    style={{ position: "absolute" }}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity style={{marginLeft:17, marginTop:-20}} onPress={handleSubmit}>
              <Text style={{fontSize:20}}>SIGN IN</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
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
    borderStyle: "solid",
    borderBottomColor: "#6B6969",
    borderWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    marginLeft: 14,
    marginRight: 13,
    marginTop: 28,
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

export default CreateShipment;
