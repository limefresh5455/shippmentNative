import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import SignIn from "./Screen/SignIn";
import BusinessProfile from "./Screen/BusinessProfile";
import ConfirmEmail from "./Screen/ConfirmEmail";
import SignUp from "./Screen/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConfirmShipment from "./Screen/ConfirmShipment";
import SubmitShipment from "./Screen/SubmitShipment";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DownloadShipment from "./Screen/DownloadShipment";
import Header from "./Screen/Header";
import ShipmentProgressStep from "./Screen/ShipmentProgressStep";
import ShipmentInfo from "./Screen/ShipmentInfo";
import CreateShipment from "./Screen/CreateShipment";
import Trial from "./Screen/Trial";
import DetailClient from "./Screen/OrderDetails";
import PaymentModal from "./Screen/PaymentModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Demo from "./Screen/Demo";
// import Tabs from './Screen/Tabs';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName="SignIn">
    //       <Stack.Screen
    //         name="SignIn"
    //         component={SignIn}
    //         options={{ headerShown: false }}
    //       />
    //       <Stack.Screen
    //         name="SignUp"
    //         component={SignUp}
    //         options={{ headerShown: false, headerBackTitleVisible: false }}

    //       />
    //       <Stack.Screen
    //         name="BusinessProfile"
    //         component={BusinessProfile}
    //         options={{ headerShown: false }}
    //       />
    //       <Stack.Screen
    //         name="ShipmentProgressStep"
    //         component={ShipmentProgressStep}
    //         options={{ headerShown: false }}
    //       />
    //       {/* <Stack.Screen
    //         name="ShipmentInfo"
    //         component={ShipmentInfo}
    //         options={{ headerShown: false }}
    //       /> */}
    //       <Stack.Screen
    //         name="ConfirmShipment"
    //         component={ConfirmShipment}
    //         options={{ headerShown: false }}
    //       />
    //       <Stack.Screen
    //         name="Submit"
    //         component={SubmitShipment}
    //         options={{ headerShown: false }}
    //       />
    //       <Stack.Screen
    //         name="ConfirmEmail"
    //         component={ConfirmEmail}
    //         options={{ headerShown: false }}
    //       />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </SafeAreaProvider>

    //  <BusinessProfile/>
       <Demo/>
    //   <ShipmentProgressStep />
    //  <Trial/>
    //   <CreateShipment/>
    //  <BusinessProfile1/>
    //   <ShipmentInfo/>
    //    <DownloadShipment/>
    //   <SignIn/>
    //    <DetailClient/>
     
   // <PaymentModal/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1e6",
  },
});

// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   Image,
//   Linking,
//   Pressable,
//   SafeAreaView,
//   Dimensions,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import Slideshow from "react-native-image-slider-show";
// import React, { useState, useEffect } from "react";
// import { Picker } from "@react-native-picker/picker";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Card } from "react-native-shadow-cards";
// import AnimatedInput from "react-native-animated-input";
// import DatePicker from "react-native-datepicker";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import Carousel from "react-native-snap-carousel";
// import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// // import DatePicker from "react-native-modern-datepicker";

// const data = [
//   {
//     imgUrl:
//       "https://www.axisbank.com/images/default-source/default-album/ace-credit-card.jpg",
//   },
//   {
//     imgUrl:
//       "https://1.bp.blogspot.com/-vbR02D5OHjs/XTxr17QOLaI/AAAAAAAAARE/11BvbYw9ZI84U-Jwjs2Z29Z3aWLwgNp7wCLcBGAs/s1600/Axis%2BBank%2BRewards%2BPlus.jpg",
//   },
// ];

// const Trial = () => {
//   //DateTimePicker
//   //  const [selectedDate, setSelectedDate] = useState("");
//   const [selectedValue, setSelectedValue] = useState();
//   const [serviceDetails, setserviceDetails] = useState([]);
//   const [selectedValue1, setSelectedValue1] = useState();
//   const [packagingDetails, setpackagingDetails] = useState([]);
//   const [objectId, setObjectId] = useState([]);
//   const [weight, setWeight] = useState("");
//   const [mass, setMass] = useState("");
//   const [deliveryConfirmation, setDeliveryConfirmation] = useState("");
//   const [position, setPosition] = useState(0);
//   const [formData, setFormData] = useState({
//     service: "",
//     packaging: "",
//     weight: "",
//     mass: "",
//     item: "",
//     signature: "",
//     USdollar: "",
//     carrier: ""
//   });

//   console.log("objectid", objectId);

