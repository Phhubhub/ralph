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

function HivAids({ navigation }) {
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
            source={require("./assets/images/hiv.jpg")}
            style={styles.Image}
          />
          <View style={styles.diseaseContainer}>
            <Text style={styles.diseaseName}>HIV/AIDS</Text>
            <View style={styles.doctorContainer}>
              <Image
                source={require("./assets/icons/scientist.png")}
                style={styles.doctorIcon}
              />
              <Text style={styles.doctorName}>Dr. Anthony Fauci</Text>
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
            Dr. Anthony Fauci's Contributions
          </Text>
          <Text style={styles.contributionsText}>
            Dr. Anthony Fauci has played a pivotal role in HIV/AIDS research and
            public health policy since the early days of the epidemic. As the
            director of the National Institute of Allergy and Infectious
            Diseases (NIAID), he has been instrumental in:
          </Text>
          <Text style={styles.contributionsText}>
            <Text style={styles.Bold}>Research Advancements:</Text> Dr. Fauci
            has led significant research efforts that have led to the
            development of life-saving antiretroviral therapies and strategies
            for HIV prevention, including Pre-Exposure Prophylaxis (PrEP).
          </Text>
          <Text style={styles.contributionsText}>
            <Text style={styles.Bold}>Education and Awareness:</Text> Dr. Fauci
            has been a prominent voice in educating the public about HIV/AIDS,
            dispelling myths and stigma associated with the virus, and
            emphasizing the importance of compassionate care and support for
            those affected. for new treatment strategies.
          </Text>
          <Text style={styles.contributionsText}>
            <Text style={styles.Bold}>Global Impact: </Text> His work extends
            beyond the U.S.; he has supported international efforts to combat
            HIV/AIDS, particularly in regions heavily impacted by the epidemic,
            such as sub-Saharan Africa.
          </Text>
          <Text style={styles.contributionsText}>
            <Text style={styles.Bold}>Public Health Advocacy: </Text> He has
            consistently advocated for public health measures that prioritize
            testing, prevention, and treatment access, helping to transform HIV
            from a fatal disease into a manageable chronic condition.
          </Text>
          <Text style={styles.contributionsTitle}>HIV/AIDS </Text>
          <Text style={styles.contributionsText}>
            HIV (Human Immunodeficiency Virus) is a virus that attacks the
            body's immune system, specifically targeting CD4 cells (T cells).
            These cells are crucial for helping the body fight infections. If
            left untreated, HIV can lead to AIDS (Acquired Immunodeficiency
            Syndrome), the final stage of HIV infection. At this stage, the
            immune system becomes severely compromised, making the body
            vulnerable to opportunistic infections and certain cancers.
          </Text>
          <Text style={styles.contributionsTitle}>Symptoms of HIV/AIDS</Text>
          <Text style={styles.contributionsText}>
            <Text style={styles.Bold}>Fever:</Text> A persistent fever is often
            one of the first signs of HIV infection, occurring within 2 to 4
            weeks after exposure.{"\n"}
            <Text style={styles.Bold}>Fatigue:</Text> Individuals may experience
            extreme tiredness that does not improve with rest. {"\n"}
            <Text style={styles.Bold}>Swollen Lymph Nodes:</Text> Painless
            swelling of lymph nodes, particularly in the neck, armpits, or
            groin, is common.{"\n"}
            <Text style={styles.Bold}>Wieght Loss:</Text> Significant and
            unexplained weight loss can occur over time.{"\n"}
            <Text style={styles.Bold}>Night Sweat:</Text> Excessive sweating
            during sleep. {"\n"}
            <Text style={styles.Bold}>Diarrhea:</Text> Persistent diarrhea
            lasting more than a week is another symptom.
            {"\n"}
            <Text style={styles.Bold}>Opportunistic Infections: </Text> With a
            weakened immune system, individuals become more susceptible to
            infections that would not typically affect healthy individuals.
            These can include pneumonia, tuberculosis, and certain types of
            cancer, such as Kaposi's sarcoma.
          </Text>
          <Text style={styles.contributionsTitle}>Transmission of HIV</Text>
          <Text style={styles.contributionsText}>
            HIV is transmitted through specific bodily fluids, including blood,
            semen, vaginal fluids, rectal fluids, and breast milk. Common modes
            of transmission.
          </Text>
          <Text style={styles.infoSubtitle}>Diagnosis and Treatment</Text>
          <Text style={styles.contributionsText}>
            TEarly diagnosis of HIV is crucial for effective management. Routine
            testing is recommended for individuals at higher risk. The diagnosis
            is made through blood tests that detect the virus or antibodies
            produced in response to it. Once diagnosed, individuals can begin
            antiretroviral therapy (ART), which involves taking a combination of
            HIV medicines daily. ART helps manage the virus, allowing
            individuals to lead healthy lives and reduce the risk of
            transmitting the virus to others. When adhered to consistently, ART
            can reduce the viral load to undetectable levels, meaning the virus
            cannot be transmitted sexually (known as "Undetectable =
            Untransmittable" or U=U).
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

export default HivAids;
