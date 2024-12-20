import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const LoginContext=createContext()
export default function LoginProvider({children}){

  let[isLoginVisible,setLoginVisible]=useState(false)
  let [user,setUser]=useState()


  useEffect(() => {
    const storedUser = localStorage.getItem("token");
    if (storedUser) {
      setUser(storedUser);  
    }
  }, []);

  const toggleLogin = () => {
    setLoginVisible((prev) => !prev);
  };

  const logout = async () => {
    try {
       
      await axios.get("http://localhost:3000/logout");
      
      localStorage.removeItem("token");
      setUser(null);
      
      toast.success("Logout successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    } catch (error) {
      console.log(error);
      toast.error("Logout failed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }
  };
  
  return(<LoginContext.Provider value={{isLoginVisible,toggleLogin,setLoginVisible,user,setUser,logout}}>
    {children}
  </LoginContext.Provider>)

}
export function UserAuth(){
  return useContext(LoginContext)
}