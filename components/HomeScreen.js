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
          <Text style={styles.title}>Araling Panlipunan Mobile</Text>
          <Image
            source={require("./assets/icons/books.png")}
            style={styles.caduceusIcon}
          />
        </View>

      </View>

      <View style={styles.popularContainer}>
        <Text style={styles.popularText}>Want Latest Topics?</Text>
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
        showsVerticalScrollIndicator={false}>
        
        <View style={styles.imageContainer4}>
          <TouchableOpacity >
            <Image
              source={require("./assets/images/join.png")}
              style={styles.diseaseImage}
            />
          </TouchableOpacity>
        </View>


        <View style={styles.imageContainer}>
          <TouchableOpacity >
            <Image
              source={require("./assets/images/categories.png")}
              style={styles.diseaseImage1}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity >
            <Image
              source={require("./assets/images/readbooks.png")}
              style={styles.diseaseImage2}
            />
          </TouchableOpacity>

        </View>

      </ScrollView>
      <BottomNav navigation={navigation} currentScreen="Home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5D6",
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
    fontSize: 25,
    color: "#95725A",
    fontFamily: "Poppins-Bold",
    marginLeft: 30,
    marginTop: 5,
    right: 10,
   
  },

  caduceusIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    
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
    backgroundColor: "#95725A",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 30,
    marginRight: 15,
    marginLeft: 15,
  },

  popularText: {
    fontSize: 17,
    color: "#FFFFFF",
    fontFamily: "Poppins-SemiBold",
  },

  viewAll: {
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    right: 5,
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
    backgroundColor: "#95725A",
    marginHorizontal: 15,
    left: 5,
  },

  MostText: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },

  Latestbutton: {
    backgroundColor: "#CFB291",
    borderRadius: 30,
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  OldButton: {
    backgroundColor: "#CFB291",
    borderRadius: 30,
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    right : 5,
  },

  buttonText: {
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },

  scrollContainer: {
    maxHeight: 500,
    height: 200,
  },

  scroll: {
    paddingBottom: 350,
    height: 2300,
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alightItems: "center",
    position: "relative",
    marginTop: 10,
    marginLeft: 13,
    height: 1650,
  },
   diseaseImage: {
   width: 340,
   left: 10,
   borderRadius: 40,  
   },
  diseaseImage1: {
    position: "absolute",
    width: 335,
    height: 324,
    borderRadius: 30,
    height: 1650,
    resizeMode: "contain",
    bottom: 300,  
    left: 13,  
    borderRadius: 30,
  },
  diseaseImage2: {
    position: "absolute",
    width: 335,
    height: 324,
    borderRadius: 30,
    height: 1650,
    resizeMode: "contain",
    bottom: 300,  
    left: 13,  
    borderRadius: 30,
    bottom: 900,
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
