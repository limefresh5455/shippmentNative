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
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "./Header";

const BusinessProfile = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <SafeAreaView style={styles.container}>
         <Header navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentView}>
          <Text style={styles.h1}>Business</Text>
          <Text style={styles.h1m}>profile</Text>
        </View>
        <View style={styles.businessForm}>
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeText}
            //   value={text}
            placeholder="company"
          />
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Years in Business"
            keyboardType="Years in Business"
          />
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Contact"
            keyboardType="Years in Business"
          />
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Contact"
            keyboardType="Years in Business"
          />
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="PartnerShip" value="java" />
            <Picker.Item label="Corporation" value="js" />
            <Picker.Item label="S corporation" value="js" />
            <Picker.Item label="LLC" value="js" />
            <Picker.Item label="United Kindom"value="js"/>
            <Picker.Item label="Sole Propritosj"value="js"/>
          </Picker>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Distributer" value="java" />
            <Picker.Item label="Retailer" value="js" />
            <Picker.Item label="Wholesaler" value="java" />
            <Picker.Item label="Other" value="js" />
          </Picker>
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Contact"
            keyboardType="Years in Business"
          />
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Address"
            keyboardType="Years in Business"
          />
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Phone"
            keyboardType="Years in Business"
          />
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Address2"
            keyboardType="Years in Business"
          />
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Fax"
            keyboardType="Years in Business"
          />
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="USA" value="java" />
            <Picker.Item label="San Jose" value="js" />
            <Picker.Item label="New York" value="java" />
          </Picker>
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="El Cajon"
            keyboardType="Years in Business"
          />
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="State"
            keyboardType="Years in Business"
          />
          <Pressable style={styles.button} onPress={() =>navigation.navigate("CreateShipment")}>
            <Text style={styles.btntext}>GET STATRTED</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1e6",
  },
  scrollView: {
    marginHorizontal: 20,
    marginTop:110
  },
  h1: {
    fontSize: 25,
    marginBottom: 28,
    color: "#b1aeae",
    fontWeight: "300",
  },
  h1m: {
    fontSize: 25,
    marginBottom: 28,
    fontWeight: "300",
    // lineHeight: 1.15
  },
  contentView: {
    paddingTop: 30,
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
  businessForm: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingBottom: 30,
    marginBottom:25
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
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default BusinessProfile;
