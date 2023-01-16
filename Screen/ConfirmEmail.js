import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const ConfirmEmail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.companyLogo}
        source={{
          uri: "https://shipwwt.com/wp-content/uploads/2022/11/cropped-wwt-global.png",
        }}
      />
      <View style={styles.dialougeBox}>
       <View style={styles.mailBox}>
          <View style={styles.mailIcone}>
             <Icon name="user" size={30} color="#d6ac78" />
          </View>
        <View style={styles.contentView} >
          <Text style={styles.h1}>Confirm your{"\n"} email</Text>
          <Text style={styles.h1m}>{"\n"}address</Text>
        </View>
        <Text style={styles.innercontentView} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        </View>
      </View>
      <View >
      <Text style={styles.skipContent} >Skip this Step</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1e6",
  },
  dialougeBox:{
    paddingLeft:15,
    paddingRight:15,
    marginTop:130
  },
  companyLogo: {
    width: 100,
    height: 60,
    resizeMode: "contain",
    marginLeft: 130,
    marginTop: 25,
  },
  mailBox: {
    marginTop:90,
    paddingTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius:10,
   
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
    alignItems:'center'
    // lineHeight: 1.15
  },
  contentView: {
    paddingTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  innercontentView:{
    paddingLeft:15,
    paddingRight:15, 
    paddingBottom:15
  },
  skipContent:{
    marginTop:70,
    color: "#cf9e63",
    marginLeft:135
  }
});
export default ConfirmEmail;
