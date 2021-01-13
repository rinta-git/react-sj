import firebase from "firebase";
require('firebase/firestore')
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCdT-of7pw4au1TdlVB_BisN_HctnV1X0k",
  authDomain: "southern-multipacks.firebaseapp.com",
  projectId: "southern-multipacks",
  storageBucket: "southern-multipacks.appspot.com",
  messagingSenderId: "325444496044",
  appId: "1:325444496044:web:6ed25be9b9314ef5a24d09",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
export { db };
