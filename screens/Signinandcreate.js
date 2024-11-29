import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCustomFonts } from "../components/font"; // Assuming this custom hook handles font loading

const SigninandCreate = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  if (!fontsLoaded) {
    // Show a loading indicator until fonts are loaded
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../assets/icons/SS.png")} // Ensure this path is correct
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.tagline}>Where Every Story Finds a Home</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Signin")}
          >
            <Text style={styles.signinText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.transparentButton]}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.createAccountText}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  tagline: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    lineHeight: 40,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 100,
    marginBottom: 50,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginBottom: 15,
    borderRadius: 30,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  transparentButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  signinText: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    color: "#000000",
    textAlign: "center",
  },
  createAccountText: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  loadingText: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: "#ffffff",
    marginTop: 10,
  },
});

export default SigninandCreate;
