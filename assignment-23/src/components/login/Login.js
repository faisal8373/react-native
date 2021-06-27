import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: "298px",
    height: "72px",
    position: "absolute",
    left: "52px",
    top: "128px",
  },
  card: {
    position: "absolute",
    width: "414px",
    height: "650px",
    left: "0px",
    top: "245px",
    backgroundColor: "white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "40px",
  },

  bGround: {
    position: "absolute",
    width: "414px",
    height: "896px",
    left: "0px",
    top: "0px",
  },
  txt: {
    position: "absolute",
    width: "146px",
    height: "37px",
    left: "131px",
    top: "10px",

    fontFamily: "Overpass",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "37px",
    /* identical to box height */

    display: "flex",
    alignItems: "center",
    textAlign: "center",

    color: "#000000",
  },
  emailLabel: {
    position: "absolute",
    left: "10px",

    top: "30px",

    fontFamily: "Overpass",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",

    color: "#000000",
  },
  emailView: {
    position: "absolute",
    width: "350px",
    height: "300px",
    left: "31px",
    top: "370px",
  },
  emailTxt: {
    position: "absolute",
    width: "330px",
    height: "55px",
    left: "5px",
    top: "60px",
    paddingLeft: "5px",
    border: "1px grey solid",
  },
  // passTxt: {
  //   position: "absolute",
  //   width: "330px",
  //   height: "55px",
  //   left: "5px",
  //   top: "60px",
  //   paddingLeft: "5px",
  //   border: "1px grey solid",
  // },
  // passLabel: {
  //   position: "absolute",
  //   left: "10px",

  //   top: "30px",

  //   fontFamily: "Overpass",
  //   fontStyle: "normal",
  //   fontWeight: "normal",
  //   fontSize: "14px",
  //   lineHeight: "21px",

  //   color: "#000000",
  // },
  email: {
    position: "absolute",
    left: "0px",

    top: "0px",
  },
  pass: {
    position: "absolute",
    left: "0px",

    top: "100px",
  },
  forgot: {
    position: "absolute",
    width: "163px",
    height: "21px",
    left: "217px",
    top: "230px",

    fontFamily: "Overpass",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",

    color: "#000000",
  },
  btn: {
    fontFamily: "Overpass",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "28px",
    /* identical to box height */
    position: "absolute",
    left: "38.14%",
    right: "33.14%",
    top: "25%",
    bottom: "23.33%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",

    color: "#FFFFFF",
  },
  btnButton: {
    borderRadius: 20,
    backgroundColor: "rgba(34, 123, 255, 1)",

    width: "350px",
    height: "40px",
    paddingBottom: "5px",
    position: "absolute",
    top: "800px",
    left: "30px",
  },
});

function Login() {
  return (
    <View>
      <ImageBackground
        style={styles.bGround}
        source={require("../../../assets/building.png")}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../../../assets/logo-white-1.png")}
        />
        <View style={styles.card}>
          <Text style={styles.txt}>Iniciar sesión</Text>
        </View>
        <View style={styles.emailView}>
          <View style={styles.email}>
            <Text style={styles.emailLabel}>Email*</Text>
            <TextInput style={styles.emailTxt} placeholder="Email" />
          </View>
          <View style={styles.pass}>
            <Text style={styles.emailLabel}>Password*</Text>
            <TextInput style={styles.emailTxt} placeholder="Password" />
          </View>
          <Text style={styles.forgot}>Forgot Password</Text>
        </View>
      </ImageBackground>
      <TouchableOpacity style={styles.btnButton}>
        <Text style={styles.btn}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
