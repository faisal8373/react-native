import React from "react";
import { View, ImageBackground, Image, StyleSheet, Text } from "react-native";
import AppButton from "../common/AppButton";

const styles = StyleSheet.create({
  container: {
    width: "414px",
    height: "896px",
    border: "solid grey",
    background: "#F7F7F9",
  },
  title: {
    position: "absolute",
    height: "24px",
    left: "177px",

    top: "60px",

    /* H6 / Roboto Medium */

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "23px",
    /* identical to box height */

    letterSpacing: "0.15px",

    color: "#000000",
  },
  subTitle: {
    position: "absolute",
    width: "229px",
    height: "28px",
    left: "22px",
    top: "116px",

    fontFamily: "Overpass",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "28px",
    /* identical to box height */

    display: "flex",
    alignItems: "center",
    textAlign: "center",

    color: "#000000",
  },
  productCard: {
    position: "absolute",
    width: "374px",
    height: "309px",
    left: "22px",
    top: "161px",
    border: "1px solid rgba(255, 255, 255, .3)",
    borderRadius: "20px",
    backgroundColor: "green",
  },
});

function Product() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invertir</Text>
      <Text style={styles.subTitle}>Oportunidades de Inversión</Text>
      <View style={styles.productCard}></View>
    </View>
  );
}

export default Product;
