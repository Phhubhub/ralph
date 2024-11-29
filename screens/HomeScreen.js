import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  Text,
  ScrollView,
  TextInput,
  Platform, 
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SlideShow from '../components/Slide';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { Video } from 'expo-av';
import Recommendation from '../components/Recommendation';
import Action from '../components/Action';
import Horror from '../components/Horror';
import Fantasy from '../components/Fantasy';
import Thriller from '../components/Thriller'; 
import Drama from '../components/Drama';
import Sidebar from '../components/SideBar';

const HomeScreen = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [slides, setSlides] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const [videoStatusText, setVideoStatusText] = useState('');
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);  
  const [movies, setMovies] = useState([]);  // Store all movies
  const [suggestions, setSuggestions] = useState([]);  // Store search suggestions

  // Fetch all movies from Firestore
  const fetchMovies = async () => {
    try {
      const q = query(collection(db, 'movies'));
      const querySnapshot = await getDocs(q);
      const fetchedMovies = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMovies(fetchedMovies);  // Store all movies in state
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Handle search query and fetch suggestions
  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query === '') {
      setSuggestions([]);  // Clear suggestions if search is empty
    } else {
      // Query Firestore to find movies with titles that match the search query
      const q = query(collection(db, 'movies'), where('title', '>=', query), where('title', '<=', query + '\uf8ff'));
      const querySnapshot = await getDocs(q);
      const fetchedSuggestions = querySnapshot.docs.map((doc) => doc.data().title);
      setSuggestions(fetchedSuggestions);  // Update suggestions based on query
    }
  };

  // Handle movie selection from suggestions
  const handleSuggestionSelect = (title) => {
    setSearchQuery(title);
    setSuggestions([]);  // Clear suggestions after selecting a title
  };

  // Fetch slide data from Firestore
  const fetchSlides = async () => {
    try {
      const q = query(collection(db, 'slides'), orderBy('order'));
      const querySnapshot = await getDocs(q);
      const fetchedSlides = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSlides(fetchedSlides);
    } catch (error) {
      console.error('Error fetching slides:', error);
    }
  };

  useEffect(() => {
    fetchSlides();
    fetchMovies();  // Fetch movies when component mounts
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  const handleSlidePress = (videoUrl) => {
    if (videoUrl) {
      setCurrentVideoUrl(videoUrl);
      setModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setCurrentVideoUrl('');
    setVideoStatusText('');
  };

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);  // Toggle search bar expansion
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 0 }} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleSidebar}>
            {sidebarVisible ? (
              <Ionicons name="close" size={30} color="#FFFFFF" />
            ) : (
              <Ionicons name="menu" size={30} color="#FFFFFF" />
            )}
          </TouchableOpacity>
          
          {/* Search Bar (Visible only when expanded) */}
          {isSearchExpanded && (
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={handleSearch}  // Update search query and fetch suggestions
              placeholderTextColor="#AAAAAA"
            />
          )}

          {/* Search Icon */}
          <TouchableOpacity onPress={toggleSearch} style={styles.searchIconContainer}>
            <Ionicons name="search" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Display Suggestions */}
        {searchQuery && suggestions.length > 0 && (
          <FlatList
            data={suggestions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSuggestionSelect(item)}>
                <Text style={styles.suggestionItem}>{item}</Text>
              </TouchableOpacity>
            )}
            style={styles.suggestionsList}
          />
        )}

        <View style={styles.content}>
          {slides.length > 0 && (
            <>
              <SlideShow slides={slides} onSlidePress={handleSlidePress} />
              <Recommendation />
              <Action />
              <Horror />
              <Fantasy />
              <Thriller />
              <Drama />
            </>
          )}
        </View>

        {/* Video Modal */}
        <Modal visible={modalVisible} onRequestClose={handleCloseModal} transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {Platform.OS !== 'web' && (
                <Video
                  source={{ uri: currentVideoUrl }}
                  style={styles.videoPlayer}
                  useNativeControls={true}
                  resizeMode="cover"
                  shouldPlay={!isPaused}
                  onPlaybackStatusUpdate={(status) => {
                    if (status.isPlaying !== !isPaused) {
                      setIsPaused(status.isPlaying ? false : true);
                    }
                  }}
                />
              )}
              <Text style={styles.videoStatusText}>{videoStatusText}</Text>
            </View>
          </View>
        </Modal>
      </ScrollView>

      {/* Sidebar component */}
      <Sidebar isVisible={sidebarVisible} onClose={() => setSidebarVisible(false)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#000000',
    zIndex: 2,
  },
  content: {
    flex: 1,
    backgroundColor: '#000000',
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  searchIconContainer: {
    paddingLeft: 10,
  },
  suggestionsList: {
    backgroundColor: '#FFFFFF',
    maxHeight: 200,
    position: 'absolute',
    top: 70,
    left: 15,
    right: 15,
    zIndex: 1,
  },
  suggestionItem: {
    padding: 10,
    fontSize: 16,
    color: '#000000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlayer: {
    width: '100%',
    height: '100%',
  },
  videoStatusText: {
    position: 'absolute',
    bottom: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
