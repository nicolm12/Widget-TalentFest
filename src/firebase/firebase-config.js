import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC24SSupZIvhiEMA66UmOSVkp0vK_kcJJs",
    authDomain: "widget-talenfest.firebaseapp.com",
    projectId: "widget-talenfest",
    storageBucket: "widget-talenfest.appspot.com",
    messagingSenderId: "787974551815",
    appId: "1:787974551815:web:f9c460a74b0df0fb12ada2"
  };
  

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
export { auth, firebaseApp }
