import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import auth from "../Firebase/Firebase.config.js"
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

 export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [user,SetUser]=useState(null);
    const[loading,setLoading]=useState(true);
   const provider=new GoogleAuthProvider();
   const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup( auth ,provider)
    
   }
  
   const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }
   const updateUser=(name,image)=>{
   return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:image
    })
   }
   const logIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
   const logOut=()=>{
    return signOut(auth)
   }
   useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        SetUser(currentUser);
        setLoading(false)
    })
    return ()=>{
        return unSubscribe();
    }
   },[])
    const authInfo={
        user,loading,googleSignIn,createUser,logIn,logOut,updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;