import React, { useState } from "react";
import { Button, StyleSheet,TouchableOpacity, Text, TextInput, View } from "react-native";
import { CardField, StripeProvider } from "@stripe/stripe-react-native";

const Demo = () => {
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

    console.log("name",name);
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
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 11,
  },
  cardField: {
    width: "100%",
    height: 50,
    marginVertical: 10,
    marginLeft: 40,
    marginRight: 20,
  },
});

export default Demo;
