import { View, Text,TextInput,StyleSheet } from "react-native";
import React,{useState} from "react";
import { Picker } from "@react-native-picker/picker";

export default function SFD() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
   
    <View style={styles.formheight}>
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
        <Picker.Item label="Distributer" value="Distributer" />
        <Picker.Item label="Retailer" value="Retailer" />
        <Picker.Item label="Wholesaler" value="Wholesaler" />
        {/* <Picker.Item label="Other" value="Other" onChangeText={handle} /> */}
      </Picker>

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
        <Picker.Item label="Distributer" value="Distributer" />
        <Picker.Item label="Retailer" value="Retailer" />
        <Picker.Item label="Wholesaler" value="Wholesaler" />
        {/* <Picker.Item label="Other" value="Other" onChangeText={handle} /> */}
      </Picker>

      <TextInput
         style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        placeholder="Address"
        keyboardType="Years in Business"
      />


      <TextInput
         style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        placeholder="Address"
        keyboardType="Years in Business"
      />


      <TextInput
         style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        placeholder="Address"
        keyboardType="Years in Business"
      />


      <TextInput
         style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        placeholder="Address"
        keyboardType="Years in Business"
      />

      <TextInput
         style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        placeholder="Address"
        keyboardType="Years in Business"
      />


      <TextInput
         style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        placeholder="Address"
        keyboardType="Years in Business"
      />

      <TextInput
         style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        placeholder="Address"
        keyboardType="Years in Business"
      />

      <TextInput
         style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        placeholder="Address"
        keyboardType="Years in Business"
      />

      <TextInput
         style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        placeholder="Address"
        keyboardType="Years in Business"
      />

      <TextInput
         style={styles.input}
        //   onChangeText={handleChange("address")}
        //   value={values.address}
        placeholder="Address"
        keyboardType="Years in Business"
      />

      
    </View>
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
    marginBottom: 20,
    borderStyle: "solid",
    borderBottomColor: "#6B6969",
  },
  formheight:{
    overflow:"auto",
    height:200
  }
})
