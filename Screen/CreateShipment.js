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
import { Card } from "react-native-shadow-cards";
import AnimatedInput from "react-native-animated-input";
// import Header from "./Header";
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
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === data.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  });

  const isCarousel = React.useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.businessForm}>
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

            <TextInput
              style={styles.input}
              placeholder="Avg. weight"
              keyboardType="Years in Business"
            />

            <TextInput
              style={styles.input}
              placeholder="Ship date"
              keyboardType="Years in Business"
            />

            <TextInput
              style={styles.input}
              placeholder="Reference"
              keyboardType="Years in Business"
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

            <TextInput
              style={styles.input}
              placeholder="Insured value of package"
              keyboardType="Years in Business"
            />

            <View style={styles.flex}>
              <Text style={{ fontSize: 20 }}>Amount pay from</Text>
              <Text style={{ fontSize: 17, marginTop: 5, color: "#e3b993" }}>
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
    borderStyle: "solid",
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
