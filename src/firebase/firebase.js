// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiaTSn4K0-jAhVP_9bNPbOQkqLyFHwExQ",
  authDomain: "vueserver-a664f.firebaseapp.com",
  projectId: "vueserver-a664f",
  storageBucket: "vueserver-a664f.firebasestorage.app",
  messagingSenderId: "145861235131",
  appId: "1:145861235131:web:8d8c4730bedb85e5d9749e",
  measurementId: "G-XK9FK6C7RH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default db;