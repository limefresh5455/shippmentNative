import { View, Text, StyleSheet, SafeAreaView, Image, Button } from "react-native";
import React from "react";
import Header from "./Header";
import Icon from "react-native-vector-icons/FontAwesome";
import SignIn from "./SignIn";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
const ConfirmEmail = ({ navigation }) => {


    const showMessage =() => {
          //  navigation.navigate("SignIn");
          alert("hii...")
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.SquareShapeView}>
        <View style={styles.header}>
          <Text
            style={{ paddingLeft: 20, paddingTop: 15 }}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={20} color="#b1aeae" />
          </Text>
          <Image
            style={styles.companyLogo}
            source={{
              uri: "https://shipwwt.com/wp-content/uploads/2022/11/cropped-wwt-global.png",
            }}
          />
          <Text style={{ paddingRight: 20, paddingBottom: 8, paddingTop: 15 }}>
            <Icon name="user" size={20} color="#b1aeae" />
          </Text>
        </View>
      </View>

      <View style={styles.dialougeBox}>
        <View style={styles.mailBox}>
          <View style={styles.contentView}>
            <Text style={styles.h1}>
              Confirm your{"\n"} email
              <Text style={styles.h1m}>address</Text>
            </Text>
          </View>
          <Text style={styles.innercontentView}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>
      <View >
        <Text
         style={styles.skipContent}
        onPress={showMessage}  
        >Skip this step</Text>
      </View>
    </SafeAreaView>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1e6",
  },
  dialougeBox: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop:125,
  },
  companyLogo: {
    width: 120,
    height: 50,
    resizeMode: "contain",
    marginBottom: 105,
  },
  mailBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: 10,
  },
  h1: {
    fontSize: 30,
    marginBottom: 28,
    color: "#b1aeae",
    fontWeight: "300",
    textAlign:"center"
  },
  h1m: {
   fontSize: 30,
    fontWeight: "250",
    marginRight: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingRight: 5,
    marginLeft: -40,
    color: "black",
  },
  contentView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  innercontentView: {
   textAlign : "center",
  marginTop: -45,
  padding: 20
  
  },
  skipContent: {
    marginTop: 90, 
    color: "#cf9e63", 
    marginLeft: 135, 
  },
  SquareShapeView: {
    marginTop: 20, 
    width: 380, 
    height: 80, 
    borderRadius: 12, 
    borderWidth: 0.5, 
    borderColor: "#EDE6D6", 
    paddingBottom: 30, 
  },
  header: {
    display: "flex", 
    flexDirection: "row", 
    marginTop: 20, 
    paddingRight: 15, 
    justifyContent: "space-between", 
    paddingLeft: -65, 
    shadowColor: "blue", 
  },
});
export default ConfirmEmail;
