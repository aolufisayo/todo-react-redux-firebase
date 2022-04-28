// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGWP6JVVXDsmRXh4vVcmc5fOSM5up-rxQ",
  authDomain: "todo-app-react-redux-fir-eee28.firebaseapp.com",
  projectId: "todo-app-react-redux-fir-eee28",
  storageBucket: "todo-app-react-redux-fir-eee28.appspot.com",
  messagingSenderId: "870660674859",
  appId: "1:870660674859:web:b3a740e192c9bcf3bf216e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
