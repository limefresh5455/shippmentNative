import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  Pressable,
} from "react-native";
import AnimatedInput from "react-native-animated-input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";

const SignupSchema = Yup.object().shape({
  user_email: Yup.string().email("Invalid email").required("Email is Required"),
  user_password: Yup.string()
    .required("Password is required")
    .min(5, "Your password is too short.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const SignIn = ({ navigation }) => {
  function handleSubmit(values) {
    const user = {
      user_email: values.user_email,
      user_password: values.user_password,
    };
    console.log(JSON.stringify(user));
    fetch(
      "https://shipwwt.com/wp-json/wp/v2/shipwwt-login-user-by-email-password/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((response) => response.json())
      .then(async (data) => {
        if (data.status === true) {
          alert(data.msg);
          navigation.navigate("ShipmentProgressStep");
          await AsyncStorage.setItem(
            "userdata",
            JSON.stringify(data.data.user_id)
          );
        } else {
          alert(data.data.response);
        }
      })
      .catch((e) => {
        console.log("errors", e);
      });
  }

  return (
    <Formik
      initialValues={{
        user_email: "",
        user_password: "",
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
        <View style={styles.container}>
          <KeyboardAwareScrollView>
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
              <Text
                style={styles.bp}
                onPress={() => navigation.navigate("BusinessProfile")}
              >
                Business Profile
              </Text>
              <View style={styles.contentView}>
                <Text style={styles.title1}>Sign in to </Text>
                <Text style={styles.title}>your</Text>
              </View>
              <Text style={styles.titles}>account</Text>
              <View style={{ marginLeft: 14, marginTop: 10 }}>
                <AnimatedInput
                  style={styles.input}
                  onChangeText={handleChange("user_email")}
                  value={values.user_email}
                  placeholder="Email"
                  styleBodyContent={{
                    borderBottomWidth: 8,
                    borderBottomColor: "#57bdff",
                  }}
                  styleInput={{ height: 22 }}
                />
              </View>
              {errors.user_email && (
                <Text style={styles.errorTxt}>{errors.user_email}</Text>
              )}
              <View style={{ marginLeft: 14, marginTop: 10 }}>
                <AnimatedInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={handleChange("user_password")}
                  value={values.user_password}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  enablesReturnKeyAutomatically
                  styleBodyContent={{
                    borderBottomWidth: 8,
                    borderBottomColor: "#57bdff",
                  }}
                  styleInput={{ height: 22 }}
                />
              </View>
              {errors.user_password && (
                <Text style={styles.errorTxt}>{errors.user_password}</Text>
              )}
              <Text style={styles.fgtPass}>Forget your password?</Text>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.btntext}>SIGN IN</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("BusinessProfile")}
              >
                <Text style={styles.btntext}>SIGN IN</Text>
              </TouchableOpacity> */}
            </View>
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
                  marginLeft: 1,
                  paddingRight: 120,
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
                  paddingLeft: 120,
                  // paddinRight: 150,
                }}
              />
            </View>
            <View style={styles.socialLogo}>
              <View style={styles.SquareShapeView}>
                <Pressable onPress={() => navigation.navigate("ConfirmEmail")}>
                  <Icon name="google" size={40} color="#cc3333" />
                </Pressable>
              </View>

              <View style={styles.SquareShapeView2}>
                <Pressable onPress={() => navigation.navigate("ConfirmEmail")}>
                  <Icon name="facebook" size={40} color="#3c63e2" />
                </Pressable>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1e6",
    padding: 9,
  },
    bp: {
    color: "#cf9e63",
    fontSize: 15,
    textAlign: "left",
    marginTop:-55,
    marginBottom:40,
    marginLeft:13
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
  titles: {
    fontSize: 28,
    fontWeight: "400",
    marginLeft: 10,
    marginTop: -30,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 18,
    padding: 18,
    marginRight: 10,
    justifyContent: "space-between",
    marginLeft: 5,
  },
  input: {
    paddingHorizontal: 100,
    paddingLeft: 100,
    marginLeft: 150,
    marginRight: 20,
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
    marginRight: -5,
    marginTop: 9,
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
    fontSize: 17,
    fontWeight: "400",
  },
  loginForm: {
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 40,
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 20,
  },

  button: {
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 18,
    // elevation: 3,
    backgroundColor: "#CE9D62",
    marginTop: 28,
    marginLeft: 6,
    width: "100%",
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
    padding: 8,
  },
  socialLogo: {
    display: "flex",
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 85,
    paddingLeft: 85,
    // marginLeft: 60,
  },
  contentView: {
    paddingLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  SquareShapeView: {
    width: 80,
    height: 50,
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: "#cc3333",
    paddingLeft: 20,
    justifyContent: "center",
  },
  SquareShapeView2: {
    width: 80,
    height: 50,
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: "#3c63e2",
    paddingLeft: 25,
    justifyContent: "center",
  },

  errorTxt: {
    color: "red",
    marginTop: -19,
    marginLeft: 15,
  },
});

export default SignIn;
