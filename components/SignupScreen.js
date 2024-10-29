import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // TODO: Implement your desired signup logic here

    navigation.navigate("Login"); // Navigate to the Login screen on successful signup
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/AP.png')}
        style={{ width: 250, height: 220, marginBottom: 20 }}
      />
      <Text style={styles.header}>Create Account</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#887E7E"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#887E7E"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#887E7E"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#635C5C',
    marginBottom: 20,
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
  loginText: {
    color: '#635C5C',
    fontSize: 14,
    marginTop: 20,
  },
});

export default Signup;

