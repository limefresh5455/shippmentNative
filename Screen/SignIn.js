import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Linking,
  Pressable,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.companyLogo}
          source={{
            uri: "https://shipwwt.com/wp-content/uploads/2022/11/cropped-wwt-global.png",
          }}
        />
        <Text
          style={styles.signUpLink}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign up
        </Text>
      </View>
      <View style={styles.signUpLink}></View>
      <View style={styles.loginForm}>
        <View style={styles.contentView}>
          <Text style={styles.title1}>Sign in to </Text>
          <Text style={styles.title}>your account</Text>
        </View>
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeNumber}
          //   value={number}
          placeholder="Username"
          keyboardType="Years in Business"
        />
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeNumber}
          //   value={number}
          placeholder="Password"
          keyboardType="Years in Business"
        />
        <Text style={styles.fgtPass}>Forget your password</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("BusinessProfile")}
      >
        <Text style={styles.btntext}>SIGN IN</Text>
      </Pressable>
      {/*<Text style={styles.heading1}>Or Continus with</Text>*/}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 30,
          color: "#4f4f4f",
          fontSize: 15,
        }}
      >
        <View
          style={{
            height: 1,
            backgroundColor: "black",
            marginLeft: 35,
            paddingRight: 80,
          }}
        />
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "#b1aeae",
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            Or Continus with
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "black",
            paddingLeft: 75,
            paddinRight: 100,
          }}
        />
      </View>
      <View style={styles.socialLogo}>
       <View style={styles.SquareShapeView} >
         <Pressable onPress={() => navigation.navigate("ConfirmEmail")}>
           <Icon name="google" size={40} color="#cc3333" />
         </Pressable>
       </View>
        <View style={styles.SquareShapeView2} >
         <Pressable onPress={() => navigation.navigate("ConfirmEmail")}>
          <Icon name="facebook" size={40} color="#3c63e2" />
         </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1e6",
  },
  title1: {
    fontSize: 28,
    marginBottom: 28,
    color: "#b1aeae",
    fontWeight: "400",
  },
  title: {
    fontSize: 28,
    marginBottom: 28,
    fontWeight: "400",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 35,
    paddingRight: 15,
    justifyContent: "space-between",
    paddingLeft: -65,
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
    borderBottomColor: "#57bdff",
  },
  heading1: {
    color: "#4f4f4f",
    fontSize: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 30,
  },
  fgtPass: {
    color: "#cf9e63",
    fontSize: 15,
    textAlign: "right",
    marginBottom: 15,
  },
  logo: {
    width: 50,
    height: 40,
    borderWidth: 4,
  },
  imgLogo: {
    display: "flex",
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 35,
  },
  companyLogo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
    marginRight: 20,
  },
  signUpLink: {
    paddingLeft: 25,
    color: "#cf9e63",
    marginTop: 8,
  },
  loginForm: {
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 150,
    justifyContent: "center",
  },

  button: {
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 10,
    // elevation: 3,
    backgroundColor: "#cf9e63",
    marginTop: 28,
    marginLeft: 35,
    width: 300,
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
  },
  socialLogo: {
    display: "flex",
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 90,
    paddingLeft: 30,
    marginLeft:60
  },
  contentView: {
    paddingLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  SquareShapeView: {
     width: 80,
    height: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#cc3333',
    paddingLeft:20,
    justifyContent:'center'
   },
  SquareShapeView2: {
     width: 80,
    height: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#3c63e2',
    paddingLeft:25,
    justifyContent:'center'
   },
});

export default SignIn;
