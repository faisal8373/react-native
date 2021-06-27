import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";

function AppButton() {
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      width: "350px",
      height: "124px",
      left: "32px",
      top: "710px",
      padding: "4px",
    },
    btn1: {
      borderRadius: 20,
      backgroundColor: "rgba(34, 123, 255, 1)",
      color: "white",
      width: "350px",
      height: "40px",
      paddingBottom: "5px",
    },
    txt: {
      position: "absolute",
      left: "33.14%",
      right: "33.14%",
      top: "25%",
      bottom: "23.33%",

      fontFamily: "Overpass",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "31px",
      /* identical to box height */

      display: "flex",
      alignItems: "center",
      textAlign: "center",

      color: "#FFFFFF",
    },
    btn2: {
      position: "absolute",
      top: "50px",
      width: "350px",
      height: "40px",
      borderRadius: 20,
      backgroundColor: "rgba(12, 19, 39, 1)",
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn1}>
        <Text style={styles.txt}>Press Here</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn2}>
        <Text style={styles.txt}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AppButton;
