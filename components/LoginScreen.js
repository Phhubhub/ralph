import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import loadFonts from "./fonts";
import "../firebaseConfig"; // Ensure the Firebase config is imported from the root

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const fontsLoaded = loadFonts();

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, username, password);
      navigation.navigate("Home"); // Navigate to the Home screen if login is successful
    } catch (err) {
      setError("Invalid login credentials"); // Display error if login fails
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/AP.png')}
        style={{ width: 250, height: 220, marginBottom: 20, marginRight: 29 }}
      />
      <Text style={styles.wew}>Login Details</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#887E7E"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#887E7E"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={styles.forgot}>Forgot password?</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.forgot1}>Or login with</Text>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/icons/facebook.png')} style={styles.icon} />
        <Image source={require('./assets/icons/google.png')} style={styles.icon} />
        <Image source={require('./assets/icons/apple.png')} style={styles.icon} />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5D6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wew: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#635C5C',
    marginRight: 105,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    width: 250,
    height: 50,
    borderColor: '#887E7E',
    borderWidth: 2,
    borderRadius: 20,
    color: '#635C5C',
    marginBottom: 20,
    paddingLeft: 20,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: '#95725A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  forgot: {
    marginTop: 5,
    marginLeft: 120,
  },
  forgot1: {
    marginRight: 10,
    marginTop: 15,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    marginTop: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  signupButton: {
    marginTop: 20, // Adjust as necessary
  },
  signupText: {
    color: '#635C5C',
    fontSize: 14,
  },
});

export default Login;