//   AsyncStorage.setItem("objectid", JSON.stringify(objectId));

//   const handleWeightChange = (weight) =>{
//       setFormData({ ...formData, weight });
//   }

//   const handleItemChange = (item) =>{
//       setFormData({ ...formData, item });
//   }

//   const handleUSdollarChange = (USdollar) =>{
//       setFormData({ ...formData, USdollar });
//   }

//   //console.log("formData",formData);

//   const handlePress = async(value) => {

//     //------- Carrier --------//
//     await AsyncStorage.setItem("Carrier", value);
//     //-------- Carrier --------//

//     // console.log(value)
//     fetch(
//       "https://api.goshippo.com/carrier_accounts/?carrier=" +
//         value +
//         "&service_levels=1",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:
//             "ShippoToken shippo_test_385ed1b28f50d525d8b9088ac3cbaed1bc9b8ff2",
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setserviceDetails(data.results[0].service_levels);
//         // console.log(data.results[data.results.length-1].object_id);
//         setObjectId(data.results[data.results.length - 1].object_id);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });

//     fetch("https://api.goshippo.com/parcel-templates?carrier=" + value, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization:
//           "ShippoToken shippo_test_385ed1b28f50d525d8b9088ac3cbaed1bc9b8ff2",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log("data - ", data.results);
//         setpackagingDetails(data.results);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });

//       // New Packaging Details Post API
//       fetch("https://apis-sandbox.fedex.com/rate/v1/rates/quotes",{
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:
//             "ShippoToken shippo_test_385ed1b28f50d525d8b9088ac3cbaed1bc9b8ff2",
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // console.log("data - ", data.results);
//           setpackagingDetails(data.results);
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//         });
//   };

//   const serviceList = () => {
//     // console.log(serviceDetails)
//     return serviceDetails.map((service,i) => {
//       return <Picker.Item key={i} label={service.name} value={service.name} />;
//     });
//   };

//   const packageList = () => {
//     // console.log("asddjfdjfd")
//     return packagingDetails.map((service,i) => {
//       return <Picker.Item key={i} label={service.name} value={service.name} />;
//     });
//   };
// useEffect( ()=>{
//   AsyncStorage.setItem('user',JSON.stringify(formData));
//  console.log("formdata1",formData);
// },[formData])

//   useEffect(() => {
//     const toggle = setInterval(() => {
//       setPosition(position === data.length - 1 ? 0 : position + 1);
//     }, 3000);

//     return () => clearInterval(toggle);
//   });

//   const isCarousel = React.useRef(null);

// const packagingOnchange = (value, index) => {
//    AsyncStorage.setItem(
//      "packaging",
//      JSON.stringify(packagingDetails[index - 1])
//    );
//   setSelectedValue1(value);
// };

// const serviceOnchange = (value, index) => {
//   AsyncStorage.setItem("service", JSON.stringify(serviceDetails[index - 1]));
//   setSelectedValue(value);
// };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         <View style={styles.businessForm}>
//           <View style={styles.formTitle}>
//             <Text style={styles.formTitleh1}>Package info</Text>
//           </View>

//           <View style={styles.flex}>
//             <TouchableOpacity
//               onPress={() => handlePress("fedex")}
//               // style={{
//               //   borderColor: "black",
//               //   borderBottomWidth: 1,
//               //   borderRightWidth: 1,
//               //   borderTopWidth: 1,
//               //   borderLeftWidth: 1,
//               //   borderRadius: 9,
//               // }}
//             >
//               <Card style={styles.cards}>
//                 <View style={styles.card}>
//                   <Image
//                     source={require("../assets/img/ups.png")}
//                     style={styles.img}
//                   />
//                   <Text style={styles.text}>FedEx</Text>
//                 </View>
//               </Card>
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={() => handlePress("ups")}
//               // style={{
//               //   borderColor: "black",
//               //   borderBottomWidth: 1,
//               //   borderRightWidth: 1,
//               //   borderTopWidth: 1,
//               //   borderLeftWidth: 1,
//               //   borderRadius: 9,
//               // }}
//             >
//               <Card style={styles.cards}>
//                 <View style={styles.card}>
//                   <Image
//                     source={require("../assets/img/ups.png")}
//                     style={styles.img}
//                   />
//                   <Text style={styles.text}>UPS</Text>
//                 </View>
//               </Card>
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={() => handlePress("usps")}
//               // style={{
//               //   borderBottomWidth: 1,
//               //   borderRightWidth: 1,
//               //   borderTopWidth: 1,
//               //   borderLeftWidth: 1,
//               //   borderRadius: 9,
//               // }}
//             >
//               <Card style={styles.cards}>
//                 <View style={styles.card}>
//                   <Image
//                     source={require("../assets/img/ups.png")}
//                     style={styles.img}
//                   />
//                   <Text style={styles.text}>USPS</Text>
//                 </View>
//               </Card>
//             </TouchableOpacity>
//           </View>

