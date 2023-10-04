/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import app from "./../firebase/Firebase.init";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // const registerUser = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };
  const displayURl=((photourl,name)=>{
    updateProfile(auth.currentUser, {
      displayName: name,
       photoURL: photourl
    })

  })

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      if(loggedInUser){
        axios.post('http://localhost:5000/jwt', {email: loggedInUser.email})
        .then(data =>{
            localStorage.setItem('access-token', data.data.token)
        })
    }
    else{
        localStorage.removeItem('access-token')
    }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {  user, logOut, loginUser,displayURl };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
