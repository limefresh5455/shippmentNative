import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
// import {AsyncStorage} from 'react-native';
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import AnimatedInput from "react-native-animated-input";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Header from "./Header";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/;

const SignupSchema = Yup.object().shape({
  // company_name: Yup.string().required("Company is required"),
  // year_in_business: Yup.string().required("Year of buisness is required"),
  // contact: Yup.string().required("Contact Name is required"),
  //  service_name: Yup.string().required("please select a value"),
  //  company_type: Yup.string().required("please select a value"),
  // phone: Yup.string()
  //   .matches(phoneRegExp, "Phone number is not valid")
  //   .required("Phone Number is Required"),
  // address: Yup.string().required("please fill the address"),
  // address_2: Yup.string().required("please again fill the address"),
  // fax: Yup.number().required("please fill the fax"),
  //  country: Yup.string().required("please select a value"),
  // city: Yup.string().required("city is required"),
  // state: Yup.string().required("state is required"),
  // zip: Yup.number().required("zip is required"),
});

const BusinessProfile = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedLanguage1, setSelectedLanguage1] = useState();
  const [selectedLanguage2, setSelectedLanguage2] = useState();
  const [copynew, setCopynew] = useState([]);

  const handle = () => {
    alert("hiii!");
    // const abc = [...copynew];
    // setCopynew(abc);
  };

  const handleSubmit = (values) => {
    const data =  AsyncStorage.getItem('userdata')
    alert(JSON.stringify(data))

    const user = {
      user_id: 97,
      company_name: values.company_name,
      year_in_business: values.year_in_business,
      contact: values.contact,
      address: values.address,
      phone: values.phone,
      address_2: values.address_2,
      fax: values.fax,
      country: selectedLanguage2,
      city: values.city,
      state: values.state,
      zip: values.zip,
      company_type: selectedLanguage1,
      service_name: selectedLanguage,
      company_type_other: "",
    };

    fetch(
      "https://shipwwt.com/wp-json/wp/v2/shipwwt-update-business-profile/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert(data.data.response);
        if (data.status === true) {
          alert(data.data.response);
          console.log(data.data.response);
        }
      })
      .catch((e) => {
        console.log("errors", e);
      });

    console.log(user)
  };

  return (
    <Formik
      initialValues={{
        company_name: "",
        year_in_business: "",
        contact: "",
        service_name: "",
        company_type: "",
        phone: "",
        address: "",
        address_2: "",
        fax: "",
        country: "",
        city: "",
        state: "",
        zip: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        handleSubmit,
      }) => (
        <SafeAreaView style={styles.container}>
          <Header navigation={navigation} />
          <ScrollView style={styles.scrollView}>
            <View style={styles.start}>
              <View style={styles.contentView}>
                <Text style={styles.h1}>Business</Text>
                <Text style={styles.h1m}>profile</Text>
              </View>
              <View style={styles.businessForm}>
                <View style={{ marginLeft: 14, marginRight:14}}>
                  <AnimatedInput
                    style={styles.input}
                    onChangeText={handleChange("company_name")}
                    value={values.company_name}
                    placeholder="Company"
                    styleBodyContent={{
                    borderBottomWidth: 12,
                    borderBottomColor: "#cf9e63",
                  }}
                  />
                </View>
                {errors.company_name && (
                  <Text style={styles.errorTxt}>{errors.company_name}</Text>
                )}

                <View style={{ marginLeft: 14, marginRight:14}}>
                <AnimatedInput
                  style={styles.input}
                  onChangeText={handleChange("year_in_business")}
                  value={values.year_in_business}
                  placeholder="Years in Business"
                  keyboardType="Years in Business"
                  styleBodyContent={{
                    borderBottomWidth: 12,
                    borderBottomColor: "#cf9e63",
                  }}
                />
                </View>
                {errors.year_in_business && (
                  <Text style={styles.errorTxt}>{errors.year_in_business}</Text>
                )}
                <View style={{ marginLeft: 14, marginRight:14}}>
                <AnimatedInput
                  style={styles.input}
                  onChangeText={handleChange("contact")}
                  value={values.contact}
                  placeholder="Contact"
                  keyboardType="Years in Business"
                   styleBodyContent={{
                    borderBottomWidth: 12,
                    borderBottomColor: "#cf9e63",
                  }}
                />
                </View>
                {errors.contact && (
                  <Text style={styles.errorTxt}>{errors.contact}</Text>
                )}
                <Picker
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }
                  style={{ marginLeft: 8, borderColor: "black" }}
                  onChangeText={handleChange("service_name")}
                  value={values.service_name}
                >
                  <Picker.Item label="Please Select a value" value="" />
                  <Picker.Item label="PartnerShip" value="PartnerShip" />
                  <Picker.Item label="Corporation" value="Corporation" />
                  <Picker.Item label="S corporation" value="S corporation" />
                  <Picker.Item label="LLC" value="LLC" />
                  <Picker.Item label="United Kingdom" value="United Kingdom" />
                  <Picker.Item
                    label="Sole Proprietorship"
                    value="Sole Proprietorship"
                  />
                </Picker>
                {errors.service_name && (
                  <Text style={styles.errorTxt}>{errors.service_name}</Text>
                )}

                <Picker
                  selectedValue={selectedLanguage1}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage1(itemValue)
                  }
                  style={{ marginLeft: 8 }}
                  onChangeText={handleChange("company_type")}
                  value={values.company_type}
                >
                  <Picker.Item label="Please Select a value" value="" />
                  <Picker.Item label="Distributer" value="Distributer" />
                  <Picker.Item label="Retailer" value="Retailer" />
                  <Picker.Item label="Wholesaler" value="Wholesaler" />
                  <Picker.Item
                    label="Other"
                    value="Other"
                    onChangeText={handle}
                  />
                </Picker>
                {errors.company_type && (
                  <Text style={styles.errorTxt}>{errors.company_type}</Text>
                )}

                {copynew.map(() => {

                   <View style={{ marginLeft: 14, marginRight:14}}>
                <AnimatedInput
                    style={styles.input}
                    onChangeText={handleChange("company_type_other")}
                    value={values.company_type_other}
                    keyboardType="Years in Business"
                     styleBodyContent={{
                    borderBottomWidth: 12,
                    borderBottomColor: "#cf9e63",
                  }}
                  />
                  </View>
                  {
                    errors.company_type_other && (
                      <Text style={styles.errorTxt}>
                        {errors.company_type_other}
                      </Text>
                    );
                  }
                })}

               <View style={{ marginLeft: 14, marginRight:14}}>
                <AnimatedInput
                  style={styles.input}
                  onChangeText={handleChange("phone")}
                  value={values.phone}
                  placeholder="Phone"
                  keyboardType="Years in Business"
                  styleBodyContent={{
                    borderBottomWidth: 12,
                    borderBottomColor: "#cf9e63",
                  }}
                />
                </View>
                {errors.phone && (
                  <Text style={styles.errorTxt}>{errors.phone}</Text>
                )}

                <View style={{ marginLeft: 14, marginRight:14}}>
                <AnimatedInput
                  style={styles.input}
                  onChangeText={handleChange("address")}
                  value={values.address}
                  placeholder="Address"
                  keyboardType="Years in Business"
                  styleBodyContent={{
                    borderBottomWidth: 12,
                    borderBottomColor: "#cf9e63",
                  }}
                />
                </View>
                {errors.address && (
                  <Text style={styles.errorTxt}>{errors.address}</Text>
                )}

                 <View style={{ marginLeft: 14, marginRight:14}}>
                <AnimatedInput
                  style={styles.input}
                  onChangeText={handleChange("address_2")}
                  value={values.address_2}
                  placeholder="Address2"
                  keyboardType="Years in Business"
                  styleBodyContent={{
                    borderBottomWidth: 12,
                    borderBottomColor: "#cf9e63",
                  }}
                />
                </View>
                {errors.address_2 && (
                  <Text style={styles.errorTxt}>{errors.address_2}</Text>
                )}

                 <View style={{ marginLeft: 14, marginRight:14}}>
                <AnimatedInput
                  style={styles.input}
                  onChangeText={handleChange("fax")}
                  value={values.fax}
                  placeholder="Fax"
                  keyboardType="Years in Business"
                   styleBodyContent={{
                    borderBottomWidth: 12,
                    borderBottomColor: "#cf9e63",
                  }}
                />
                </View>
                {errors.fax && (
                  <Text style={styles.errorTxt}>{errors.fax}</Text>
                )}
                <Picker
                  selectedValue={selectedLanguage2}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage2(itemValue)
                  }
                  style={{ marginLeft: 10 }}
                  onChangeText={handleChange("company_type")}
                  value={values.company_type}
                >
                  <Picker.Item label="Please Select a value" value="" />
                  <Picker.Item label="USA" value="USA" />
                  <Picker.Item label="San Jose" value="San Jose" />
                  <Picker.Item label="New York" value="New York" />
                </Picker>
                <View style={{ marginLeft: 14, marginRight:14}}>
                <AnimatedInput
                  style={styles.input}
                  onChangeText={handleChange("city")}
                  value={values.city}
                  placeholder="city"
                  keyboardType="Years in Business"
                  styleBodyContent={{
                    borderBottomWidth: 12,
                    borderBottomColor: "#cf9e63",
                  }}
                />
                </View>
                {errors.city && (
                  <Text style={styles.errorTxt}>{errors.city}</Text>
                )}
                 <View style={{ marginLeft: 14, marginRight:14}}>
                <AnimatedInput
                  style={styles.input}
                  onChangeText={handleChange("state")}
                  value={values.state}
                  placeholder="State"
                  keyboardType="Years in Business"
                  styleBodyContent={{
                    borderBottomWidth: 12,
                    borderBottomColor: "#cf9e63",
                  }}
                />
                </View>
                {errors.state && (
                  <Text style={styles.errorTxt}>{errors.state}</Text>
                )}

                <View style={{ marginLeft: 14, marginRight:14}}>
                <AnimatedInput
                  style={styles.input}
                  onChangeText={handleChange("zip")}
                  value={values.zip}
                  placeholder="Fax"
                  keyboardType="Years in Business"
                   styleBodyContent={{
                    borderBottomWidth: 12,
                    borderBottomColor: "#cf9e63",
                  }}
                />
                </View>
                {errors.zip && (
                  <Text style={styles.errorTxt}>{errors.zip}</Text>
                )}
                {/* <Pressable style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.btntext}>GET STATRTED</Text>
                </Pressable> */}

                <Pressable style={styles.button} onPress={() => navigation.navigate("CreateShipment")}>
                  <Text style={styles.btntext}>GET STATRTED</Text>
                </Pressable>

              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    // marginHorizontal: 20,
    marginTop: 110,
    padding: 10,
  },
  h1: {
    fontSize: 30,
    marginBottom: 28,
    color: "#b1aeae",
    fontWeight: "300",
  },
  h1m: {
    fontSize: 30,
    marginBottom: 28,
    fontWeight: "400",
    // lineHeight: 1.15
  },
  contentView: {
    paddingTop: 120,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginBottom: 20,
    borderStyle: "solid",
    borderBottomColor: "#6B6969",
  },

  start: {
    flex: 2,
    marginTop: -100,
  },

  businessForm: {
    borderRadius: 10,
    backgroundColor: "white",
    paddingBottom: 30,
    marginBottom: 25,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#cf9e63",
    marginTop: 28,
    marginLeft: 10,
    marginRight: 10,
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    padding: 5,
  },
  errorTxt: {
    color: "red",
    marginTop: -19,
    marginLeft: 15,
  },
});

export default BusinessProfile;
