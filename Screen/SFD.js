import { View, Text, TextInput, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SFD() {

   const [selectedLanguage, setSelectedLanguage] = useState();
  const [countryData, setCountryData] = useState([]);
  const [selectedValue, setSelectedValue] = useState();
  const [stateData, setStateData] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState();
  const [mainData, setMainData] = useState({
    company_name:'',
    firstname:'',
    lastname:'',
    address:'',
    address2:'',
    city:'',
    zip:'',
    phone:'',
    email:'',
    country:'',
    state:''
  })


  useEffect(() => {

   // Dynamic Country Data 

    fetch(
      "https://shipwwt.com/wp-json/wp/v2/shipwwt-get-all-countries",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
         setCountryData(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

},[]);
  // Dynamic Data States
useEffect(()=>{
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

  },[selectedValue]);


  const countryList = () => {
    return countryData.map((country,i) => {
        return <Picker.Item key={i}  label={country.name} value={country.code} />;
    });
  };


    const stateList = () => {
    return stateData.map((state,i) => {
        return <Picker.Item key={i} label={state.name} value={state.name} />;
    });
  };
useEffect(()=>{
setMainData({ ...mainData, ['country']: selectedValue
});
},[selectedValue])
useEffect(()=>{
setMainData({ ...mainData, ['state']: selectedValue1
});
},[selectedValue1])
  const handleChange = (name, value) => {
    setMainData({
      ...mainData,
      [name]: value,
    });
  };


const fieldData = async () =>{
   await AsyncStorage.setItem('addressFrom',JSON.stringify(mainData)); 
  }
  useEffect(()=>{
fieldData();
  },[mainData])


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
          }}
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
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={{ marginLeft: 8 }}
          name={"country"}
          // onChangeText={(text) => handleChange('country', text)}
          // value={values.company_type}
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
          name={"company_name"}
          onChangeText={(text) => handleChange("company_name", text)}
          value={mainData.company_name}
          keyboardType="Years in Business"
        />

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          First Name
        </Text>
        <TextInput
          name={"firstname"}
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
          name={"lastname"}
          onChangeText={(text) => handleChange("lastname", text)}
          value={mainData.lastname}
          keyboardType="Years in Business"
        />

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Address
        </Text>
        <TextInput
          name={"address"}
          style={styles.input}
          onChangeText={(text) => handleChange("address", text)}
          value={mainData.address}
          keyboardType="Years in Business"
        />

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Address2
        </Text>
        <TextInput
          name={"address2"}
          style={styles.input}
          onChangeText={(text) => handleChange("address2", text)}
          value={mainData.address2}
          keyboardType="Years in Business"
        />

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          City
        </Text>
        <TextInput
          name={"city"}
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

          // value={values.company_type}
        >
          <Picker.Item label="Please Select a state" value="" />
          {stateList()}
        </Picker>
        <Text style={styles.inputs}></Text>

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Zip
        </Text>

        <TextInput
          name={"zip"}
          style={styles.input}
          onChangeText={(text) => handleChange("zip", text)}
          value={mainData.zip}
          keyboardType="numeric"
        />

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Phone
        </Text>
        <TextInput
          name={"phone"}
          style={styles.input}
          onChangeText={(text) => handleChange("phone", text)}
          value={mainData.phone}
          keyboardType="numeric"
        />

        <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
          Email
        </Text>
        <TextInput
          name={"email"}
          style={styles.input}
          onChangeText={(text) => handleChange("email", text)}
          value={mainData.email}
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
    marginTop: -8,
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
