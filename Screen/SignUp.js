import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.SquareShapeView} >
    <View style={styles.header}>
   <Text >
     <Icon name="arrow-left" size={30} color="#b1aeae" />
   </Text>
   <Image
     style={styles.companyLogo}
     source={{
       uri: "https://shipwwt.com/wp-content/uploads/2022/11/cropped-wwt-global.png",
     }}
   />
   <Text>
     <Icon name="user" size={40} color="#b1aeae" />
   </Text>
  </View>
 </View>

      <View style={styles.contentView}>
        <Text style={styles.h1}>Create your {"\n"}Star8ship</Text>
        <Text style={styles.h1m}>{"\n"}account</Text>
      </View>
      <View style={styles.loginForm}>
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeNumber}
          //   value={number}
          placeholder="First name"
          keyboardType="Years in Business"
        />
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeNumber}
          //   value={number}
          placeholder="Last name"
          keyboardType="Years in Business"
        />
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeNumber}
          //   value={number}
          placeholder="Email"
          keyboardType="Years in Business"
        />
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeNumber}
          //   value={number}
          placeholder="Phone number"
          keyboardType="Years in Business"
        />
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeNumber}
          //   value={number}
          placeholder="Password"
          keyboardType="Years in Business"
        />
        <TextInput
        style={styles.input}
        //   onChangeText={onChangeNumber}
        //   value={number}
        placeholder="Confirm Password"
        keyboardType="Years in Business"
      />
      <Pressable style={styles.button} onPress={""}>
      <Text style={styles.btntext}>CREATE ACCOUNT</Text>
    </Pressable>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { backgroundColor: "#fbf1e6" },

  companyLogo: {
    width: 100,
    height: 60,
    resizeMode: "contain",
    // marginTop: 25,
  },
    signUpLink: {
    paddingRight: 15,
    paddingLeft: 150,
    paddingTop: 20,
    color: "#cf9e63",
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
    fontWeight: "250",
    marginRight: 20,
    fontWeight: "bold",
    textAlign: "right",
    paddingRight: 5,
    // lineHeight: 1.15
  },
  contentView: {
    paddingTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  loginForm: {
    justifyContent: "center",
    marginTop: -60,
    marginTop: 25,
    borderRadius: 9,
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
    paddingTop:5,
    borderStyle: "solid",
    borderBottomColor: "#57bdff",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
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
  scrollView: {
    marginHorizontal: 8,
  },
  SquareShapeView: {
    marginTop:20,
    width:380,
    height: 80,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    backgroundColor:'rgb(255,250,240)'
    // paddingLeft:20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 25,
    paddingRight: 15,
    justifyContent: "space-between",
    paddingLeft: -65,
  },
});
export default SignUp;
