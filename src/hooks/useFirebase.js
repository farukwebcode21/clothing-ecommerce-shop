import { useEffect, useState } from 'react';
import initializeFirebase from '../components/Pages/Login/Firebase/firebase.init'
import { getAuth, signInWithEmailAndPassword,updateProfile, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    // ======================>> Use Registation <<=======================

    const userRegister = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                    }).then(() => {
                    // Profile updated!
                    // ...
                    }).catch((error) => {
                    // An error occurred
                    // ...
                    });

                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage)
            })
            .finally(() => setIsLoading(false));

    }
    // ======================>> Use Login <<=======================

    const loginUser = (email, password, location, navigate) => {
         setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
        .finally(() => setIsLoading(false));
    }

    // =============>> Use Login Logout Observation <<==============
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
           setIsLoading(false);
       });
        return () => unsubscribe;

    }, [auth])


    // ======================>> Use Logout <<=======================
    const logout = () => {
         setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            }).catch((error) => {
            setAuthError(error.message)
            })
        .finally(() => setIsLoading(false));
    }


    return {
        user,
        userRegister,
        logout,
        loginUser,
        isLoading,
        authError,
    }

}
export default useFirebase;