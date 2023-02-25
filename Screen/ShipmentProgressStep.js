import { View, Text, ScrollView, StyleSheet,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import CreateShipment from "./CreateShipment";
import Header from "./Header";
import ShipmentInfo from "./ShipmentInfo";
import DownloadShipment from "./DownloadShipment";
import { Button } from "@rneui/base";

export default function ShipmentProgressStep({ navigation }) {
  const [disable, setDisable] = useState(false);

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


  function handleSubmit(){

    const token = shippo_test_385ed1b28f50d525d8b9088ac3cbaed1bc9b8ff2;

     fetch(
      "https://api.goshippo.com/shipments/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `ShippoToken ${token}`
        },
        body: JSON.stringify(user),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
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
            <CreateShipment />
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
             <TouchableOpacity style={styles.rates} onPress={handleSubmit}>
                <Text style={styles.rates1}>Create Shipment And Get Rates</Text>
             </TouchableOpacity> 
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
    padding:12,
    marginLeft:20,
    marginRight:20,
    borderRadius:3
  },
  rates1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
    padding: 8,   
    textAlign:"center"
  }

});
