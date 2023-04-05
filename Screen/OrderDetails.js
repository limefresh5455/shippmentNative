import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OrderDetails(props) {
  let data = JSON.parse(props.getData);
  let amount = JSON.parse(props.rateAmount);
  let SFD = JSON.parse(props.addrFromData);
  let STD = JSON.parse(props.toaddressData);
  let USDollar = JSON.parse(props.dollar);

  useEffect(() => {
    function fetchData() {
      data.carrier = AsyncStorage.getItem("Carrier");
      console.log("dataaa", data);
    }
    fetchData();
   }, []);
  

  console.log("get data", data);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* First Block Details Start */}
          <View
            style={{
              marginTop: 30,
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
            <Text style={{ marginLeft: 10 }}>{STD.company_name}</Text>
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
            <Text style={{ marginLeft: 10 }}>$ {USDollar}</Text>
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
            <Text style={{ fontSize: 18 }}>Services Type :</Text>
            <Text style={{ marginLeft: 10 }}>{data.service}</Text>
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
            <Text style={{ marginLeft: 10 }}>{data.packaging}</Text>
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
            <Text style={{ marginLeft: 10 }}>$ {USDollar}</Text>
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
            <Text style={{ marginLeft: 20 }}>
              {STD.firstname + "" + STD.lastname}
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
            <Text style={{ fontSize: 18 }}>Delivery Location :</Text>
            <Text style={{ marginLeft: 20 }}>
              {STD.city} {STD.state}
            </Text>
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
              SHIP FROM DETAILS
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              marginLeft: 40,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={{ fontSize: 20 }}>
              {SFD.firstname + "" + SFD.lastname}
            </Text>
            <Text style={{ fontSize: 20 }}>{SFD.address}</Text>
            <Text style={{ fontSize: 20 }}>{SFD.city}</Text>
            <Text style={{ fontSize: 20 }}>{SFD.zip}</Text>
            <Text style={{ fontSize: 20 }}>{SFD.phone}</Text>
            <Text style={{ fontSize: 20 }}>{SFD.email}</Text>
            <Text style={{ fontSize: 20 }}>{SFD.country}</Text>
            <Text style={{ fontSize: 20 }}>{SFD.state}</Text>
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
              SHIP TO INFORMATION
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              marginLeft: 40,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={{ fontSize: 20 }}>
              {STD.firstname + "" + STD.lastname}
            </Text>
            <Text style={{ fontSize: 20 }}>{STD.address}</Text>
            <Text style={{ fontSize: 20 }}>{STD.city}</Text>
            <Text style={{ fontSize: 20 }}>{STD.zip}</Text>
            <Text style={{ fontSize: 20 }}>{STD.phone}</Text>
            <Text style={{ fontSize: 20 }}>{STD.email}</Text>
            <Text style={{ fontSize: 20 }}>{STD.country}</Text>
            <Text style={{ fontSize: 20 }}>{STD.state}</Text>
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
              <Text style={{ marginLeft: 60, fontSize: 15 }}>$ {USDollar}</Text>
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
              <Text style={{ marginLeft: 60, fontSize: 15 }}>${amount}</Text>
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
                marginBottom: 40,
              }}
            >
              <Text style={{ fontSize: 20 }}>Total due </Text>
              <Text style={{ marginLeft: 60, fontSize: 15 }}>${amount}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
