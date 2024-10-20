import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import loadFonts from "./fonts";
import BottomNav from "./bottomNav";

function Account({ navigation }) {
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Header}></View>
      <View style={styles.profilecontainer}>
        <Image
          source={require("./assets/images/profile.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Elowen Hart</Text>
        <Text style={styles.email}>@hart_elowen</Text>
      </View>

      <View style={styles.editbutton}>
        <Text style={styles.buttonText}>Edit</Text>
      </View>
      <View style={styles.line} />

      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
          <Image
            source={require("./assets/icons/gear.png")}
            style={styles.gearIcon}
          />
          <Text style={styles.settingText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
          <Image
            source={require("./assets/icons/share.png")}
            style={styles.shareIcon}
          />
          <Text style={styles.settingText}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
          <Image
            source={require("./assets/icons/support.png")}
            style={styles.supportIcon}
          />
          <Text style={styles.settingText}>Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
          <Image
            source={require("./assets/icons/group.png")}
            style={styles.groupIcon}
          />
          <Text style={styles.settingText}>Group</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate("Aboutus")}>
          <Image
            source={require("./assets/icons/about.png")}
            style={styles.aboutIcon}
          />
          <Text style={styles.settingText}>About Us</Text>
        </TouchableOpacity>
      </View>
      <BottomNav navigation={navigation} currentScreen="Account" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#136D7D",
  },

  Header: {
    position: "relative",
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: "flex-start",
  },

  profilecontainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150,
    top: 50,
  },

  username: {
    textAlign: "center",
    top: 65,
    width: 131,
    fontFamily: "Poppins-Medium",
    fontSize: 22,
    lineHeight: 28,
    color: "#FFFFFF",
  },

  email: {
    textAlign: "center",
    top: 70,
    width: 90,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: 20,
    color: "rgba(255, 255, 255, 0.7)",
  },

  editbutton: {
    justifyContent: "center",
    alignItems: "center",
    width: 290,
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 8,
    top: 90,
    left: 35,
  },

  buttonText: {
    color: "#FFFFFF",
  },

  line: {
    height: 2,
    backgroundColor: "#000000",
    width: "100%",
    marginTop: 140,
  },

  settingsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 35,
  },

  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },

  gearIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
    marginRight: 15,
  },

  shareIcon: {
    width: 24,
    height: 23,
    tintColor: "#FFFFFF",
    marginRight: 15,
  },

  supportIcon: {
    width: 23,
    height: 23,
    tintColor: "#FFFFFF",
    marginRight: 15,
  },

  groupIcon: {
    width: 23,
    height: 23,
    tintColor: "#FFFFFF",
    marginRight: 15,
  },

  aboutIcon: {
    width: 23,
    height: 23,
    tintColor: "#FFFFFF",
    marginRight: 15,
  },

  settingText: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
});

export default Account;
