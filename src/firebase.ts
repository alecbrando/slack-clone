import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWfvZRsKa-qA149-D8JZjnhSEo4wzcUsU",
  authDomain: "slack-clone-4b76b.firebaseapp.com",
  projectId: "slack-clone-4b76b",
  storageBucket: "slack-clone-4b76b.appspot.com",
  messagingSenderId: "666643025657",
  appId: "1:666643025657:web:f6fe392b77fbad58331c28",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
