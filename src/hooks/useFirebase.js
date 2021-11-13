import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Pages/SignIn/Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // create user using email password
    const createUsingEmailPassword = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    };
    // set name 
    const setUserName = (uname) => {
        updateProfile(auth.currentUser, { displayName: uname })
            .then(result => { })
    }
    // login with email password
    const signInUsingEmailandPass = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    // sign in using google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Get the currently signed-in user
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });
        return (() => unSubscribed);
    }, [])

    // signout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        isLoading,
        error,
        setUserName,
        setError,
        setUser,
        setIsLoading,
        createUsingEmailPassword,
        signInUsingGoogle,
        signInUsingEmailandPass,
        logOut
    }
};

export default useFirebase;