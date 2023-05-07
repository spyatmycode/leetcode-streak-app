import React, { useEffect } from 'react'
import { useContext, createContext, useState } from 'react'
import { auth } from '../firebase/firebaseconfig'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState("")

    useEffect(() => {
        onAuthStateChanged(auth, (thisUser) => {
            setUser(thisUser)
        })
    },[auth])



    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider