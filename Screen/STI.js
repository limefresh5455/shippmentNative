import { View, Text } from 'react-native'
import React from 'react'
import AnimatedInput from "react-native-animated-input";

export default function STI() {
  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
      <AnimatedInput
        placeholder="Email"
        // valid={isValid}
        errorText="Error"
       // onChangeText={handleChange}
      //  value={email}
        styleLabel={{ fontWeight: "600" }}
        styleBodyContent={{ borderBottomWidth: 1.5 }}
      />
    </View>
  )
}