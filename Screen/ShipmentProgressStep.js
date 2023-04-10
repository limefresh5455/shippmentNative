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
import { DataTable } from "react-native-paper";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import Header from "./Header";
import ShipmentInfo from "./ShipmentInfo";
import DownloadShipment from "./DownloadShipment";
import Trial from "./Trial";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import TextBox from "react-native-password-eye";
import { CheckBox, Stack } from "@rneui/themed";
import OrderDetails from "./OrderDetails";
// import PaymentModal from "./PaymentModal";
import { Dialog } from "@rneui/themed";
import { CardForm } from "@stripe/stripe-react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  holderName: Yup.string().required("holderName is required."),
});

let getData;
let addrFromData;
let toaddressData;
let packagingData;
let objectId;

export default function ShipmentProgressStep({ navigation }) {
  const [disable, setDisable] = useState(false);
  // const [check, setCheck] = useState(false);
  const [rates, setRates] = useState([]);
  // const [transId, setTransId] = useState();
  const [rateId, setRateId] = useState();
  const [rateAmount, setRateAmount] = useState();
  const [order, setOrder] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [token, setToken] = useState();
  const [cardDetails, setCardDetails] = useState("");
  const [cardDetails1, setCardDetails1] = useState("");
  const [dollar , setDollar] = useState("1.00");

  console.log("dollar",dollar);

  const handleSubmit = (values) => {
    let card = {
      ...values,
      ...cardDetails,
    };
    if (!cardDetails.complete) {
      alert("Please enter a valid card");
      return;
    }
    setPaymentModal(false);
    if (card) {
      setShowButton(true);
    }
    console.log("data", card);
  };

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

  const onNext = () => {
    // setPaymentModal(true)
  };

  const handlePayment = () => {
    setPaymentModal(true);
  };

  const closeModal = () => {
    setPaymentModal(false);
  };

  const handleOrder = () => {
    setOrder(true);
  };

  const onPaymentStepComplete = () => {
    alert("Payment step completed!");
  };

  const onPrevStep = () => {
    console.log("called previous step");
  };

  const onSubmitSteps = () => {
    alert("Succesfull...");
    navigation.navigate("SignIn");
  };

  //--- Get Token Post Rates API ---//
  useEffect(() => {
    const formData = new URLSearchParams();
    formData.append("grant_type", "client_credentials");
    formData.append("client_id", "l7cedb873968594ca0b36b370575801843");
    formData.append("client_secret", "d64a4e7b41f34c64aa11e51a9a91e415");
    formData.append("child_Key", "WWTGlobal");
    formData.append("child_secret", "d64a4e7b41f34c64aa11e51a9a91e415");

    fetch("https://apis-sandbox.fedex.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    })
      .then((response) => response.json())
      .then(async (data) => {
        // console.log("Token :- ", data.access_token);
        setToken(data.access_token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },[]);
  //--- Get Token Post Rates API ---//

  //-------------- New Packaging Details Post API ----------------//
  const handleSubmit1 = async () => {
    getData = await AsyncStorage.getItem("user");
    addrFromData = await AsyncStorage.getItem("addressFrom");
    toaddressData = await AsyncStorage.getItem("addressTo");
    packagingData = await AsyncStorage.getItem("packaging");
    objectId = await AsyncStorage.getItem("objectid");
    let g = JSON.parse(getData);
    let f = JSON.parse(addrFromData);
    let t = JSON.parse(toaddressData);
    // let p = JSON.parse(packagingData);

    //------ order detail set data ---------//

    // const data = { g., user_lname, user_email, user_phone };
    // AsyncStorage.setItem("orderDetails", data);

    //------ order detail set data ---------//

    //------ Dynamic Data Get Rates ---------//
    const data = {
      accountNumber: {
        value: "510087720",
      },
      rateRequestControlParameters: {
        returnTransitTimes: true,
        servicesNeededOnRateFailure: true,
        variableOptions: "FREIGHT_GUARANTEE",
        rateSortOrder: "SERVICENAMETRADITIONAL",
      },
      requestedShipment: {
        shipper: {
          address: {
            streetLines: [f.address],
            city: f.city,
            stateOrProvinceCode: f.state,
            postalCode: f.zip,
            countryCode: f.country,
          },
        },
        recipient: {
          address: {
            streetLines: [t.address],
            city: t.city,
            stateOrProvinceCode: t.state,
            postalCode: t.zip,
            countryCode: t.country,
          },
        },
        shipDateStamp: "2023-03-24",
        packagingType: g.packaging,
        pickupType: "USE_SCHEDULED_PICKUP",
        rateRequestType: ["ACCOUNT"],
        requestedPackageLineItems: [
          {
            weight: {
              units: g.mass,
              value: g.weight,
            },
          },
        ],
      },
    };

    // console.log("data0000" + JSON.stringify(data));

    //------ Dynamic Data Get Rates ---------//

    //------ Static Data Get Rates ---------//
    // const data = {
    //   accountNumber: {
    //     value: "510087720",
    //   },
    //   rateRequestControlParameters: {
    //     returnTransitTimes: true,
    //     servicesNeededOnRateFailure: true,
    //     variableOptions: "FREIGHT_GUARANTEE",
    //     rateSortOrder: "SERVICENAMETRADITIONAL",
    //   },
    //   requestedShipment: {
    //     shipper: {
    //       address: {
    //         streetLines: ["965 Mission St #572", ""],
    //         city: "San Francisco",
    //         stateOrProvinceCode: "CA",
    //         postalCode: "94103",
    //         countryCode: "US",
    //       },
    //     },
    //     recipient: {
    //       address: {
    //         streetLines: ["1092 Indian Summer Ct", ""],
    //         city: "San Jose",
    //         stateOrProvinceCode: "CA",
    //         postalCode: "95122",
    //         countryCode: "US",
    //       },
    //     },
    //     shipDateStamp: "2023-03-24",
    //     packagingType: "YOUR_PACKAGING",
    //     pickupType: "USE_SCHEDULED_PICKUP",
    //     rateRequestType: ["ACCOUNT"],
    //     requestedPackageLineItems: [
    //       {
    //         weight: {
    //           units: "LB",
    //           value: "22",
    //         },
    //       },
    //     ],
    //   },
    // };
    // console.log("data -----::::: " + JSON.stringify(data));

    //------ Static Data Get Rates ---------//

    setTimeout(() => {
      fetch("https://apis-sandbox.fedex.com/rate/v1/rates/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "X-locale": "en_US",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log("data!!!!!!!", data);
          // let rate = ;
          setRates(data.output.rateReplyDetails);
          // console.log("rate", rate.serviceName);
        })
        .catch((e) => {
          console.log("errors", e);
        });
    },1000);
  };
  //-------------- New Packaging Details Post API ----------------//

  useEffect(() => {
    if (rateId != undefined) {
      AsyncStorage.setItem("rate_id", rateId);
      // console.log("id -----:::::" + rateId);
    }
  }, [rateId]);

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
            onNext={onNext}
            onPrevious={onPrevStep}
            nextBtnStyle={
              !order
                ? styles.btntextt
                : !paymentModal && !showButton
                ? styles.btntextt
                : styles.button
            }
            nextBtnTextStyle={styles.btntext}
            previousBtnStyle={styles.btton}
            previousBtnTextStyle={styles.bttext}
            scrollViewProps={defaultScrollViewProps}
          >
            {paymentModal ? (
              <Dialog>
                <Formik
                  initialValues={{
                    email: "",
                    holderName: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                  }) => (
                    <>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{ fontSize: 25, color: "CE9D62" }}>
                          Card Details
                        </Text>
                        <Text
                          style={{ fontWeight: "bold" }}
                          onPress={closeModal}
                        >
                          X
                        </Text>
                      </View>

                      <TextInput
                        style={styles.input}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        placeholder="Email"
                        keyboardType="email-address"
                      />
                      {touched.email && errors.email && (
                        <Text style={styles.error}>{errors.email}</Text>
                      )}
                      <TextInput
                        style={styles.input}
                        onChangeText={handleChange("holderName")}
                        onBlur={handleBlur("holderName")}
                        value={values.holderName}
                        placeholder="holderName"
                      />
                      {touched.holderName && errors.holderName && (
                        <Text style={styles.error}>{errors.holderName}</Text>
                      )}

                      <CardForm
                        postalCodeEnabled={false}
                        onFormComplete={(cardDetails) => {
                          setCardDetails(cardDetails);
                        }}
                        style={{
                          height: 250,
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      />

                      <TouchableOpacity
                        style={{
                          backgroundColor: "#CE9D62",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: 5,
                          marginRight: 5,
                          borderRadius: 8,
                        }}
                        onPress={handleSubmit}
                      >
                        <Text
                          style={{
                            color: "white",
                            padding: 15,
                            fontSize: 18,
                          }}
                        >
                          Validate
                        </Text>
                      </TouchableOpacity>
                      {/* <Button onPress={handleSubmit} title="Submit" /> */}
                    </>
                  )}
                </Formik>
              </Dialog>
            ) : (
              ""
            )}
            {order ? (
              <>
                <OrderDetails
                  getData={getData}
                  addrFromData={addrFromData}
                  toaddressData={toaddressData}
                  rateAmount={rateAmount}
                  dollar={dollar}
                />
                <TouchableOpacity
                  onPress={handlePayment}
                  style={{
                    backgroundColor: "#CE9D62",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 140,
                    marginRight: 20,
                    borderRadius: 8,
                    display: paymentModal
                      ? "none"
                      : showButton
                      ? "none"
                      : "flex",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      padding: 15,
                      fontSize: 18,
                    }}
                  >
                    Approve & Finish
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <ShipmentInfo />
                <TouchableOpacity style={styles.rates} onPress={handleSubmit1}>
                  <Text style={styles.rates1}>
                    Create Shipment And Get Rates
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    display: rates.length == 0 ? "none" : "flex",
                  }}
                >
                  <DataTable>
                    <DataTable.Header>
                      <DataTable.Title></DataTable.Title>
                      <DataTable.Title>Services</DataTable.Title>
                      <DataTable.Title>Rates</DataTable.Title>
                      <DataTable.Title numeric>Estimated Days</DataTable.Title>
                    </DataTable.Header>

                    {rates.map((data, i) => {
                      const serviceEstimateDate = new Date(
                        data.operationalDetail.deliveryDate
                      );
                      // let g = JSON.parse(getData);
                      // console.log("g",g)
                      // console.log("serviceEstimateDate", serviceEstimateDate);

                      const now = new Date("2023-03-24T12:00:00");
                      const serviceEstimateDays = Math.round(
                        (serviceEstimateDate.getTime() - now.getTime()) /
                          (1000 * 24 * 60 * 60)
                      );

                      return (
                        <>
                          <DataTable.Row>
                            <DataTable.Cell>
                              <CheckBox
                                center
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                checked={rateId === data.serviceName}
                                onPress={() => {
                                  setRateAmount(
                                    data.ratedShipmentDetails[0].totalNetCharge
                                  );
                                  setRateId(data.serviceName);
                                }}
                                key={i}
                              />
                            </DataTable.Cell>
                            <DataTable.Cell>{data.serviceName}</DataTable.Cell>
                            <DataTable.Cell>
                              $ {data.ratedShipmentDetails[0].totalNetCharge}
                            </DataTable.Cell>
                            <DataTable.Cell numeric>
                              {serviceEstimateDays}
                            </DataTable.Cell>
                          </DataTable.Row>
                        </>
                      );
                    })}
                  </DataTable>
                </View>
                <View>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 30,
                      marginBottom: -10,
                      color: "black",
                      fontSize: 15,
                    }}
                  >
                    Insured value of package
                  </Text>
                  <TextInput
                    style={{
                      height: 40,
                      margin: 12,
                      borderWidth: 1,
                      padding: 10,
                      borderTopWidth: 1,
                      borderRightWidth: 1,
                      borderLeftWidth: 1,
                      marginBottom: 20,
                      borderStyle: "solid",
                      borderBottomColor: "#6B6969",
                      marginLeft: 30,
                      marginRight: 30,
                      paddingLeft: 26,
                    }}
                    placeholder="1.00 (US Dollar)"
                    inlineImageLeft="search"
                    keyboardType="numeric"
                    onChangeText={(value) => setDollar(value)}
                    value={dollar}
                    editable={true}
                  />
                  <Text
                    style={{
                      marginLeft: 40,
                      marginTop: -50,
                      paddingRight: 20,
                      marginBottom: 30,
                    }}
                  >
                    {"\u0024"}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 20,
                    marginRight: 25,
                    marginBottom: 25,
                    display: rates.length == 0 ? "none" : "flex",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      marginLeft: 160,
                      marginTop: 20,
                      marginBottom: 10,
                    }}
                  >
                    Total : {rateAmount}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={handleOrder}
                  style={{
                    backgroundColor: "#CE9D62",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 140,
                    marginRight: 20,
                    borderRadius: 8,
                    display: rates.length == 0 ? "none" : "flex",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      padding: 15,
                      fontSize: 18,
                    }}
                  >
                    Continue To Preview
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </ProgressStep>

          <ProgressStep
            label="Done"
            onSubmit={onSubmitSteps}
            finishBtnText="My Account"
            scrollViewProps={defaultScrollViewProps}
            removeBtnRow={disable}
            previousBtnDisabled={disable}
            previousBtnStyle={{ display: "none" }}
          >
            <View style={{ alignItems: "center" }}>
              <DownloadShipment token={token} />
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
  rateId: {
    fontSize: 25,
  },
  rateIdHigh: {
    backgroundColor: "#CE9D62",
    fontSize: 25,
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
  btntextt: {
    display: "none",
  },
  continueText: {
    display: "none",
  },
  btton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    backgroundColor: "#cf9e63",
    justifyContent: "center",
    padding: 8,
    marginLeft:-50
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
  input: {
    height: 40,
    borderColor: "white",
    backgroundColor: "white",
    marginLeft: 10,
    paddingLeft: -100,
    padding: 7,
  },
  error: {
    color: "red",
    marginLeft: 10,
  },
});
