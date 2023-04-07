import {StyleSheet} from "react-native";
import SignIn from "./Screen/SignIn";
import BusinessProfile from "./Screen/BusinessProfile";
import ConfirmEmail from "./Screen/ConfirmEmail";
import SignUp from "./Screen/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SubmitShipment from "./Screen/SubmitShipment";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ShipmentProgressStep from "./Screen/ShipmentProgressStep";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
     <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false, headerBackTitleVisible: false }}

          />
          <Stack.Screen
            name="BusinessProfile"
            component={BusinessProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ShipmentProgressStep"
            component={ShipmentProgressStep}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="ShipmentInfo"
            component={ShipmentInfo}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="Submit"
            component={SubmitShipment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ConfirmEmail"
            component={ConfirmEmail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
     </SafeAreaProvider>

    //  <BusinessProfile/>
    //   <Demo/>
    //  <ShipmentProgressStep />
    //  <Trial/>
    //   <CreateShipment/>
    //  <BusinessProfile1/>
    //   <ShipmentInfo/>
    //    <DownloadShipment/>
    //      <SignIn/>
    //    <DetailClient/>
   // <Demo/>
     
   // <PaymentModal/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1e6",
  },
});

