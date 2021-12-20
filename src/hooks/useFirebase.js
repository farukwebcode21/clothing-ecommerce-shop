import { useEffect, useState } from 'react';
import initializeFirebase from '../components/Pages/Login/Firebase/firebase.init'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // ======================>> Use Registation <<=======================

    const userRegister = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('User :', user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
            .finally(() => setIsLoading(false));

    }
    // ======================>> Use Login <<=======================

    const loginUser = (email, password) => {
         setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('Login person', user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log('Login error message ',errorMessage);
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
            // An error happened.
            })
        .finally(() => setIsLoading(false));
    }


    return {
        user,
        userRegister,
        logout,
        loginUser,
        isLoading,
    }

}
export default useFirebase;