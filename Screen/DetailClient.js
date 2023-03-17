import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

export default function DetailClient() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* First Block Details Start */}
          <View
            style={{
              marginTop: 60,
              marginLeft: 30,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Username :</Text>
            <Text style={{ marginLeft: 10, fontSize: 15 }}>
              rahuljat.linuxbean@gmail.com
            </Text>
          </View>
          <View
            style={{
              marginTop: 25,
              marginLeft: 30,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Full name :</Text>
            <Text style={{ marginLeft: 10 }}>ship2 wwt2</Text>
          </View>
          <View
            style={{
              marginTop: 25,
              marginLeft: 30,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Contact :</Text>
            <Text style={{ marginLeft: 10 }}>9876543210</Text>
          </View>
          <View
            style={{
              marginTop: 25,
              marginLeft: 30,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Company :</Text>
            <Text style={{ marginLeft: 10 }}>Prashant Mishra</Text>
          </View>

          {/* First Block Details End */}

          {/* Middle Block Details Start */}
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 0.5,
              marginLeft: 18,
              marginRight: 18,
              marginTop: 10,
            }}
          />

          <View
            style={{
              marginTop: 15,
              marginBottom: 11,
              marginLeft: 30,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Insured value :</Text>
            <Text style={{ marginLeft: 10 }}>$1.00</Text>
          </View>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 0.5,
              marginLeft: 18,
              marginRight: 18,
              marginTop: 10,
            }}
          />

          {/* Middle Block Details End */}

          {/* Second Block Details Start */}
          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Carrier :</Text>
            <Text style={{ marginLeft: 10 }}>ups</Text>
          </View>

          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Services Type :</Text>
            <Text style={{ marginLeft: 10 }}>
              ups_mail_innovations_bpm_parcel
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Packaging :</Text>
            <Text style={{ marginLeft: 10 }}>UPS_Express_Legal_Envelope</Text>
          </View>

          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Insured value :</Text>
            <Text style={{ marginLeft: 10 }}>$1.00</Text>
          </View>

          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Deliverd To :</Text>
            <Text style={{ marginLeft: 20 }}>Mrs Hippo</Text>
          </View>

          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Delivery Location :</Text>
            <Text style={{ marginLeft: 20 }}>San Jose CA</Text>
          </View>

          {/* Second Block Details End */}

          {/* Ship From Details Block Details Start */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center",
                color: "#ce9d62",
                fontSize: 22,
              }}
            >
              ShIP FROM DETAILS
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 0.5,
              marginLeft: 18,
              marginRight: 18,
              marginTop: 10,
            }}
          />
          {/* Ship From Details Block Details End */}

          {/* Ship To Information Block Details Start */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginTop: 60,
                justifyContent: "center",
                alignItems: "center",
                color: "#ce9d62",
                fontSize: 22,
              }}
            >
              ShIP TO INFORMATION
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 0.5,
              marginLeft: 18,
              marginRight: 18,
              marginTop: 10,
            }}
          />

          {/* Ship To Information Block Details Start */}

          {/* -------- Last Block -------- */}
          <View>
            <View
              style={{
                marginTop: 60,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>Insurance </Text>
              <Text style={{ marginLeft: 60, fontSize: 15 }}>$1.00</Text>
            </View>

            <View
              style={{
                marginTop: 30,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>Shipping </Text>
              <Text style={{ marginLeft: 60, fontSize: 15 }}>$55.74</Text>
            </View>

            <View
              style={{
                marginTop: 30,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>Discount </Text>
              <Text style={{ marginLeft: 60, fontSize: 15 }}>$0.00</Text>
            </View>

            <View
              style={{
                marginTop: 30,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20
              }}
            >
              <Text style={{ fontSize: 20 }}>Total due </Text>
              <Text style={{ marginLeft: 60, fontSize: 15 }}>$55.74</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
