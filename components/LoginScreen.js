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
    <View style={styles.container}>
      <Image
        source={require('./assets/images/AP.png')}
        style={{ width: 250, height: 220, marginBottom: 20, marginBottom: 20 ,marginRight: 29}}  
      />
      <Text style={styles.wew}>Login Details</Text>
      <TextInput //username
        style={[styles.input, { width: 250, height: 50, borderColor: '#887E7E', borderWidth: 1, borderRadius: 20 }]}
        placeholder="Username"
        placeholderTextColor="#887E7E"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput //password
        style={[styles.input, { width: 250, height: 50, borderColor: '#887E7E', borderWidth: 1, borderRadius: 20 }]}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#887E7E"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />           
      <Text style={styles.forgot}>Forgot password?</Text> 

      

      <TouchableOpacity
        style={[styles.button, { width: 250, height: 40, backgroundColor: '#95725A' }]}
        onPress={() => navigation.navigate('Home')} // Navigate to Dashboard
      >
        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>
       <Text style={styles.forgot1}>Or login with</Text>
      <View style={styles.logoContainer}> 
        <Image
          source={require('./assets/icons/facebook.png')}
          style={{ width: 30, height: 30 }}
        />
        <Image
          source={require('./assets/icons/google.png')}
          style={{ width: 30, height: 30 }}
        />
        <Image
          source={require('./assets/icons/apple.png')}
          style={{ width: 30, height: 30 }}
        />
      </View>
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
  input: {
    color: '#635C5C',
    marginBottom: 20,
    paddingLeft: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#95725A',
    marginTop: 20,
    borderRadius: 20,
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
});

export default Login;