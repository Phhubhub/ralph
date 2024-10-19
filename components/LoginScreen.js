import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import loadFonts from "./fonts";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Disease Insight</Text>
          <Image
            source={require("./assets/icons/caduceus.png")}
            style={styles.caduceusIcon}
          />
        </View>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require("./assets/icons/person.png")}
            style={styles.icons}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require("./assets/icons/lock.png")}
            style={styles.icons}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonloginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#136D7D",
  },

  innerContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    color: "#FFFFFF",
    fontFamily: "Poppins-Bold",
  },

  caduceusIcon: {
    width: 35,
    height: 35,
    marginLeft: 10,
    tintColor: "#FFFFFF",
  },

  loginText: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 25,
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
  },

  icons: {
    width: 20,
    height: 20,
    marginLeft: 20,
    tintColor: "rgba(255, 255, 255, 0.5)",
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: "Poppins-Regular",
    color: "#FFFFFF",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 40,
    width: 288,
    height: 59,
    marginBottom: 10,
  },

  forgotPassword: {
    marginTop: 10,
    marginBottom: 20,
    color: "#FFFFFF",
    fontSize: 15,
    letterSpacing: 1,
    fontFamily: "Poppins-Regular",
  },

  button: {
    backgroundColor: "#000000",
    borderRadius: 40,
    height: 59,
    width: 288,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonloginText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Poppins-Bold",
  },
});

export default Login;