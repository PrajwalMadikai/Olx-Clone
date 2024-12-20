import { React } from 'react'
import Category from '../Components/Category'
import Home from '../Components/Home'
import LoginAndSignup from '../Components/Login&Signup'
import Navbar from '../Components/Navbar'

const MainHome = () => {
  return (
    <>
      <Navbar />
      <div  >
     <LoginAndSignup></LoginAndSignup>
     <Category/>
     <Home/>
      </div>
      
    </>
  )
}

export default MainHome