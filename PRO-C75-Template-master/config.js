import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDgRefiySpMZz26JrXh3KVlTfvceEVQhTQ",
  authDomain: "riders-2484c.firebaseapp.com",
  projectId: "riders-2484c",
  storageBucket: "riders-2484c.appspot.com",
  messagingSenderId: "812715991808",
  appId: "1:812715991808:web:b6efc3eb740dbb09b749e5",
  measurementId: "G-G3K7BWL5LH"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
