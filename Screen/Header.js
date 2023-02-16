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
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = ({ navigation }) => {
  return (
    <>
    <SafeAreaView>
      <ScrollView style={styles.SquareShapeView}>
        <View style={styles.header}>
          <TouchableOpacity  style={{ paddingLeft: 20 ,paddingTop:15 }} onPress={()=>navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="#b1aeae"
            />
          </TouchableOpacity>
          <Image 
            style={styles.companyLogo}
            source={{
              uri: "https://shipwwt.com/wp-content/uploads/2022/11/cropped-wwt-global.png",
            }}
          />
          <Text style={{ paddingRight: 20 , paddingBottom:8,paddingTop:15}} >
            <Icon name="user" size={20} color="#b1aeae" />  
          </Text>          
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  
    SquareShapeView: {
    width: '100%',
    height: 80,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: "#EDE6D6",
    backgroundColor: "#ffffff",
    paddingBottom: 30,
  },
  header: {
    width:'100%',
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    paddingLeft: -65,
    shadowColor:'blue' 
  },
  companyLogo: {
    width: 120,
    height: 50,
    resizeMode: "contain",
   // marginBottom:105
},
});

export default Header;












// import { View, Text } from "react-native";
// import React from "react";
// import Header1 from "./Header1";
// import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

// export default function DownloadShipment() {

  
  
//   const defaultScrollViewProps = {
//     keyboardShouldPersistTaps: "handled",
//     contentContainerStyle: {
//       flex: 1,
//       justifyContent: "center",
//     },
//   };

//   const onNextStep = () => {
//     console.log("called next step");
//   };

//   const onPrevStep = () => {
//     console.log("called previous step");
//   };

//   const progressStepsStyle = {
//     activeStepIconBorderColor: "lightblue",
//     activeLabelColor: "black",
//     activeStepNumColor: "black",
//     activeStepIconColor: "lightblue",
//     completedStepIconColor: "lightgreen",
//     completedProgressBarColor: "lightgreen",
//     completedCheckColor: "green",
//   };

//   const buttonTextStyle = {
//     color: "#686868",
//     fontWeight: "bold",
//   };

//   return (
//     <View>
//       <Header1 />
//       <View style={{ flex: 1, marginTop: 50 }}>
//         <ProgressSteps {...progressStepsStyle}>

//           <ProgressStep
//             label="First"
//             onNext={onNextStep}
//             onPrevious={onPrevStep}
//             scrollViewProps={defaultScrollViewProps}
//             nextBtnTextStyle={buttonTextStyle}
//             previousBtnTextStyle={buttonTextStyle}
//           >
//             <View style={{ alignItems: "center" }}>
//               <Text>This is the content within step 1!</Text>
//             </View>
//           </ProgressStep>

//           <ProgressStep
//             label="Second"
//             onNext={onNextStep}
//             onPrevious={onPrevStep}
//             scrollViewProps={defaultScrollViewProps}
//             nextBtnTextStyle={buttonTextStyle}
//             previousBtnTextStyle={buttonTextStyle}
//           >
//             <View style={{ alignItems: "center" }}>
//               <Text>This is the content within step 2!</Text>
//             </View>
//           </ProgressStep>

//           <ProgressStep
//             label="Third"
//             onNext={onNextStep}
//             onPrevious={onPrevStep}
//             scrollViewProps={defaultScrollViewProps}
//             nextBtnTextStyle={buttonTextStyle}
//             previousBtnTextStyle={buttonTextStyle}
//           >
//             <View style={{ alignItems: "center" }}>
//               <Text>This is the content within step 3!</Text>
//             </View>
//           </ProgressStep>

//         </ProgressSteps>
//         <View />
//       </View>
//     </View>
//   );
// }

