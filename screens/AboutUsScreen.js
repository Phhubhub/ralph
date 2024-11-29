import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AboutUsScreen = ({ navigation }) => { // Ensure navigation is passed as a prop
  const fadeAnim = new Animated.Value(0);

  // List of developers with names and roles
  const developers = [
    { id: '1', name: 'Kath Puyat gods', role: 'Team Leader', image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Nads Mamaw', role: 'UI/UX Designer', image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Ralph Lutang', role: 'Backend Developer', image: 'https://via.placeholder.com/100' },
    { id: '4', name: 'Solsona FullStack', role: 'Frontend Developer', image: 'https://via.placeholder.com/100' },
    { id: '5', name: 'Avenido asawa ni polizon', role: 'Database Manager', image: 'https://via.placeholder.com/100' },
    { id: '6', name: 'Sophia Brown', role: 'Quality Assurance', image: 'https://via.placeholder.com/100' },
    { id: '7', name: 'David Wilson', role: 'Mobile Developer', image: 'https://via.placeholder.com/100' },
  ];

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Header Section */}
      <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
        <Text style={styles.headerText}>About Us</Text>
        <Text style={styles.subHeaderText}>
          Meet the talented developers behind this amazing project.
        </Text>
      </Animated.View>

      {/* Developer Section */}
      {developers.map((developer, index) => (
        <View
          key={developer.id}
          style={[
            styles.profileContainer,
            index % 2 === 0 ? styles.profileLeft : styles.profileRight,
          ]}
        >
          {index % 2 === 0 ? (
            <>
              {/* Profile Image on Left */}
              <Image source={{ uri: developer.image }} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{developer.name}</Text>
                <Text style={styles.role}>{developer.role}</Text>
              </View>
            </>
          ) : (
            <>
              {/* Profile Image on Right */}
              <View style={styles.details}>
                <Text style={styles.name}>{developer.name}</Text>
                <Text style={styles.role}>{developer.role}</Text>
              </View>
              <Image source={{ uri: developer.image }} style={styles.image} />
            </>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Black background
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    alignSelf: 'flex-start',
  },
  header: {
    marginVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff', // White text
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#aaaaaa', // Light gray text for subtlety
    textAlign: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#1f1f1f', // Dark gray background for cards
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  profileLeft: {
    flexDirection: 'row',
  },
  profileRight: {
    flexDirection: 'row-reverse',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#6200EE', // Purple border for modern contrast
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff', // White text for names
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#cccccc', // Light gray text for roles
    fontStyle: 'italic',
  },
});

export default AboutUsScreen;
