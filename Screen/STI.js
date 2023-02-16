import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import { Picker } from "@react-native-picker/picker";
import AnimatedInput from "react-native-animated-input";
import { CheckBox } from "@rneui/themed";

export default function STI() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  const [radioButtons, setRadioButtons] = useState([
    {
      id: "1",
      label: "Option 1",
      value: "option1",
    },
    {
      id: "2",
      label: "Option 2",
      value: "option2",
    },
  ]);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Address Book
        </Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
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
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          style={{ marginLeft: 8 }}
          //   onChangeText={handleChange("company_type")}
          //   value={values.company_type}
        >
          <Picker.Item label="Please Select a value" value="" />
          <Picker.Item label="USA" value="USA" />
          <Picker.Item label="San Jose" value="San Jose" />
          <Picker.Item label="New York" value="New York" />
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

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          State
        </Text>
        <TextInput
          style={styles.input}
          //   onChangeText={handleChange("address")}
          //   value={values.address}
          keyboardType="Years in Business"
        />

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

        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 22, marginLeft: 15 }}>Location Type</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
            style={styles.rad}
          />
        </View>

        <View>
          <Text style={{ fontSize: 22, marginLeft: 15 }}>Special Services</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
            style={styles.rad}
          />
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "black",
            width: 335,
            marginLeft: 13,
            marginTop: 20,
          }}
        />

        <Text style={{ fontSize: 22, marginLeft: 15, marginTop: 10 }}>
          FedEx ShipAlert®-Express
        </Text>

        <Text style={{ marginLeft: 16, marginTop: 30, color: "#8d9092" }}>
          Sender
        </Text>
        <TextInput
          style={styles.input}
          //   onChangeText={handleChange("address")}
          //   value={values.address}
          keyboardType="Years in Business"
        />

        <View style={{flexDirection:"row", marginLeft:-8, marginRight:20}} >
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="blue"
            title="Ship"
          />
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="blue"
            title="Exception"
            style={styles.check}
          />
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="blue"
            title="Delivery"
          />
        </View>

        <Text style={{ marginLeft: 16, marginTop: 30, color: "#8d9092" }}>
          Recipient
        </Text>
        <TextInput
          style={styles.input}
          //   onChangeText={handleChange("address")}
          //   value={values.address}
          keyboardType="Years in Business"
        />

          <View style={{flexDirection:"row", marginLeft:-8, marginRight:20}} >
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="blue"
            title="Ship"
          />
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="blue"
            title="Exception"
            style={styles.check}
          />
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="blue"
            title="Delivery"
          />
        </View>


        <Text style={{ marginLeft: 16, marginTop: 30, color: "#8d9092" }}>
          Other
        </Text>
        <TextInput
          style={styles.input}
          //   onChangeText={handleChange("address")}
          //   value={values.address}
          keyboardType="Years in Business"
        />


          <View style={{flexDirection:"row", marginLeft:-8, marginRight:20}} >
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="blue"
            title="Ship"
          />
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="blue"
            title="Exception"
            style={styles.check}
          />
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="blue"
            title="Delivery"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({


  check:{
     marginLeft:-100
  },

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
    backgroundColor: "#616161",
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
    backgroundColor: "#d89d68",
    width: 100,
    height: 50,
    textAlign: "center",
    paddingTop: 15,
  },

  flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
    marginRight: 5,
    justifyContent: "space-between",
    margin: 20,
  },
});
