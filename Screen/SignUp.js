import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik, yupToFormErrors } from "formik";
import AnimatedInput from "react-native-animated-input";
import * as Yup from "yup";
import Container from "react-native-container";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/;

const SignupSchema = Yup.object().shape({
  user_fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  user_lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  user_email: Yup.string().email("Invalid email").required("Required"),
  user_phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number is Required"),
  user_password: Yup.string()
    .required("Password is required")
    .min(5, "Your password is too short.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  user_cpassword: Yup.string().required("Password is required"),
  // .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignUp = ({ navigation }) => {

  
  const handleSubmit = (values) => {
    // alert("Hii!")
    const user = {
      user_fname: values.user_fname,
      user_lname: values.user_lname,
      user_email: values.user_email,
      user_phone: values.user_phone,
      user_password: values.user_password,
    };
    fetch(
      "https://shipwwt.com/wp-json/wp/v2/shipwwt-register-user-by-email-password/",
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
          navigation.navigate("ConfirmEmail");
        } else {
          alert(data.data.response);
        }
      })
      .catch((e) => {
        console.log("errors", e);
      });
  };

  return (
    <Formik
      initialValues={{
        user_fname: "",
        user_lname: "",
        user_email: "",
        user_phone: "",
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
        <Container>
          <KeyboardAwareScrollView>
            <SafeAreaView style={styles.container}>
              <View style={styles.SquareShapeView}>
                <View style={styles.header}>
                  <Image
                    style={styles.companyLogo}
                    source={{
                      uri: "https://shipwwt.com/wp-content/uploads/2022/11/cropped-wwt-global.png",
                    }}
                  />
                  <Text
                    style={styles.text}
                    onPress={() => navigation.navigate("SignIn")}
                  >
                    Sign in
                  </Text>
                </View>
              </View>

              <View style={styles.contentView}>
                <Text style={styles.h1}>
                  Create your {"\n"}Star8ship
                  <Text style={styles.h1m}>account</Text>
                </Text>
              </View>
              <View style={styles.loginForm}>
                <View style={{ marginLeft: 11, marginRight: 8 }}>
                  <AnimatedInput
                    style={styles.input}
                    onChangeText={handleChange("user_fname")}
                    value={values.user_fname}
                    placeholder="First name"
                    keyboardType="Years in Business"
                    styleBodyContent={{
                    borderBottomWidth: 8,
                    borderBottomColor: "#57bdff",
                  }}
                  styleInput={{ height:22}}
                  />
                </View>
                {errors.user_fname && (
                  <Text style={styles.errorTxt}>{errors.user_fname}</Text>
                )}

                <View style={{ marginLeft: 11, marginRight: 8 }}>
                  <AnimatedInput
                    style={styles.input}
                    onChangeText={handleChange("user_lname")}
                    value={values.user_lname}
                    placeholder="Last name"
                    keyboardType="Years in Business"
                    styleBodyContent={{
                    borderBottomWidth: 8,
                    borderBottomColor: "#57bdff",
                  }}
                  styleInput={{ height:22}}
                  />
                </View>
                {errors.user_lname && (
                  <Text style={styles.errorTxt}>{errors.user_lname}</Text>
                )}

                <View style={{ marginLeft: 11, marginRight: 8 }}>
                  <AnimatedInput
                    style={styles.input}
                    onChangeText={handleChange("user_email")}
                    value={values.user_email}
                    placeholder="Email"
                    keyboardType="Years in Business"
                    styleBodyContent={{
                    borderBottomWidth: 8,
                    borderBottomColor: "#57bdff",
                  }}
                  styleInput={{ height:22}}
                  />
                </View>
                {errors.user_email && (
                  <Text style={styles.errorTxt}>{errors.user_email}</Text>
                )}

                <View style={{ marginLeft: 11, marginRight: 8 }}>
                  <AnimatedInput
                    style={styles.input}
                    onChangeText={handleChange("user_phone")}
                    value={values.user_phone}
                    placeholder="Phone number"
                    keyboardType="Years in Business"
                    styleBodyContent={{
                    borderBottomWidth: 8,
                    borderBottomColor: "#57bdff",
                  }}
                  styleInput={{ height:22}}
                  />
                </View>
                {errors.user_phone && (
                  <Text style={styles.errorTxt}>{errors.user_phone}</Text>
                )}

                <View style={{ marginLeft: 11, marginRight: 8 }}>
                  <AnimatedInput
                    style={styles.input}
                    onChangeText={handleChange("user_password")}
                    value={values.user_password}
                    placeholder="Password"
                    keyboardType="Years in Business"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    enablesReturnKeyAutomatically
                    styleBodyContent={{
                    borderBottomWidth: 8,
                    borderBottomColor: "#57bdff",
                  }}
                  styleInput={{ height:22}}
                  />
                </View>
                {errors.user_password && (
                  <Text style={styles.errorTxt}>{errors.user_password}</Text>
                )}

                <View style={{ marginLeft: 11, marginRight: 8 }}>
                  <AnimatedInput
                    style={styles.input}
                    onChangeText={handleChange("user_cpassword")}
                    value={values.user_cpassword}
                    placeholder="Confirm Password"
                    keyboardType="Years in Business"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    enablesReturnKeyAutomatically
                    styleBodyContent={{
                    borderBottomWidth: 8,
                    borderBottomColor: "#57bdff",
                  }}
                  styleInput={{ height:22}}
                  />
                </View>
                {errors.user_cpassword && (
                  <Text style={styles.errorTxt}>{errors.user_cpassword}</Text>
                )}

                <TouchableOpacity onPress={handleSubmit} style={styles.btntext}>
                  <Text style={styles.center}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </KeyboardAwareScrollView>
        </Container>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1e6",
    padding: 20,
  },
  // scrollView: {
  //   marginHorizontal: 8,
  // },
  SquareShapeView: {
    width: "100%",
    height: 80,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#FFFFFF",
    marginTop: 8,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  companyLogo: {
    width: 100,
    height: 60,
    resizeMode: "contain",
    backgroundColor: "fbf1e6",
  },
  text: {
    color: "#d89d68",
  //  marginRight: 70,
    fontSize: 17,
    fontWeight: "400",
  },
  contentView: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
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
    marginLeft: -40,
    color: "black",
  },
  loginForm: {
    justifyContent: "center",
    marginTop: -20,
    borderRadius: 9,
  },
  input: {
    paddingHorizontal: 20,
    paddingLeft: 100,
    marginLeft: 150,
    marginRight: 20,
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cf9e63",
    padding: 14,
    borderRadius: 10,
  },

  center: {
    justifyContent: "center",
  },

  errorTxt: {
    color: "red",
    marginTop: -19,
    marginLeft: 12,
  },
});
export default SignUp;
