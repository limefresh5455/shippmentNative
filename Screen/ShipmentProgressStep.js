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
import React, { useState, useEffect } from "react";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import CreateShipment from "./CreateShipment";
import Header from "./Header";
import ShipmentInfo from "./ShipmentInfo";
import DownloadShipment from "./DownloadShipment";
import Trial from "./Trial";
// import { Button } from "@rneui/base";

export default function ShipmentProgressStep({ navigation }) {
  const [disable, setDisable] = useState(false);
  const [ rates, setRates ] = useState('')

  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
      flex: 1,
      justifyContent: "center",
    },
  };

  const onNextStep = () => {
    console.log("called next step");
  };

  const onPaymentStepComplete = () => {
    alert("Payment step completed!");
  };

  const onPrevStep = () => {
    console.log("called previous step");
  };

  const onSubmitSteps = () => {
    alert("Succesfull...");
  };

  function handleSubmit1() {

    const data = {
      address_to: {
        name: "Mr Hippo",
        street1: "965 Mission St #572",
        city: "San Francisco",
        state: "CA",
        zip: "94103",
        country: "US",
        phone: "4151234567",
        email: "mrhippo@goshippo.com",
      },

      address_from: {
        name: "Mrs Hippo",
        street1: "1092 Indian Summer Ct",
        city: "San Jose",
        state: "CA",
        zip: "95122",
        country: "US",
        phone: "4159876543",
        email: "mrshippo@goshippo.com",
      },
      parcels: [
        {
          length: "38",
          width: "6",
          height: "6",
          distance_unit: "in",
          weight: "10",
          mass_unit: "lb",
        },
      ],
    };

    const token = 'shippo_test_385ed1b28f50d525d8b9088ac3cbaed1bc9b8ff2';

    fetch("https://api.goshippo.com/shipments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `ShippoToken ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("rates",data.rates[0].amount);
        setRates(data.rates[0].amount)
      })
      .catch((e) => {
        console.log("errors", e);
      });
  }

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.contentViews}>
          <Text style={styles.h1s}>Create a new</Text>
          <Text style={styles.h1ms}> shipment</Text>
        </View>

        <ProgressSteps
          completedProgressBarColor="#d89d68"
          completedStepIconColor="#d89d68"
          activeStepIconBorderColor="#d89d68"
          labelColor="#d89d68"
          activeLabelColor="#d89d68"
        >
          <ProgressStep
            label="Package & Payments info"
            onNext={onNextStep}
            onPrevious={onPrevStep}
            nextBtnText="Continue"
            nextBtnStyle={styles.button}
            nextBtnTextStyle={styles.btntext}
            scrollViewProps={defaultScrollViewProps}
          >
            <Trial />
          </ProgressStep>

          <ProgressStep
            label="Shipment info"
            onNext={onNextStep}
            onPrevious={onPrevStep}
            previousBtnDisabled={disable}
            nextBtnStyle={styles.button}
            nextBtnTextStyle={styles.btntext}
            previousBtnStyle={styles.btton}
            previousBtnTextStyle={styles.bttext}
            scrollViewProps={defaultScrollViewProps}
          >
            <ShipmentInfo />
            <TouchableOpacity style={styles.rates} onPress={handleSubmit1}>
              <Text style={styles.rates1}>Create Shipment And Get Rates</Text>
            </TouchableOpacity>

            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginLeft:140, marginRight:25, marginBottom:25}}>
              <Text style={{fontSize:25}}>Total</Text>
              <Text style={{fontSize:25}}>{rates}</Text>
            </View>
          </ProgressStep>

          <ProgressStep
            label="Done"
            onSubmit={onSubmitSteps}
            scrollViewProps={defaultScrollViewProps}
            removeBtnRow={disable}
          >
            <View style={{ alignItems: "center" }}>
              <DownloadShipment />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  contentViews: {
    paddingTop: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  h1s: {
    fontSize: 30,
    color: "#b1aeae",
    fontWeight: "400",
  },
  h1ms: {
    fontSize: 30,
    fontWeight: "500",
  },
  button: {
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 18,
    backgroundColor: "#CE9D62",
    marginTop: 45,
    marginLeft: 35,
    width: "100%",
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
  btton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
    padding: 8,
  },
  bttext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
    padding: 8,
  },
  rates: {
    backgroundColor: "#cf9e63",
    padding: 12,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 3,
    marginBottom: 30,
  },
  rates1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
    padding: 8,
    textAlign: "center",
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
