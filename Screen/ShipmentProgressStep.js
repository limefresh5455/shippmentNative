import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import CreateShipment from "./CreateShipment";
import Header from "./Header";
import ShipmentInfo from "./ShipmentInfo";
import DownloadShipment from "./DownloadShipment";

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
            //scrollable="false"
            nextBtnStyle={styles.button}
            nextBtnTextStyle={styles.btntext}
            previousBtnStyle={styles.btton}
            previousBtnTextStyle={styles.bttext}
            scrollViewProps={defaultScrollViewProps}
          >
            {/* <View style={{alignItems: 'center'}}> */}
            <ShipmentInfo />
            {/* </View> */}
          </ProgressStep>
          <ProgressStep
            label="Done"
            onSubmit={onSubmitSteps}
            scrollViewProps={defaultScrollViewProps}
            removeBtnRow="false"
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
    backgroundColor: "#cf9e63",
    marginTop: 28,
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
});
