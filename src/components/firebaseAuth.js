import  { auth } from '../firebase/firebase-config'

//firebase auth 

const handleLogout = () => auth.signOut() 

const loginUser = (email, password) => auth.signInWithEmailAndPassword(email, password)

const createUser = (email, password) => auth.createUserWithEmailAndPassword(email, password)

const authListener = (callback) => auth.onAuthStateChanged(callback)



export { handleLogout, loginUser, authListener, createUser }
