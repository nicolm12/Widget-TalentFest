import  { fb } from '../firebase/firebase-config'

//firebase auth 

const handleLogout = () => fb.auth().signOut() 

const loginUser = (email, password) => fb.signInWithEmailAndPassword(email, password)

const createUser = (email, password) => fb.createUserWithEmailAndPassword(email, password)

const authListener = (callback) => fb.onAuthStateChanged(callback)



export { handleLogout, loginUser, authListener, createUser }
