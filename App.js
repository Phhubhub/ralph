import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/LoginScreen";
import Home from "./components/HomeScreen";
import Account from "./components/AccountScreen.js";
import Heart from "./components/Heart.js";


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
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Heart"
          component={Heart}
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
