import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.SquareShapeView}>
        <View style={styles.header}>
          <Text style={{ paddingLeft: 20 }}>
            <Icon name="arrow-left" size={30} color="#b1aeae" />
          </Text>
          <Image
            style={styles.companyLogo}
            source={{
              uri: "https://shipwwt.com/wp-content/uploads/2022/11/cropped-wwt-global.png",
            }}
          />
          <Text style={{ paddingRight: 20 ,paddingBottom:8 }}>
            <Icon name="user" size={40} color="#b1aeae" />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1e6",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 35,
    paddingRight: 15,
    justifyContent: "space-between",
    paddingLeft: -65,
  },
  companyLogo: {
    width: 80,
    height: 40,
    resizeMode: "contain",
    marginBottom:105
},
  scrollView: {
    marginHorizontal: 20,
  },
  SquareShapeView: {
    marginTop: 20,
    width: 380,
    height: 80,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: "#EDE6D6",
    backgroundColor: "#EDE6D6",
    // paddingLeft:20,
  },
});
export default Header;
