import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyC24SSupZIvhiEMA66UmOSVkp0vK_kcJJs",
  authDomain: "widget-talenfest.firebaseapp.com",
  projectId: "widget-talenfest",
  storageBucket: "widget-talenfest.appspot.com",
  messagingSenderId: "787974551815",
  appId: "1:787974551815:web:f9c460a74b0df0fb12ada2"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);
const db = app.firestore();
const fb = app.auth();

export { db, fb }
