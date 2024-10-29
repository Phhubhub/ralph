import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; 
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"; 

; 
// You can use other icon sets like MaterialIcons

function BottomNav({ currentScreen, navigation }) {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon
          name="home-city"
          size={28}
          color={currentScreen === "Home" ? "white" : "white"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        
      >
        <Icon
          name="account-heart"
          size={28}
          color={currentScreen === "Heart" ? "white" : "white"}
          
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Account")}
      >
        <FontAwesome6
          name="people-line"
          size={28}
          color={currentScreen === "Account" ? "#c5c5c5" : "white"}
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
    backgroundColor: "#95725A",
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
});

export default BottomNav;
