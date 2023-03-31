import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Dialog } from "@rneui/themed";
import { CardForm } from "@stripe/stripe-react-native";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  holderName: Yup.string().required("holderName is required."),
});

export default function PaymentModal(props) {
  const [cardDetails, setCardDetails] = useState("");
  
  

  const handleSubmit = (values) => {
    let card = {
      ...values,
      ...cardDetails,
    };
    console.log("data",card)
    AsyncStorage.setItem("cardDetails", JSON.stringify(card));
     props.paymentModal()
  };

  return (
    <SafeAreaView>
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
            // isValid,
            // isSubmitting,
          }) => (
            <Dialog>
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
                  onPress={props.paymentModal}
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
                postalCodeEnabled={true}
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
                // disabled={!isValid || isSubmitting}
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
            </Dialog>
          )}
        </Formik>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
