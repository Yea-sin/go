import initializeAuthentication from "../Pages/Shared/Login/Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider()
const useFirebase = () =>{
    const [user, setUser] = useState({})
    const auth = getAuth();
    const loginWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result=> setUser(result.user))
    }
    const logOut = () =>{
        signOut(auth)
        .then(()=>setUser({}))
    }
    useEffect(()=>{
        const unsubscribe = (onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }else{setUser({})}
        }))
        return unsubscribe;
    },[])
    return {
        loginWithGoogle,
        logOut,
        user
    }
}
export default useFirebase;