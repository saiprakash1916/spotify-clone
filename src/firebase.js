import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCclvTvRZatajcW3kWJZRui9CHcntZSHlw",
  authDomain: "spotify-clone-bef13.firebaseapp.com",
  projectId: "spotify-clone-bef13",
  storageBucket: "spotify-clone-bef13.appspot.com",
  messagingSenderId: "820946431731",
  appId: "1:820946431731:web:15ba3976516a25c54b9186",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
