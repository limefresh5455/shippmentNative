import { View, Text, TextInput, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function SFD() {

  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <ScrollView>
      <View style={{backgroundColor:"white"}}>
      <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
        Address Book
      </Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        style={{ marginLeft: 8 }}
        //   onChangeText={handleChange("company_type")}
        //   value={values.company_type}
      >
        <Picker.Item label="Please Select a value" value="" />
        <Picker.Item label="Partnership" value="Partnership" />
        <Picker.Item label="Corporation" value="Corporation" />
        <Picker.Item label="S corporation" value="S corporation" />
        <Picker.Item label="LLC" value="LLC" />
        <Picker.Item label="United Kingdom" value="United Kingdom" />
        <Picker.Item label="Star8ship" value="Star8ship" />
      </Picker>
      <Text style={styles.inputs}></Text>

      <Text style={{ marginLeft: 16, marginTop: 18, color: "#8d9092" }}>
        Country
      </Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        style={{ marginLeft: 8 }}
        //   onChangeText={handleChange("company_type")}
        //   value={values.company_type}
      >
        <Picker.Item label="Please Select a value" value="" />
        <Picker.Item label="Afghanistan" value="Afghanistan"/>
        <Picker.Item label="Åland Islands" value="Åland Islands"/>
        <Picker.Item label="Albania" value="Albania"/>
        <Picker.Item label="Algeria" value="Algeria"/>
        <Picker.Item label="American Samoa" value="American Samoa"/>
        <Picker.Item label="Andorra" value="Andorra"/>
        <Picker.Item label="Angola" value="Angola"/>
        <Picker.Item label="Anguilla" value="Anguilla"/>
        <Picker.Item label="Antarctica" value="Antarctica"/>
        <Picker.Item label="Uganda" value="Uganda"/>
        <Picker.Item label="United Kingdom" value="United Kingdom"/>
        <Picker.Item label="United States" value="United States"/>
         
        {/* <Picker.Item label="Other" value="Other" onChangeText={handle} /> */}
      </Picker>
      <Text style={styles.inputs}></Text>

      <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
        Company
      </Text>
      <TextInput
        style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        keyboardType="Years in Business"
      />

      <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
        First Name
      </Text>
      <TextInput
        style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        keyboardType="Years in Business"
      />

      <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
        Last Name
      </Text>
      <TextInput
        style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        keyboardType="Years in Business"
      />

      <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
        Address
      </Text>
      <TextInput
        style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        keyboardType="Years in Business"
      />

      <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
        Address2
      </Text>
      <TextInput
        style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        keyboardType="Years in Business"
      />

      <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
        City
      </Text>
      <TextInput
        style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        keyboardType="Years in Business"
      />

      <Text style={{ marginLeft: 16, marginTop: 18, color: "#8d9092" }}>
        State
      </Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        style={{ marginLeft: 8 }}
        //   onChangeText={handleChange("company_type")}
        //   value={values.company_type}
      >
        <Picker.Item label="Please Select a value" value="" />
        <Picker.Item label="Alabama" value="Alabama"/>
        <Picker.Item label="Alaska" value="Alaska"/>
        <Picker.Item label="Arizona" value="Arizona"/>
        <Picker.Item label="Arkansas" value="Arkansas"/>
        <Picker.Item label="California" value="California"/>
        <Picker.Item label="Kentucky" value="Kentucky"/>
        <Picker.Item label="Maine" value="Maine"/>
        <Picker.Item label="Massachusetts" value="Massachusetts"/>
        <Picker.Item label="Mississippi" value="Mississippi"/>
        <Picker.Item label="Montana" value="Montana"/>
        <Picker.Item label="Nevada" value="Nevada"/>
        <Picker.Item label="New York" value="New York"/>
         
        {/* <Picker.Item label="Other" value="Other" onChangeText={handle} /> */}
      </Picker>
      <Text style={styles.inputs}></Text>

      <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
        Zip
      </Text>
      
      <TextInput
        style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        keyboardType="Years in Business"
      />

      <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
        Phone
      </Text>
      <TextInput
        style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        keyboardType="Years in Business"
      />

      <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
        Email
      </Text>
      <TextInput
        style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        keyboardType="Years in Business"
      />

          </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: -7,
    borderStyle: "solid",
    borderBottomColor: "#c7bdbd",
    marginLeft: 15,
    marginRight: 12,
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
    borderStyle: "solid",
    borderBottomColor: "#c7bdbd",
  },
   btntext1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    backgroundColor:"#616161",
    width: 100,
    height: 50,
    textAlign: "center",
    paddingTop: 15,
  
  },

  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    backgroundColor:"#d89d68",
    width: 100,
    height: 50,
    textAlign: "center",
    paddingTop: 15,
  },

   flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // marginLeft: 15,
    // marginRight: 15,
    justifyContent: "space-between",
    margin: 20,
  },
});
