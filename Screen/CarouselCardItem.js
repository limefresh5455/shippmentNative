import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

// export const SLIDER_WIDTH = Dimensions.get('window').width + 80
// export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 900,
    width: "100%",
    //paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 100,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 30,
    position: "relative",
  },
});

export default CarouselCardItem;
