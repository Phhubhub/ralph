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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image source={require("./assets/images/AP.png")} style={styles.logo} />
          <Text style={styles.appName}>Araling Panlipunan</Text>
        </View>

        {/* About Us Content */}
        <View style={styles.content}>
          <Text style={styles.subheading}>About Us</Text>
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
          <Text style={styles.meet}>Meet Our Team</Text>
        </View>
         {/*members at details nila*/}
        <View style={styles.view1}>
        <View style={styles.wow}>
        {/* Image on the left */}
        <Image source={require('./assets/images/rap.png')} style={styles.image} />

        {/* Text on the right */}
        <Text style={styles.text}><Text style={styles.names}>GAGANTE RALPH : UI DESIGN </Text>- As the UI designer for our app, Araling Panlipunan, I utilize my passion for visual aesthetics to enhance the user experience. I draw inspiration from my hobbies in art and design to create captivating interfaces that embody the richness of Philippine culture and history."</Text>
         </View>
         </View>
         <View style={styles.view1}>
        <View style={styles.wow}>
        {/* Image on the left */}
        <Image source={require('./assets/images/telen.png')} style={styles.image} />

        {/* Text on the right */}
        <Text style={styles.text}><Text style={styles.names}>RAYZEL TELEN : EX DESIGN & PERSONA</Text> - ”This project is user-friendly, especially for grade school students. This design captures their attention, and users of our project will not quickly get bored. We also aligned our designs with the needs of the users, particularly elementary students.
        We ensured that the user experience in this system encourages students to read more, not just physical books but also to gain additional knowledge."</Text>
         </View>
         </View>
         <View style={styles.view1}>
        <View style={styles.wow}>
        {/* Image on the left */}
        <Image source={require('./assets/images/peabo.png')} style={styles.image} />

        {/* Text on the right */}
        <Text style={styles.text}><Text style={styles.names}>PEABO SANTIAGO : SPACING</Text> - "My specialty in this project is spacing,which i apply to Consistent spacing maintains design cohesion, while balanced white space promotes visual flow. Proximity and alignment create a logical structure, directing users through the content. By prioritizing spacing, we create an accessible and usable design that communicates complex information efficiently"</Text>
         </View>
         </View>
         <View style={styles.view1}>
        <View style={styles.wow}>
        {/* Image on the left */}
        <Image source={require('./assets/images/lim.png')} style={styles.image} />

        {/* Text on the right */}
        <Text style={styles.text}><Text style={styles.names}>RUSSEL LIM : COLOR THEORY & 60 30 10 Rule</Text> - "In our Araling Panlipunan project, my focus is on color theory and the 60-30-10 rule. I chose a brown color palette to reflect the theme. The dominant color will cover 60% of the design, such as the background. The secondary color will make up 30%, used for elements like navigation menus and sidebars. Lastly, the accent color will account for 10%, highlighting important elements like buttons, icons, or links."</Text>
         </View>
         </View>
         <View style={styles.view1}>
        <View style={styles.wow}>
        {/* Image on the left */}
        <Image source={require('./assets/images/panganiban.png')} style={styles.image} />

        {/* Text on the right */}
        <Text style={styles.text}><Text style={styles.names}>ARIES PANGANIBAN : TYPOGRAPHY</Text> - ”In this project, my focus is on typography, applying key principles such as clarity of message, aesthetics, branding, emotion, and hierarchy. The right font and arrangement enhance understanding and visual appeal, while consistent font usage aids brand recognition. Different fonts evoke various emotions, and proper text arrangement creates a clear hierarchy, highlighting the importance of information.”</Text>
         </View>
         </View>
         <View style={styles.view1}>
        <View style={styles.wow}>
        {/* Image on the left */}
        <Image source={require('./assets/images/malana.png')} style={styles.image} />

        {/* Text on the right */}
        <Text style={styles.text}><Text style={styles.names}>MARK JUSTINE MALANA : LAZY LINKING </Text> - “My specialty in this project is lazy linking, and my goal is to create an application that is fast, quick, efficient, and easy to use, ensuring that it effectively satisfies my users' needs and enhances their overall experience.”</Text>
         </View>
         </View>
         <View style={styles.last}>
           <TouchableOpacity style={styles.buttonlast} onPress={() => navigation.navigate("Login")}>
             <Text style={styles.buttonText}>Log Out</Text>
           </TouchableOpacity>
           </View>

        {/* Social Media Links */}
        <View style={styles.socialMedia}>
          <Text style={styles.socialHeading}>Follow Us Via</Text>
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
          
          <Text style={styles.contactInfo}> Or Email Us : support@aralingpanlipunan.com</Text>
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
    backgroundColor: "#F5F5D6",
    paddingBottom: 50,
  },
  buttonlast: {
    backgroundColor: "#95725A",
    padding: 10,
    borderRadius: 5,
    marginTop: 50,
    borderRadius: 30,
  },
  last: {
    paddingHorizontal: 20,
    
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  view1: {
    marginBottom: 20,
  },
  wow: {},
  names: {
    color: "#95725A",
    fontWeight: "bold",
  },
  item2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scroll: {
   
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
    borderWidth: 6,
    borderColor: "#95725A",
    
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
  meet: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    left: 110,
    top: 40,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    marginTop: 20,
    
  },
  socialMedia: {
    
    alignItems: "center",
    marginTop : 40,
  },
  socialHeading: {
    fontSize: 18,
    fontWeight: "semi-bold",
    color: "#333",
  },
  socialIcons: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,

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
    top: 20,
    borderColor: '#A4A4A4',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: 'black',
    marginTop: 20,
    height: 150,
    width: 320,
  },
  wow: {
    flexDirection: 'row',     
    alignItems: 'center',     
    justifyContent: 'space-between', 
    
    
  },
  image: {
    width: 50,                 
    height: 50,                
    marginRight: 10,
    borderRadius: 10,
  
  },
  text: {
    fontSize: 11,
    color: '#333',
    flexShrink: 1,
    
  },
});

export default Account;
