import * as firebase from "firebase";

// credentiales of firebase SDK
const firebaseConfig = {
  apiKey: "your_apiKey",
  authDomain: "your_authDomain",
  projectId: "your_projectId",
  storageBucket: "your_storageBucket",
  messagingSenderId: "your_messagingSenderId",
  appId: "your_appId",

};

// initialize app with firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();