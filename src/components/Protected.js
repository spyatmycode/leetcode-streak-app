import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate } from 'react-router'

const Protected = ({children}) => {

    const {user} = useContext(AuthContext)

    console.log("this is the user",user);

    if(user === null){
        return <Navigate  to="/auth"/>
    }
    
    return children
    

   
 
}

export default Protected