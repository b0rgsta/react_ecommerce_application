import firebase from 'firebase/app';
import "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB0Y4eStNb81pQqRotBYs1TJ5ZmxT34Ss",
  authDomain: "looneylollies.firebaseapp.com",
  projectId: "looneylollies",
  storageBucket: "looneylollies.appspot.com",
  messagingSenderId: "109390628265",
  appId: "1:109390628265:web:2d14478aa9a3a173aeb0b8"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
