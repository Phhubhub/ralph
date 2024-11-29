import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid, // For showing toast messages
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Icon from "react-native-vector-icons/FontAwesome";
import { Video } from "expo-av";
import { getDatabase, ref, onValue } from "firebase/database";
import { useCustomFonts } from "./font";

const Action = () => {
  const [action, setAction] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [playPauseState, setPlayPauseState] = useState(true); // Default: Playing
  const videoRef = useRef(null); // Video reference

  const fontsLoaded = useCustomFonts();

  // Fetch action data from Firestore
  useEffect(() => {
    const fetchAction = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "action"));
        const fetchedAction = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log(fetchedAction); // Log fetched data to the terminal

        if (fetchedAction.length === 0) {
          console.log("No data found in the action collection.");
        }

        setAction(fetchedAction);
      } catch (error) {
        console.error("Error fetching action:", error);
      }
    };

    fetchAction();
  }, []);

  // Firebase Realtime Database Listener
  useEffect(() => {
    const database = getDatabase();
    const playPauseRef = ref(database, "/test/"); // Accessing the /test node

    const listener = onValue(playPauseRef, (snapshot) => {
      const playPauseState = snapshot.val(); // Value should be 1 or 0

      if (playPauseState === 1) {
        setPlayPauseState(true); // Set to play
        if (videoRef.current) {
          videoRef.current.playAsync(); // Play the video
          ToastAndroid.show("Video is resumed", ToastAndroid.SHORT); // Show resume message
        }
      } else if (playPauseState === 0) {
        setPlayPauseState(false); // Set to pause
        if (videoRef.current) {
          videoRef.current.pauseAsync(); // Pause the video
          ToastAndroid.show("Video is paused", ToastAndroid.SHORT); // Show pause message
        }
      }
    });

    return () => {
      // Cleanup the listener using off() on playPauseRef
      playPauseRef.off("value", listener);
    };
  }, []);

  const handleSlidePress = (videoUrl, title, description) => {
    if (videoUrl) {
      setCurrentVideoUrl(videoUrl);
      setCurrentTitle(title);
      setCurrentDescription(description);
      setModalVisible(true);
      setIsLoading(true);

      // Start the video when modal opens
      if (videoRef.current) {
        videoRef.current.playAsync();
      }
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setCurrentVideoUrl("");
    setCurrentTitle("");
    setCurrentDescription("");
    if (videoRef.current) {
      videoRef.current.pauseAsync(); // Pause when modal closes
    }
  };

  const handleVideoError = (error) => {
    console.error("Video error:", error);
    setIsLoading(false);
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading Fonts...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Action</Text>

      <ScrollView horizontal>
        {action.length > 0 ? (
          action.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() =>
                handleSlidePress(item.videoUrl, item.title, item.description)
              }
            >
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <Text
                style={styles.cardTitle}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No actions available</Text>
          </View>
        )}
      </ScrollView>

      <Modal
        visible={modalVisible}
        onRequestClose={handleCloseModal}
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBackdrop} />
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={handleCloseModal}
              style={styles.arrowButton}
            >
              <Icon name="arrow-left" size={19} color="#FFFFFF" />
            </TouchableOpacity>
            <Video
              ref={videoRef}
              source={{ uri: currentVideoUrl }}
              style={styles.videoPlayer}
              useNativeControls={true}
              resizeMode="cover"
              onError={handleVideoError}
              onLoadStart={() => setIsLoading(true)}
              onLoad={() => setIsLoading(false)}
            />
            {isLoading && (
              <ActivityIndicator
                size="large"
                color="#FFFFFF"
                style={styles.videoLoader}
              />
            )}
            <Text style={styles.modalTitle}>{currentTitle}</Text>
            <Text style={styles.modalDescription}>{currentDescription}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  title: {
    fontSize: 30,
    color: "#FFFFFF",
    fontFamily: "Roboto-Bold",
    marginBottom: 10,
  },

  card: {
    marginRight: 10,
    alignItems: "center",
  },

  image: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },

  cardTitle: {
    fontFamily: "Roboto-Bold",
    marginTop: 5,
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "left",
    width: 120,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.95)",
  },

  modalContent: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  videoPlayer: {
    width: "105%",
    height: 200,
    borderRadius: 10,
  },

  videoLoader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -15 }, { translateY: -15 }],
  },

  modalTitle: {
    fontSize: 22,
    fontFamily: "Roboto-Bold",
    color: "#FFFFFF",
    textAlign: "left",
    marginVertical: 10,
    width: "94%",
  },

  modalDescription: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#CCCCCC",
    textAlign: "left",
    paddingHorizontal: 10,
    width: "100%",
  },

  arrowButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 50,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    color: "#FF9500",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginTop: 10,
  },

  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },

  emptyText: {
    color: "#CCCCCC",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
  },
});

export default Action;
