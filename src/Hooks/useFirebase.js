import initializeAuthentication from "../Pages/Shared/Login/Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider()
const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [isLoading, setIsloading] = useState(true)
    const auth = getAuth();
    const loginWithGoogle = (location, navigate) =>{
        setIsloading(true)
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const destination = location?.state?.from || '/';
            navigate(destination);
            setUser(result.user);
        }).finally(()=>setIsloading(false));
    }
    const registerWithEmailAndPassword = (email, password, location, navigate) =>{
        createUserWithEmailAndPassword(auth,email, password )
        .then(result=>{
            const destination = location?.state?.from || '/';
            navigate(destination);
            setUser(result.user);
        })
    }
    const loginWithEmailAndPassword = (email, password, location, navigate) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const destination = location?.state?.from || '/';
            navigate(destination);
            setUser(result.user);
        })
    }
    const logOut = () =>{
        signOut(auth)
        .then(()=>setUser({}))
        .finally(()=>setIsloading(false))
    }
    useEffect(()=>{
        const unsubscribe = (onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsloading(false)
        }))
        return unsubscribe;
    },[])
    return {
        loginWithGoogle,
        loginWithEmailAndPassword,
        registerWithEmailAndPassword,
        logOut,
        user,
        isLoading
    }
}
export default useFirebase;