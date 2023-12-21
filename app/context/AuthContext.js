import { useContext, createContext, useState, useEffect } from "react";

import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider} from "firebase/auth";

const AuthContext = createContext()
import {auth} from '../firebase'

export const AuthContextProvider = ({children})=>{
    const [user,setusername] = useState(null);
    const googleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
    const logOut = ()=>{
        signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setusername(currentUser);
        })
        return ()=> unsubscribe()
    },[user]);
    return (
        <AuthContext.Provider value={{user, googleSignIn, logOut}}>
                {children}
        </AuthContext.Provider>
    )

}


export const UserAuth = ()=>{
    return useContext(AuthContext)
}