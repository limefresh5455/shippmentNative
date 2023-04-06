import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Linking,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "react-native-paper";

let rateId;
export default function DownloadShipment(props) {
  const [image, setImage] = useState();
  console.log("props", props);

  //---------------- Download Label URL ----------------//
  useEffect(async() => {
    // rateId = AsyncStorage.getItem("rate_id");

    //-------------- static data for label --------------//
    // let data = {
    //   labelResponseOptions: "URL_ONLY",
    //   requestedShipment: {
    //     shipper: {
    //       contact: {
    //         personName: "MrsHippo",
    //         phoneNumber: "4151234567",
    //         companyName: "Google",
    //       },
    //       address: {
    //         streetLines: ["1092 Indian Summer Ct "],
    //         city: "San Jose",
    //         stateOrProvinceCode: "CA",
    //         postalCode: "95122",
    //         countryCode: "US",
    //       },
    //     },
    //     recipients: [
    //       {
    //         contact: {
    //           personName: "MrsHippo",
    //           phoneNumber: "4151234568",
    //           companyName: "facebook",
    //         },
    //         address: {
    //           streetLines: ["965 Mission St #572"],
    //           city: "San Francisco",
    //           stateOrProvinceCode: "CA",
    //           postalCode: "94103",
    //           countryCode: "US",
    //         },
    //       },
    //     ],
    //     shipDateStamp: "2023-03-24",
    //     packagingType: "YOUR_PACKAGING",
    //     serviceType: "FIRST_OVERNIGHT",
    //     pickupType: "USE_SCHEDULED_PICKUP",
    //     shippingChargesPayment: {
    //       paymentType: "SENDER",
    //     },
    //     labelSpecification: {
    //       imageType: "PDF",
    //       labelStockType: "PAPER_85X11_TOP_HALF_LABEL",
    //     },
    //     requestedPackageLineItems: [
    //       {
    //         weight: {
    //           units: "LB",
    //           value: "22",
    //         },
    //       },
    //     ],
    //   },
    //   accountNumber: {
    //     value: "510087020",
    //   },
    // };
    //-------------- static data for label --------------//

    //-------------- Dynamic data for label --------------//
     getData = await AsyncStorage.getItem("user");
     addrFromData = await AsyncStorage.getItem("addressFrom");
     toaddressData = await AsyncStorage.getItem("addressTo");

      let g = JSON.parse(getData);
      let f = JSON.parse(addrFromData);
      let t = JSON.parse(toaddressData);

        const data = {
          labelResponseOptions: "URL_ONLY",
          requestedShipment: {
            shipper: {
              contact: {
                personName: f.firstname + "" + f.lastname,
                phoneNumber: f.phone,
                companyName: "Google",
              },
              address: {
                streetLines: [f.address],
                city: f.city,
                stateOrProvinceCode: f.state,
                postalCode: f.zip,
                countryCode: f.country,
              },
            },
            recipients: [
              {
                contact: {
                  personName: t.firstname + "" + f.lastname,
                  phoneNumber: t.phone,
                  companyName: "facebook",
                },
                address: {
                  streetLines: [t.address],
                  city: t.city,
                  stateOrProvinceCode: t.state,
                  postalCode: t.zip,
                  countryCode: t.country,
                },
              },
            ],
            shipDateStamp: "2023-03-24",
            packagingType: g.packaging,
            serviceType: "FIRST_OVERNIGHT",
            pickupType: "USE_SCHEDULED_PICKUP",
            shippingChargesPayment: {
              paymentType: "SENDER",
            },
            labelSpecification: {
              imageType: "PDF",
              labelStockType: "PAPER_85X11_TOP_HALF_LABEL",
            },
            requestedPackageLineItems: [
              {
                weight: {
                  units: g.mass,
                  value: g.weight,
                },
              },
            ],
          },
          accountNumber: {
            value: "510087020",
          },
        };

    //-------------- Dynamic data for label --------------//

    fetch("https://apis-sandbox.fedex.com/ship/v1/shipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
        "X-locale": "en_US",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setImage(
          data.output.transactionShipments[0].pieceResponses[0]
            .packageDocuments[0].url
        );

        console.log(
          "data.label_url",
          data.output.transactionShipments[0].pieceResponses[0]
            .packageDocuments[0].url
        );
      })
      .catch((e) => {
        console.log("errors", e);
      });
  }, []);
  console.log("image path ---------- " + image);

  // Dynamic Download pdf
  const handleDownload = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Linking.openURL(image);
      } else {
        console.log("Permission denied");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Card
        style={{
          marginLeft: 10,
          marginRight: 10,
          paddingTop: -10,
          paddingBottom: 20,
          backgroundColor: "white",
        }}
      >
        <View style={styles.top}>
          <Text
            style={{
              textAlign: "center",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              textAlignVertical: "center",
              alignContent: "center",
              fontSize: 20,
            }}
          >
            Download or Send Label and take the package to the shipping point
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleDownload}>
            <Text style={styles.btntext}>DOWNLOAD LABEL</Text>
          </TouchableOpacity>
        </View>
      </Card>
      <Text
        style={{
          marginTop: 25,
          marginBottom: 30,
          fontSize: 17,
          color: "#d19c5e",
          textAlign: "center",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          textAlignVertical: "center",
          alignContent: "center",
        }}
      >
        Send label to email
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  ticket: {
    marginLeft: 38,
    marginRight: 38,
  },
  button: {
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 3,
    backgroundColor: "#cf9e63",
    marginTop: 28,
    width: 200,
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
    padding: 4,
  },
});
