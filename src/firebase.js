import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDOP0DTTzllcK2wXNWTcje75wDtkGBCF7E",
  authDomain: "pap-escola-b9c0f.firebaseapp.com",
  databaseURL: "https://pap-escola-b9c0f.firebaseio.com",
  projectId: "pap-escola-b9c0f",
  storageBucket: "pap-escola-b9c0f.appspot.com",
  messagingSenderId: "93823508104",
  appId: "1:93823508104:web:94dfbb14c9d74412fc493d"
  };
 export const fb = firebase.initializeApp(firebaseConfig);
 export const db = firebase.firestore()
 export const storage = firebase.storage()