import  { firebaseApp } from '../firebase/firebase-config'

//firebase auth 

const handleLogout = () => firebaseApp.auth().signOut() 

const loginUser = (email, password) => firebaseApp.auth().signInWithEmailAndPassword(email, password)

const createUser = (email, password) => firebaseApp.auth().createUserWithEmailAndPassword(email, password)

const authListener = (callback) => firebaseApp.auth().onAuthStateChanged(callback)



export { handleLogout, loginUser, authListener, createUser }
