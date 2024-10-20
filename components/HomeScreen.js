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

function Home({ navigation }) {
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Disease Insight</Text>
          <Image
            source={require("./assets/icons/caduceus.png")}
            style={styles.caduceusIcon}
          />
        </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require("./assets/icons/search.png")}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Diseases"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require("./assets/icons/settings.png")}
              style={styles.settingsIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.popularContainer}>
        <Text style={styles.popularText}>Popular search</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.Mostbutton}>
          <Text style={styles.MostText}>Most Viewed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Latestbutton}>
          <Text style={styles.buttonText}>Latest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OldButton}>
          <Text style={styles.buttonText}>Old</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Tuberculosis")}>
            <Image
              source={require("./assets/images/tuberculosis.jpg")}
              style={styles.diseaseImage}
            />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.diseaseName}>Tuberculosis (TB)</Text>
            <View style={styles.doctorContainer}>
              <Image
                source={require("./assets/icons/scientist.png")}
                style={styles.doctorIcon}
              />
              <Text style={styles.doctorName}>Dr. Mario Raviglione</Text>
            </View>
          </View>
          <Image
            source={require("./assets/icons/heart.png")}
            style={styles.HeartIcon}
          />
        </View>

        <View style={styles.imageContainer2}>
          <TouchableOpacity onPress={() => navigation.navigate("HivAids")}>
            <Image
              source={require("./assets/images/hiv.jpg")}
              style={styles.diseaseImage}
            />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.diseaseName}>HIV/AIDS</Text>
            <View style={styles.doctorContainer}>
              <Image
                source={require("./assets/icons/scientist.png")}
                style={styles.doctorIcon}
              />
              <Text style={styles.doctorName}>Dr. Anthony Fauci</Text>
            </View>
          </View>
          <Image
            source={require("./assets/icons/heart.png")}
            style={styles.heartIcon}
          />
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} currentScreen="Home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#136D7D",
  },

  headerContainer: {
    padding: 0,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 55,
  },

  title: {
    fontSize: 30,
    color: "#FFFFFF",
    fontFamily: "Poppins-Bold",
    marginLeft: 20,
  },

  caduceusIcon: {
    width: 35,
    height: 35,
    marginLeft: 10,
    tintColor: "#FFFFFF",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 40,
    height: 58,
    width: 330,
    paddingHorizontal: 15,
    marginTop: 20,
    marginHorizontal: 15,
  },

  iconContainer: {
    padding: 10,
  },

  searchIcon: {
    width: 25,
    height: 25,
    tintColor: "rgba(255, 255, 255, 0.5)",
  },

  searchInput: {
    flex: 1,
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    color: "#FFFFFF",
  },

  settingsIcon: {
    width: 25,
    height: 25,
    tintColor: "rgba(255, 255, 255, 0.5)",
  },

  popularContainer: {
    padding: 16,
    backgroundColor: "#136D7D",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  popularText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "Poppins-SemiBold",
  },

  viewAll: {
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },

  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20, 
  },

  Mostbutton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#000000",
    marginHorizontal: 15,
  },

  MostText: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },

  Latestbutton: {
    backgroundColor: "rgba(0, 0, 0, 0.49)",
    borderRadius: 30,
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  OldButton: {
    backgroundColor: "rgba(0, 0, 0, 0.49)",
    borderRadius: 30,
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  buttonText: {
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },

  scrollContainer: {
    maxHeight: 500,
  },

  scroll: {
    paddingBottom: 350,
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alightItems: "center",
    position: "relative",
    marginTop: 10,
    marginLeft: 13,
  },

  diseaseImage: {
    position: "absolute",
    width: 335,
    height: 324,
    borderRadius: 30,
  },

  textContainer: {
    position: "absolute",
    left: 30,
    top: 250,
    width: 277,
    height: 70,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 15,
    justifyContent: "center",
    zIndex: 1,
  },

  diseaseName: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "Poppins-Bold",
    lineHeight: 24,
    marginLeft: 16,
  },

  doctorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  doctorIcon: {
    width: 15,
    height: 15,
    tintColor: "#FFFFFF",
    marginRight: 5,
    marginLeft: 16,
  },

  doctorName: {
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 5,
  },

  HeartIcon: {
    width: 40,
    height: 40,
    marginRight: 25,
    marginTop: 10,
    tintColor: "rgba(255, 255, 255, 0.70)",
  },

  imageContainer2: {
    alightItems: "center",
    marginTop: 280,
    marginLeft: 13,
  },

  heartIcon: {
    width: 40,
    height: 40,
    tintColor: "rgba(255, 255, 255, 0.70)",
    marginLeft: 280,
    marginTop: 10,
  },
});

export default Home;
