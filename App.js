// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/LoginScreen";
import Home from "./components/HomeScreen"; // Ensure this points to the updated Home component
import Account from "./components/AccountScreen.js";
import "./firebaseConfig";
import SignupScreen from "./components/SignupScreen";



const Stack = createNativeStackNavigator();

/**
 * The main App component, which sets up the navigation stack
 *
 * @returns {React.ReactElement} The main App component
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        /> 
          <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
