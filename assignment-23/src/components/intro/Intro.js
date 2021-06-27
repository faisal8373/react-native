import React from "react";
import { View, ImageBackground, Image, StyleSheet, Text } from "react-native";
import AppButton from "../common/AppButton";

const styles = StyleSheet.create({
  logo: {
    width: "414px",
    height: "896px",
    position: "absolute",
    left: "0px",
    top: "0px",
  },
  tinyLogo: {
    width: "298px",
    height: "72px",
    position: "absolute",
    left: "52px",
    top: "128px",
  },
  typo: {
    position: "absolute",
    width: "197px",
    height: "74px",
    left: "109px",
    top: "396px",

    fontFamily: "Overpass",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 37,
    display: "flex",
    alignItems: "center",
    textAlign: "center",

    color: "#FFFFFF",

    
  },
});
function Intro() {
  return (
    <View>
      <ImageBackground
        style={styles.logo}
        source={require("../../../assets/building.png")}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../../../assets/logo-white-1.png")}
        />
        <Text style={styles.typo}>CROWDFUNDING INMOBILIARIO</Text>
      </ImageBackground>
      <AppButton />
    </View>
  );
}

export default Intro;
