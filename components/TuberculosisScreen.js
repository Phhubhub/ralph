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

function Tuberculosis({ navigation }) {
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.rectangle} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.Header}>
          <Image
            source={require("./assets/images/tuberculosis.jpg")}
            style={styles.Image}
          />
          <View style={styles.diseaseContainer}>
            <Text style={styles.diseaseName}>Tuberculosis (TB)</Text>
            <View style={styles.doctorContainer}>
              <Image
                source={require("./assets/icons/scientist.png")}
                style={styles.doctorIcon}
              />
              <Text style={styles.doctorName}>Dr. Mario Raviglione</Text>
            </View>
          </View>
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
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.contributionsTitle}>
            Dr. Mario Raviglione's Contributions:
          </Text>
          <Text style={styles.contributionsText}>
            Dr. Mario Raviglione is a leading expert in TB research and public
            health. His work focuses on:
          </Text>
          <Text style={styles.contributionsText}>
            <Text style={styles.Bold}>Global Health Initiatives:</Text>{" "}
            Advocating for comprehensive TB programs that combine treatment,
            prevention, and research.
          </Text>
          <Text style={styles.contributionsText}>
            <Text style={styles.Bold}>Drug-Resistant TB:</Text> Addressing the
            growing challenge of multidrug-resistant TB (MDR-TB) and the need
            for new treatment strategies.
          </Text>
          <Text style={styles.contributionsText}>
            <Text style={styles.Bold}>Policy Development:</Text> Influencing
            policies to improve TB diagnosis, treatment access, and funding for
            public health initiatives.
          </Text>
          <Text style={styles.contributionsText}>
            <Text style={styles.Bold}>Health Systems Strengthening:</Text>{" "}
            Focusing on enhancing healthcare systems to better tackle TB and
            related diseases.
          </Text>
          <Text style={styles.contributionsText}>
            Dr. Raviglione's research and advocacy have significantly shaped
            global TB strategies and increased awareness of the disease's
            complexities, underscoring the importance of ongoing research and
            intervention.
          </Text>
          <Text style={styles.contributionsTitle}>Tuberculosis (TB)</Text>
          <Text style={styles.contributionsText}>
            TB is an infectious disease caused by the bacterium Mycobacterium
            tuberculosis, primarily affecting the lungs but potentially
            impacting other organs. It spreads through the air when an infected
            person coughs, sneezes, or talks.
          </Text>
          <Text style={styles.contributionsTitle}>Signs and Symptoms</Text>
          <Text style={styles.contributionsText}>
            <Text style={styles.Bold}>Persistent Cough:</Text> Lasts over three
            weeks, often with phlegm or blood.{"\n"}
            <Text style={styles.Bold}>Chess Pain:</Text> Discomfort that may
            worsen with breathing or coughing. {"\n"}
            <Text style={styles.Bold}>Fatigue:</Text> Persistent weakness or
            tiredness.{"\n"}
            <Text style={styles.Bold}>Wieght Loss:</Text> Significant,
            unintentional loss.{"\n"}
            <Text style={styles.Bold}>Night Sweat:</Text> Excessive sweating
            during sleep. {"\n"}
            <Text style={styles.Bold}>Fever:</Text> Low-grade and persistent.
            {"\n"}
            <Text style={styles.Bold}>Chills:</Text> Episodes of feeling cold
            with shivering.
          </Text>
          <Text style={styles.contributionsTitle}>Transmission:</Text>
          <Text style={styles.contributionsText}>
            TB is mainly spread through airborne particles, with higher risks
            associated with close and prolonged contact with an infected person.
            Environmental factors, like poor ventilation, can also enhance
            transmission.
          </Text>
          <Text style={styles.infoSubtitle}>Prevention:</Text>
          <Text style={styles.contributionsText}>
            To reduce risk, wear masks, improve indoor ventilation, and ensure
            timely treatment for those infected. If you experience symptoms or
            have been in contact with someone who has TB, seek medical attention
            promptly for early diagnosis and treatment.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#136D7D",
    alignItems: "center",
  },

  rectangle: {
    height: 40,
    backgroundColor: "#136D7D",
    width: "100%",
    marginBottom: 0,
  },

  Header: {
    width: "100%",
    padding: 0,
    position: "relative",
  },

  Image: {
    width: 330,
    height: 460,
    borderRadius: 10,
    marginLeft: 15,
  },

  diseaseContainer: {
    position: "absolute",
    bottom: 10,
    left: 30,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 15,
    padding: 20,
    width: 300,
    height: 104,
  },

  diseaseName: {
    fontSize: 25,
    color: "#FFFFFF",
    fontFamily: "Poppins-Bold",
  },

  doctorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  doctorIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
    marginRight: 10,
  },

  doctorName: {
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },

  backButton: {
    position: "absolute",
    top: 17,
    left: 30,
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
    left: 25,
    top: 10,
    zIndex: 1,
  },

  infoContainer: {
    padding: 16,
    marginTop: 20,
    backgroundColor: "#136D7D",
    borderRadius: 10,
    width: "100%",
  },

  contributionsTitle: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "Poppins-Bold",
    marginBottom: 10,
  },

  contributionsText: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    marginBottom: 5,
  },

  Bold: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
  },

  infoSubtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Poppins-SemiBold",
    marginTop: 10,
  },
});

export default Tuberculosis;