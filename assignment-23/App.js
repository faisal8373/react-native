import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Intro from "./src/components/intro/Intro";
import Login from "./src/components/login/Login";
import SignUp from "./src/components/signup/Signup";
import Product from "./src/components/products/Product";

export default function App() {
  return (
    <View>
      {/* <Intro /> */}

      {/* <Login /> */}

      {/* <SignUp /> */}
      <Product />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "white",
  },
});
