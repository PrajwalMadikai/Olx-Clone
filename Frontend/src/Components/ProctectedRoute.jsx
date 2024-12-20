import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
const ProctectedRoute = ({children}) => {
    
    const {user,setUser}=useContext(LoginContext)
    if(!user)
    {
          return <Navigate to='/'></Navigate>
    }else{
        return children
    }
}

export default ProctectedRoute