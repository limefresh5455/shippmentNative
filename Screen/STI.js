import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import { Picker } from "@react-native-picker/picker";
import AnimatedInput from "react-native-animated-input";
import { CheckBox } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function STI() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [countryData, setCountryData] = useState([]);
  const [selectedValue, setSelectedValue] = useState();
  const [stateData, setStateData] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState();
  //--- Check Value State  ---//
  const [inputCheck, setInputCheck] = useState("");
  const [updateCheck, setUpdateCheck] = useState("");
  //--- Check Value State  ---//
  const [mainData, setMainData] = useState({
    company_name: "",
    firstname: "",
    lastname: "",
    address: "",
    address2: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
    country: "",
    state: "",
  });

  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => {
    setChecked(true);
    setUpdateCheck(inputCheck);
    setMainData({ ...mainData, adrBook: inputCheck });
  };

  const getPreviousData = async (v) => {
    const data = await AsyncStorage.getItem("addressTo");
    console.log("mainData", data);
    if(data.adrBook == v) {
      setSelectedValue(data.country);
    }
  };

  useEffect(() => {
   // const data = AsyncStorage.getItem("addressTo");
   // console.log("mainData", data);
    // Dynamic Country Data
    fetch("https://shipwwt.com/wp-json/wp/v2/shipwwt-get-all-countries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  // Dynamic Data States
  useEffect(() => {
    fetch(
      `https://shipwwt.com/wp-json/wp/v2/shipwwt-get-states-from-country?country_code=${selectedValue}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setStateData(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [selectedValue]);

  const countryList = () => {
    return countryData.map((country, i) => {
      return <Picker.Item key={i} label={country.name} value={country.code} />;
    });
  };

  const stateList = () => {
    return stateData.map((state, i) => {
      return <Picker.Item key={i} label={state.name} value={state.code} />;
    });
  };

  useEffect(() => {
    setMainData({ ...mainData, ["country"]: selectedValue });
  }, [selectedValue]);
  useEffect(() => {
    setMainData({ ...mainData, ["state"]: selectedValue1 });
  }, [selectedValue1]);
  const handleChange = (name, value) => {
    setMainData({
      ...mainData,
      [name]: value,
    });
  };

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

  const onPressRadioButton = (radioButtonsArray) => {
    setRadioButtons(radioButtonsArray);
  };

  const fieldData = async () => {
    // console.log("(mainData):", JSON.stringify(mainData));
    await AsyncStorage.setItem("addressTo", JSON.stringify(mainData));
  };
  useEffect(() => {
    fieldData();
  }, [mainData]);

  const countryOnChange = (code, index) => {
    setSelectedValue(code);
    let c = countryData[index - 1];
  };
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Address Book
        </Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedLanguage(itemValue);
            getPreviousData(itemValue);
          }}
          style={{ marginLeft: 8 }}
        >
          <Picker.Item label="Select contact from address book" value="" />
          {updateCheck != "" ? (
            <Picker.Item label={updateCheck} value={updateCheck} />
          ) : null}
        </Picker>
        <Text style={styles.inputs}></Text>

        {/* Start Coding Shipment Info STI*/}
        <Text style={{ marginLeft: 16, marginTop: 18, color: "#8d9092" }}>
          Country
        </Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, item, itemIndex) =>
            countryOnChange(itemValue, item)
          }
          style={{ marginLeft: 8 }}
        >
          <Picker.Item label="Please Select a Country" value="" />
          {countryList()}
        </Picker>
        <Text style={styles.inputs}></Text>

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Company
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("company_name", text)}
          value={mainData.company_name}
          keyboardType="Years in Business"
        />

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          First Name
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("firstname", text)}
          value={mainData.firstname}
          keyboardType="Years in Business"
        />

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Last Name
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("lastname", text)}
          value={mainData.lastname}
          keyboardType="Years in Business"
        />

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Address
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("address", text)}
          value={mainData.address}
          keyboardType="Years in Business"
        />

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Address2
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("address2", text)}
          value={mainData.address2}
          keyboardType="Years in Business"
        />

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          City
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("city", text)}
          value={mainData.city}
          keyboardType="Years in Business"
        />

        <Text style={{ marginLeft: 16, marginTop: 18, color: "#8d9092" }}>
          State
        </Text>
        <Picker
          selectedValue={selectedValue1}
          onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
          style={{ marginLeft: 8 }}
        >
          <Picker.Item label="Please Select a state" value="" />
          {stateList()}
        </Picker>
        <Text style={styles.inputs}></Text>

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Zip
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("zip", text)}
          value={mainData.zip}
          keyboardType="numeric"
        />

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Phone
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("phone", text)}
          value={mainData.phone}
          keyboardType="numeric"
        />

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Email
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("email", text)}
          value={mainData.email}
          keyboardType="Years in Business"
        />
        <View>
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="blue"
            title="Save to address book as a new entry:"
          />
          <TextInput
            onChangeText={(text) => setInputCheck(text)}
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderTopWidth: 1,
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderBottomWidth: 1,
              marginTop: -7,
              borderStyle: "solid",
              marginLeft: 25,
              marginRight: 50,
            }}
          />
        </View>

        {/* <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 22, marginLeft: 15 }}>Location Type</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
            style={styles.rad}
          />
        </View> */}

        {/* <View>
          <Text style={{ fontSize: 22, marginLeft: 15 }}>Special Services</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
            style={styles.rad}
          />
        </View> */}

        {/* <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "black",
            width: 335,
            marginLeft: 13,
            marginTop: 20,
          }}
        /> */}

        {/* <Text style={{ fontSize: 22, marginLeft: 15, marginTop: 10 }}>
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
        /> */}

        {/* <View style={{ flexDirection: "row", marginLeft: -8, marginRight: 20 }}>
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
        </View> */}

        {/* <Text style={{ marginLeft: 16, marginTop: 30, color: "#8d9092" }}>
          Recipient
        </Text>
        <TextInput
          style={styles.input}
          //   onChangeText={handleChange("address")}
          //   value={values.address}
          keyboardType="Years in Business"
        /> */}

        {/* <View style={{ flexDirection: "row", marginLeft: -8, marginRight: 20 }}>
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
        </View> */}

        {/* <Text style={{ marginLeft: 16, marginTop: 30, color: "#8d9092" }}>
          Other
        </Text>
        <TextInput
          style={styles.input}
          //   onChangeText={handleChange("address")}
          //   value={values.address}
          keyboardType="Years in Business"
        /> */}

        {/* <View style={{ flexDirection: "row", marginLeft: -8, marginRight: 20 }}>
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
        </View> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  check: {
    marginLeft: -100,
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
