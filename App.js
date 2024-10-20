import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/LoginScreen";
import Home from "./components/HomeScreen";
import Account from "./components/AccountScreen";
import Tuberculosis from "./components/TuberculosisScreen";
import HivAids from "./components/Hiv&Aids";
import Aboutus from "./components/AboutusScreen..js";

const Stack = createNativeStackNavigator();

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
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Tuberculosis"
          component={Tuberculosis}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HivAids"
          component={HivAids}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Aboutus"
          component={Aboutus}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
