import { Button, StyleSheet, TextInput, View } from "react-native";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import React, { useState } from "react";

export default function Demo() {
  const { createPaymentMethod } = useStripe();
  const [email, setEmail] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [cardComplete, setCardComplete] = useState(false);

  const handleCardChange = (cardDetails) => {
    const { complete } = cardDetails;
    setCardComplete(complete);
  };

  const handleSubmit = async () => {
    // Validate email and cardholder name
    const emailValid = validateEmail(email);
    const cardholderNameValid = validateCardholderName(cardholderName);

    if (cardComplete && emailValid && cardholderNameValid) {
      // Create payment method
      const { paymentMethod, error } = await createPaymentMethod({
        type: "Card",
        billingDetails: {
          email,
          name: cardholderName,
        },
      });

      if (error) {
        console.log("Error creating payment method:", error);
      } else {
        console.log("Payment method created:", paymentMethod);
        // You can now use the payment method to make a payment or save it for later
      }
    }
  };

  const validateEmail = (email) => {
    // Add your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateCardholderName = (name) => {
    // Add your cardholder name validation logic here
    return name.trim().length > 0;
  };

  return (
    <View style={{ marginTop: 200 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Cardholder Name"
          value={cardholderName}
          onChangeText={setCardholderName}
        />
        <CardField
          postalCodeEnabled={false}
          onCardChange={handleCardChange}
          style={{ width: "100%", height: 50 }}
        />
        <Button
          title="Submit"
          onPress={handleSubmit}
          disabled={!cardComplete || !email || !cardholderName}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
