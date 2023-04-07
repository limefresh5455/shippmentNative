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
import { CardField } from "@stripe/stripe-react-native";
import { TextInput } from "react-native-paper";

export default function PaymentModal(props) {
  const [cardDetails, setCardDetails] = useState({
    complete: false,
    brand: "",
    last4: "",
    postalCode: "",
    expMonth: 0,
    expYear: 0,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCardDetailsChange = (cardDetails) => {
    setCardDetails(cardDetails);
  };

  const handleSubmit = () => {
    if (!name) {
      alert("Please enter your name");
      return;
    }

    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!cardDetails.complete) {
      alert("Please enter a valid card");
      return;
    }

    console.log("name", name);
    console.log("email", email);
    console.log("cardDetails", cardDetails);

    // Perform the payment processing logic here
  };

  const validateEmail = (email) => {
    const re =
      // Regex pattern for email validation
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return (
    <SafeAreaView>
      <Dialog>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 25, color: "CE9D62" }}>Card Details</Text>
          <Text style={{ fontWeight: "bold" }} onPress={props.paymentModal}>
            X
          </Text>
        </View>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="holderName"
        />

        <CardField
          postalCodeEnabled={false}
          onCardChange={handleCardDetailsChange}
          style={styles.cardField}
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
      </Dialog>
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
    marginVertical: 10,
  },
  error: {
    color: "red",
    marginLeft: 10,
  },
  cardField: {
    width: "100%",
    height: 50,
    marginVertical: 10,
  },
});
