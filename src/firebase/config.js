import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBBboWb1IP_ir_rn7q96IdIMXN5MJ2iHcY",
  authDomain: "myfiregram-10a95.firebaseapp.com",
  databaseURL: "https://myfiregram-10a95.firebaseio.com",
  projectId: "myfiregram-10a95",
  storageBucket: "myfiregram-10a95.appspot.com",
  messagingSenderId: "497252251586",
  appId: "1:497252251586:web:410743ec5b72bf04e9c85b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };