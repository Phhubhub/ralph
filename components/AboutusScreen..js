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
import developers from "./developer";

function Aboutus({ navigation }) {
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rectangle} />
      <View style={styles.contentContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Image
                source={require("./assets/icons/chevron-left.png")}
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <View style={styles.backCircle} />
            <Text style={styles.title}>About Us</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>
              Welcome to our application, where we are committed to enhancing
              public health through education and awareness about infectious
              diseases. Our logo features the caduceus, a symbol of healing and
              medical knowledge, representing our mission to provide critical
              insights into health challenges that affect individuals and
              communities.
            </Text>
            <Text style={styles.text}>
              Infectious diseases pose significant challenges globally,
              impacting millions of lives. Our application focuses on critical
              aspects of these diseases, including their transmission,
              prevention, and management. By offering well-researched
              information, we aim to demystify these health issues and promote a
              deeper understanding of how they impact our lives.
            </Text>
            <Text style={styles.text}>
              We believe that knowledge is a powerful tool in combating
              infectious diseases. Our app features a wealth of resources,
              including articles, infographics, and interactive tools that cover
              various topics related to infectious diseases. Users will find
              easy-to-understand explanations of symptoms, risk factors, and
              treatment options, empowering them to recognize potential health
              issues early and seek appropriate care.
            </Text>
            <Text style={styles.text}>
              In addition to educational content, our application emphasizes the
              importance of community support. We provide resources to connect
              users with local health services and support groups, fostering a
              sense of belonging among those affected by these diseases. By
              sharing personal stories and experiences, we hope to create a
              supportive environment where users can learn from one another and
              find encouragement.
            </Text>
            <Text style={styles.text}>
              Ultimately, our mission is to create a healthier world by
              promoting awareness and understanding of infectious diseases.
              Guided by the principles symbolized by the caduceus, we invite you
              to explore our app and join us in this vital effort to inform and
              empower individuals, leading to better health outcomes for all.
            </Text>
          </View>

          <View style={styles.developersSection}>
            <View style={styles.developersTitleContainer}>
              <Text style={styles.developersTitle}>Developers</Text>
            </View>
            <View style={styles.developersContainer}>
              {developers.map((dev, index) => (
                <View key={index} style={styles.developersCard}>
                  <Image source={dev.image} style={styles.profileImage} />
                  <View style={styles.developerInfo}>
                    <Text style={styles.developerName}>{dev.name}</Text>
                    <Text style={styles.developertaken}>{dev.taken}</Text>
                    <Text style={styles.developerDescription}>
                      {dev.description}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.copyrightContainer}>
          <Text style={styles.copyrightText}>© 2024 All Rights Reserved</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#136D7D",
    padding: 15,
  },

  rectangle: {
    height: 30,
    backgroundColor: "#136D7D",
    width: "100%",
  },

  contentContainer: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    position: "absolute",
    top: 10,
    left: 25,
    zIndex: 2,
  },

  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#FFFFFF",
  },

  backCircle: {
    position: "absolute",
    width: 38,
    height: 38,
    backgroundColor: "#000000",
    borderRadius: 22,
    left: 20,
    zIndex: 1,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Poppins-Bold",
    marginLeft: 110,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    top: 20,
  },

  text: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },

  developersSection: {
    marginTop: 40,
    alignItems: "center",
  },

  developersTitleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.50)",
    borderRadius: 100,
    width: 320,
    height: 89,
    alignItems: "center",
    marginBottom: 20,
    borderColor: "#136D7D",
  },

  developersTitle: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Bold",
    fontSize: 35,
    marginBottom: 20,
    top: 20,
  },

  developersContainer: {
    width: "100%",
  },

  developersCard: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  developerInfo: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 15,
  },

  developerName: {
    color: "#FFFFFF",
    fontFamily: "Poppins-SemiBold",
    fontSize: 19,
    marginBottom: 5,
  },

  developertaken: {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Poppins-Regular",
    fontSize: 15,
  },

  developerDescription: {
    color: "rgba(255, 255, 255, 0.9)",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginTop: 5,
  },

  copyrightContainer: {
    alignItems: "center",
    paddingVertical: 1,
  },

  copyrightText: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
});

export default Aboutus;
