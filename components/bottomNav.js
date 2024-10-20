import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

function BottomNav({ currentScreen, navigation }) {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("./assets/icons/home.png")}
          style={[
            styles.icon,
            currentScreen === "Home"
              ? { tintColor: "#FFFFFF" }
              : { tintColor: "rgba(255, 255, 255, 0.5)" },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
          source={require("./assets/icons/clock.png")}
          style={[
            styles.icon,
            currentScreen === "clock"
              ? { tintColor: "#FFFFFF" }
              : { tintColor: "rgba(255, 255, 255, 0.4)" },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
          source={require("./assets/icons/heart.png")}
          style={[
            styles.icon,
            currentScreen === "Heart"
              ? { tintColor: "#FFFFFF" }
              : { tintColor: "rgba(255, 255, 255, 0.4)" },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Account")}
      >
        <Image
          source={require("./assets/icons/person.png")}
          style={[
            styles.icon,
            currentScreen === "Account"
              ? { tintColor: "#FFFFFF" }
              : { tintColor: "rgba(255, 255, 255, 0.4)" },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    width: 360,
    height: 70,
    bottom: 0,
    backgroundColor: "#136D7D",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },

  navItem: {
    alignItems: "center",
  },

  icon: {
    width: 28,
    height: 28,
  },
});

export default BottomNav;
