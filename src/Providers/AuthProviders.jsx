import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProviders = ({ children }) => {

   
    const [ user, setUser ] = useState(null);
    const [loading,setLoading]= useState(true);
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userlogin = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }
     

    const logout =()=>{
        setLoading(false);
         return signOut(auth);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
        setUser(loggedUser);

        //  if(loggedUser){
        //      axios.post('https://localhost:5000/jwt', {email: loggedUser.email})
        //      .then(data =>{
               
        //          localStorage.setItem('access-token', data.data.token)
        //          setLoading(false);
        //     })
        // }
        //  else{
        //      localStorage.removeItem('access-token')

        return ()=>{
            unsubscribe();
        }
     })
    },[])
    const authInfo = {
        user,
        createUser,
        userlogin,
        logout ,
        loading,
        updateUserProfile,
        googleSignIn

    }

  

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;