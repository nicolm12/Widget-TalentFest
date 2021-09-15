import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC24SSupZIvhiEMA66UmOSVkp0vK_kcJJs",
    authDomain: "widget-talenfest.firebaseapp.com",
    projectId: "widget-talenfest",
    storageBucket: "widget-talenfest.appspot.com",
    messagingSenderId: "787974551815",
    appId: "1:787974551815:web:f9c460a74b0df0fb12ada2"
  };
  


  const fb = firebase.initializeApp(firebaseConfig);
 

     


  export { fb} 
 