//           <View>
//             <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
//               Service Type
//             </Text>
//             <Picker
//               selectedValue={selectedValue}
//               onValueChange={(itemValue, itemIndex) => {
//                 serviceOnchange(itemValue, itemIndex);
//                 setFormData({ ...formData, service: itemValue });
//               }}
//               style={{ marginLeft: 8, borderColor: "black" }}
//               value={formData.service}
//             >
//               <Picker.Item label="Select Service type" value="" />
//               {serviceList()}
//             </Picker>
//             <Text style={styles.inputs}></Text>

//             <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
//               Packaging
//             </Text>
//             <Picker
//               selectedValue={selectedValue1}
//               onValueChange={(itemValue, itemIndex) => {
//                 packagingOnchange(itemValue, itemIndex);
//                 setFormData({ ...formData, packaging: itemValue });
//               }}
//               style={{ marginLeft: 8, borderColor: "black" }}
//               value={formData.packaging}
//             >
//               <Picker.Item label="Select Packaging" value="" />
//               {packageList()}
//             </Picker>
//             <Text style={styles.inputs}></Text>

//             <TextInput
//               style={styles.input1}
//               placeholder="Avg. weight"
//               keyboardType="numeric"
//               onChangeText={handleWeightChange}
//               value={formData.weight}
//             />
//             <Picker
//               selectedValue={mass}
//               onValueChange={(itemValue, itemIndex) => {
//                 setMass(itemValue);
//                 setFormData({ ...formData, mass: itemValue });
//               }}
//               style={{
//                 marginLeft: 8,
//                 borderColor: "black",
//                 marginBottom: 25,
//                 marginTop: -25,
//               }}
//               value={formData.mass}
//             >
//               <Picker.Item label="Select Mass Unit" value="" />
//               <Picker.Item label="lb" value="lb" />
//               <Picker.Item label="oz" value="oz" />
//               <Picker.Item label="g" value="g" />
//               <Picker.Item label="kg" value="kg" />
//             </Picker>

//             {/* <DatePicker onSelectedChange={(date) => setSelectedDate(date)} /> */}

//             <Text
//               style={{
//                 marginLeft: 18,
//                 marginBottom: -10,
//                 color: "#8d9092",
//               }}
//             >
//               Reference(Will not show on label)
//             </Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Item Description"
//               keyboardType="Years in Business"
//               onChangeText={handleItemChange}
//               value={formData.item}
//             />

//             <Text style={{ marginLeft: 16, marginTop: 20, color: "#8d9092" }}>
//               Delivery confirmation
//             </Text>
//             <Picker
//               selectedValue={deliveryConfirmation}
//               onValueChange={(itemValue, itemIndex) => {
//                 setDeliveryConfirmation(itemValue);
//                 setFormData({ ...formData, signature: itemValue });
//               }}
//               style={{ marginLeft: 8, borderColor: "black" }}
//               value={formData.signature}
//             >
//               <Picker.Item label="Select No. of packages" value="" />
//               <Picker.Item
//                 label="Signature required"
//                 value="Signature required"
//               />
//               <Picker.Item label="Demo" value="Demo" />
//             </Picker>
//             <Text style={styles.inputs}></Text>

//             <Text
//               style={{
//                 marginTop: 20,
//                 marginLeft: 18,
//                 marginBottom: -10,
//                 color: "#8d9092",
//               }}
//             >
//               Insured value of package
//             </Text>
//             <TextInput
//               style={styles.input}
//               placeholder="$ 1.00 (US Dollar)"
//               inlineImageLeft="search"
//               keyboardType="numeric"
//               onChangeText={handleUSdollarChange}
//               value={formData.USdollar}
//               Image={"\u0024"}
//             />

//             {/* <View style={styles.flex}>
//               <Text style={{ fontSize: 20 }}>Amount pay from</Text>
//               <Text style={{ fontSize: 17, marginTop: 5, color: "#e3b993" }}>
//                 Add New
//               </Text>
//             </View>

