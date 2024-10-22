import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import {
  SafeAreaView,

  Dimensions,
} from "react-native";
import loadFonts from "./fonts";
import BottomNav from "./bottomNav";

const screenWidth = Dimensions.get("window").width;

function Account({ navigation }) {
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) {
    return null;
  }

  // Calculate image height based on the screen width and original aspect ratio (440/1688)
  const imageHeight = (1688 / 440) * screenWidth;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image source={require("./assets/images/AP.png")} style={styles.logo} />
          <Text style={styles.appName}>Araling Panlipunan</Text>
        </View>

        {/* About Us Content */}
        <View style={styles.content}>
          <Text style={styles.heading}>About Us</Text>
          <Text style={styles.description}>
            Araling Panlipunan is an educational app designed to teach kids about
            Philippine history and culture through interactive e-books and modules.
            Our goal is to make learning fun, engaging, and accessible for everyone.
          </Text>

          {/* Mission and Vision Section */}
          <Text style={styles.subheading}>Our Mission</Text>
          <Text style={styles.description}>
            To create a platform where students can learn about Philippine history
            and culture in an interactive way.
          </Text>

          <Text style={styles.subheading}>Our Vision</Text>
          <Text style={styles.description}>
            To educate the younger generation and foster a deep appreciation for
            the rich heritage of the Philippines.
          </Text>
        </View>
         {/*members at details nila*/}
        <View style={styles.view1}>
        <View style={styles.wow}>
        {/* Image on the left */}
        <Image source={require('./assets/icons/apple.png')} style={styles.image} />

        {/* Text on the right */}
        <Text style={styles.text}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
         </View>
         </View>
         <View style={styles.view1}>
        <View style={styles.wow}>
        {/* Image on the left */}
        <Image source={require('./assets/icons/apple.png')} style={styles.image} />

        {/* Text on the right */}
        <Text style={styles.text}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
         </View>
         </View>
         <View style={styles.view1}>
        <View style={styles.wow}>
        {/* Image on the left */}
        <Image source={require('./assets/icons/apple.png')} style={styles.image} />

        {/* Text on the right */}
        <Text style={styles.text}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
         </View>
         </View>
         <View style={styles.view1}>
        <View style={styles.wow}>
        {/* Image on the left */}
        <Image source={require('./assets/icons/apple.png')} style={styles.image} />

        {/* Text on the right */}
        <Text style={styles.text}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
         </View>
         </View>
         <View style={styles.view1}>
        <View style={styles.wow}>
        {/* Image on the left */}
        <Image source={require('./assets/icons/apple.png')} style={styles.image} />

        {/* Text on the right */}
        <Text style={styles.text}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
         </View>
         </View>
         <View style={styles.view1}>
        <View style={styles.wow}>
        {/* Image on the left */}
        <Image source={require('./assets/icons/apple.png')} style={styles.image} />

        {/* Text on the right */}
        <Text style={styles.text}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
         </View>
         </View>
         

        {/* Social Media Links */}
        <View style={styles.socialMedia}>
          <Text style={styles.socialHeading}>Follow Us</Text>
          <View style={styles.socialIcons}>
            {/* Social media icons/buttons */}
            
      <TouchableOpacity>
        <Image source={require("./assets/icons/facebook.png")} style={styles.icon} />
          </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("./assets/icons/google.png")} style={styles.icon} />
               </TouchableOpacity>
               <TouchableOpacity>
              <Image source={require("./assets/icons/apple.png")} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.contact}>
          
          <Text style={styles.contactInfo}>Email: support@aralingpanlipunan.com</Text>
         </View>
      </ScrollView>
      <BottomNav navigation={navigation} />
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  item2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scroll: {
    flex: 1,
  },
  parentbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  content: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
    lineHeight: 24,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    marginTop: 20,
  },
  socialMedia: {
    marginBottom: 30,
    alignItems: "center",
  },
  socialHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  socialIcons: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  contact: {
    alignItems: "center",
    marginBottom: 20,
  },
  contactHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  contactInfo: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },

  view1: {
    flex: 1,
    justifyContent: 'center', // Center content vertically (optional)
    alignItems: 'center',      // Center content horizontally (optional)
    padding: 20,
  },
  wow: {
    flexDirection: 'row',     
    alignItems: 'center',     
    justifyContent: 'space-between', 
    padding: 10,
    
  },
  image: {
    width: 50,                 
    height: 50,                
    marginRight: 10,
    right: 10,                 
  },
  text: {
    fontSize: 11,
    color: '#333',
    flexShrink: 1,
    
  },
});

export default Account;