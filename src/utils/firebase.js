import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyBr0ZoQKhQhYPcbevN8uuBc680-3WFRsKg",
    authDomain: "netflix-clonee-13.firebaseapp.com",
    projectId: "netflix-clonee-13",
    storageBucket: "netflix-clonee-13.appspot.com",
    messagingSenderId: "10552875258",
    appId: "1:10552875258:web:2fb5c9ff034fc59bc91143"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
   export const auth = firebase.auth();

   export default db;