//             <View style={styles.slide}>
//               <Carousel
//                 layout="default"
//                 layoutCardOffset={9}
//                 ref={isCarousel}
//                 data={data}
//                 renderItem={CarouselCardItem}
//                 sliderWidth={340}
//                 itemWidth={330}
//                 inactiveSlideShift={0}
//                 useScrollView={true}
//                 style={{ position: "absolute" }}
//               />
//             </View> */}
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },

//   header: {
//     display: "flex",
//     flexDirection: "row",
//     marginTop: 5,
//     paddingLeft: 20,
//     justifyContent: "space-between",
//     paddingLeft: -60,
//     borderRadius: 10,
//     paddingRight: 15,
//   },

//   inputs: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderTopWidth: 0,
//     borderRightWidth: 0,
//     borderLeftWidth: 0,
//     marginTop: -48,

//     borderBottomColor: "#c7bdbd",
//   },

//   companyLogo: {
//     width: 100,
//     height: 60,
//     resizeMode: "contain",
//   },

//   scrollView: {
//     marginTop: -30,
//     padding: 10,
//   },

//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderTopWidth: 0,
//     borderRightWidth: 0,
//     borderLeftWidth: 0,
//     marginBottom: 20,
//     borderStyle: "solid",
//     borderBottomColor: "#6B6969",
//     marginLeft: 14,
//     marginRight: 13,
//   },

//   input1: {
//     height: 40,
//     margin: 12,
//     padding: 10,
//     marginBottom: 20,
//     borderStyle: "solid",
//     borderBottomColor: "#6B6969",
//     borderWidth: 1,
//     borderTopWidth: 1,
//     borderRightWidth: 1,
//     borderLeftWidth: 1,
//     marginLeft: 14,
//     marginRight: 13,
//     marginTop: 28,
//   },

//   businessForm: {
//     backgroundColor: "white",
//     borderRadius: 10,
//     paddingBottom: 26,
//   },

//   flex: {
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     margin: 20,
//   },

//   txt: {
//     fontSize: 20,
//     fontWeight: 300,
//   },

//   cards: {
//     width: 93,
//     height: 120,
//     borderRadius: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     borderColor: "HEX",
//   },

//   card: {
//     padding: 10,
//   },

//   text: {
//     fontSize: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     alignContent: "center",
//   },

//   img: {
//     width: 50,
//     height: 60,
//     justifyContent: "center",
//   },

//   formTitle: {
//     paddingTop: 30,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     paddingLeft: 15,
//   },

//   formTitleh1: {
//     fontSize: 30,
//     fontWeight: "500",
//   },

//   formTitleh2: {
//     fontSize: 25,
//     marginBottom: 28,
//     color: "#b1aeae",
//     fontWeight: "400",
//     paddingLeft: 55,
//   },

//   iconAligen: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 25,
//   },

//   label: {
//     paddingLeft: 10,
//     color: "gray",
//     textAlign: "left",
//   },

//   labelHead: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },

//   SquareShapeView: {
//     marginTop: 20,
//     width: 380,
//     height: 80,
//     borderRadius: 10,
//     borderWidth: 0.5,
//     borderColor: "#FFFFFF",
//     backgroundColor: "rgb(255,250,240)",
//   },

//   imagess: {
//     justifyContent: "space-between",
//   },

//   slide: {
//     justifyContent: "space-between",
//   },
// });

// export default Trial;

{
  /*       <Picker.Item
                label="Customer Packaging, FedEx Express® Services"
                value="YOUR_PACKAGING"
              />
              <Picker.Item
                label="Customer Packaging, FedEx Ground® Economy (Formerly known as FedEx SmartPost®) Services"
                value="YOUR_PACKAGING"
              />
            <Picker.Item label="FedEx® Envelope" value="FEDEX_ENVELOPE" />
            <Picker.Item label="FedEx® Box" value="FEDEX_BOX" />
            <Picker.Item label="FedEx® Small Box" value="FEDEX_SMALL_BOX" />
            <Picker.Item label="FedEx® Medium Box" value="FEDEX_MEDIUM_BOX" />
            <Picker.Item label="FedEx® Large Box" value="FEDEX_LARGE_BOX" />
            <Picker.Item
              label="FedEx® Extra Large Box"
              value="FEDEX_EXTRA_LARGE_BOX"
            />
            <Picker.Item label="FedEx® 10kg Box" value="FEDEX_10KG_BOX" />
            <Picker.Item label="FedEx® 25kg Box" value="FEDEX_25KG_BOX" />
            <Picker.Item label="FedEx® Pak" value="FEDEX_PAK" />
            <Picker.Item label="FedEx® Tube" value="FEDEX_TUBE" /> 
          </Picker>
          */
}
