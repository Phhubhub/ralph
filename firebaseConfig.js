import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQnE5FeS1N5bDiYpr5TjKmrg-WXkmVyMM",
  authDomain: "fir-2024-72255.firebaseapp.com",
  projectId: "fir-2024-72255",
  storageBucket: "fir-2024-72255.appspot.com",
  messagingSenderId: "486828788885",
  appId: "1:486828788885:web:04bb89e9f0e018b1951f9c",
  measurementId: "G-624LEVD5BD"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };
