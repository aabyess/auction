
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore 추가
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiaTSn4K0-jAhVP_9bNPbOQkqLyFHwExQ",
  authDomain: "vueserver-a664f.firebaseapp.com",
  projectId: "vueserver-a664f",
  storageBucket: "vueserver-a664f.firebasestorage.app",
  messagingSenderId: "145861235131",
  appId: "1:145861235131:web:8d8c4730bedb85e5d9749e",
  measurementId: "G-XK9FK6C7RH"
};


// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firestore 초기화
const db = getFirestore(app);

// Firebase Authentication 초기화
const auth = getAuth(app);


export { db,auth };