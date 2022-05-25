




import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQ0kxh6ZAm3NyJqaHwIZgXD2xlzK4BMJs",
    authDomain: "casino-24c5a.firebaseapp.com",
    projectId: "casino-24c5a",
    storageBucket: "casino-24c5a.appspot.com",
    messagingSenderId: "675655090248",
    appId: "1:675655090248:web:7391119377ddcf8219d87d"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db ;