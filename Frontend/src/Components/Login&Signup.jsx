import axios from 'axios'
import { React, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { LoginContext } from '../context/LoginContext'
const LoginAndSignup = () => {

    const {isLoginVisible,setLoginVisible,setUser}=useContext(LoginContext)
    const[signupVisible,setVisible]=useState(false)
  
     function visibleSignup(){
        setLoginVisible(false)
         setVisible(prev=>!prev)
     }
     function visibleLogin()
     {
      setLoginVisible(true)
      setVisible(false)
     }
     function disableLogin()
     {
      setLoginVisible(false)
     }
  
     function disableSignup(){
      setVisible(false)
     }
     const [signupEmail,setSignupEmail]=useState()
     const [signupPassword,setSignupPass]=useState()

     const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
     const handleSubmit=async(e)=>{
          e.preventDefault()
  
          if (!signupEmail || !signupPassword) {
            toast.error("Please enter both email and password.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              theme: "dark",
            });
            return;  
          }
          if (signupPassword.length < 6) {
            toast.error("Password must be at least 6 characters long.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              theme: "dark",
            });
            return; 
          }
        
  
          const userData={
            email:signupEmail,
            password:signupPassword
          }
          try {
                const response=await axios.post('http://localhost:3000/signup',userData)
                toast.success("signuped successfully",{
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: false,
                  theme: "dark",
                })
                setSignupEmail('')
                setSignupPass('')
          } catch (error) {
            if (error.response) {
               
              toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "dark",
              });
            } else {
              console.error('Error:', error);
              toast.error('An error occurred. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "dark",
              });
            }
            
          }
     }
    
    const[userEmail,setuserEmail]=useState()
    const [userPassword,setUserPassword]=useState()
    const [isFormValid, setIsFormValid] = useState(false);

     
    
   
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;

    if (field === 'email') {
      setuserEmail(value);
    } else if (field === 'password') {
      setUserPassword(value);
    }

    const isEmailValid = validateEmail(field === 'email' ? value : userEmail);
    const isPasswordValid = field === 'password' ? value.length > 0 : userPassword.length > 0;

    setIsFormValid(isEmailValid && isPasswordValid);
  };

    const handleLogin=async(e)=>{
     e.preventDefault()
  
    if (!userEmail || !userPassword) {
      toast.error("Please enter both email and password.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      });
      return;  
    }
    if (userPassword.length < 6) {
      toast.error("Password must be at least 6 characters long.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      });
      return; 
    }
  
    const loginData={
      email:userEmail,
      password:userPassword
    }
    try {
       
      let response=await axios.post('http://localhost:3000/login',loginData)
      toast.success("Login successfully",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      })
      const token = response.data.token;
      localStorage.setItem("token",token);
      
     
      setUser(token)
     
      // setuserEmail("");
      // setUserPassword("");
      disableLogin()
    } catch (error) {
      if (error.response) {
        // If the error is due to "User not found"
        if (error.response.status === 404 && error.response.data.message) {
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "dark",
          });
        }
        // Handle other errors (e.g. invalid email or password)
        else {
          toast.error("Invalid Email or Password", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "dark",
          });
        }
      } else {
        console.error('Error:', error);
        toast.error('An error occurred. Please try again.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "dark",
        });
      }
      
    }
  }
  
  return (
    <>
     {isLoginVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-[390px] h-[76%] bg-white opacity-100 rounded-sm shadow-lg p-6">
            {/* Close Button */}
            <button onClick={disableLogin}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="flex justify-end">
              <i className="fa-light fa-xmark cursor-pointer"></i>
            </div>

            {/* Header */}
            <div className="flex justify-center items-center font-bold text-3xl mb-6">
              <svg
                className="pr-5"
                width="78px"
                height="48px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                fillRule="evenodd"
              >
                <path
                  className="rui-w4DG7"
                  d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                ></path>
              </svg>
            </div>

            {/* Input Fields */}
            <h3 className="flex text-green-950 items-center font-bold text-lg justify-center my-5">
              Enter your email to login
            </h3>
            <form onSubmit={handleLogin}>
              <input
                className="w-[350px] border-2 border-gray-400 h-11 rounded-md p-2"
                type="email"
                placeholder="Email"
                onChange={(e) => handleInputChange(e, 'email')}
              />
              <input
                className="w-[350px] my-3 border-2 border-gray-400 h-11 rounded-md p-2"
                type="password"
                placeholder="Password"
                onChange={(e) => handleInputChange(e, 'password')}
              />
              <div className="mx-1 bg-red-50">
                <p className="text-sm p-2 text-black">
                  If you are a new user please select any other login option from the previous page.
                </p>
              </div>
              <div className="flex justify-center items-center my-3">
                <button
                  type="submit"
                  className={`w-[350px] h-11 font-bold text-md p-2 ${
                    isFormValid
                      ? 'bg-green-950 text-white cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!isFormValid}
                >
                  Login
                </button>
              </div>
              <p className="text-xs ml-7 text-gray-500">
                Your email is never shared with external parties nor do we
              </p>
              <p className="text-xs ml-20 text-gray-500">
                use it to spam you in any way.
              </p>
            </form>
            <p
              className="py-2 relative top-2 left-24 font-bold cursor-pointer"
              onClick={visibleSignup}
            >
              <span className="text-gray-600">New to olx? </span> Sign Up
            </p>
          </div>
        </div>
      )}

{/* signup  */}
{signupVisible && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="w-[390px] h-[70%] bg-white opacity-100 rounded-sm shadow-lg p-6">
      {/* Close Button */}
      <button onClick={disableSignup}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="flex justify-end">
        <i className="fa-light fa-xmark cursor-pointer"></i>
      </div>

      {/* Header */}
      <div className="flex justify-center items-center font-bold text-3xl mb-6">
        <svg
          className="pr-5"
          width="78px"
          height="48px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
           
          fill-rule="evenodd"
        >
          <path
            className="rui-w4DG7"
            d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
          ></path>
        </svg>
      </div>

      {/* Input Field */}
      <h3 className="flex text-green-950 items-center font-bold text-lg justify-center my-5">
        Enter your email to signup
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          className="w-[350px]  border-2 border-co border-gray-400 h-11 rounded-md p-2"
          type="email"
          placeholder="Email"
          value={signupEmail}
          onChange={(e) => setSignupEmail(e.target.value)}
        />
        <input
          className="w-[350px] my-3  border-2 border-co border-gray-400 h-11 rounded-md p-2"
          type="password"
          placeholder="Password"
          value={signupPassword}
          onChange={(e) => setSignupPass(e.target.value)}
        />
        <div className="flex justify-center items-center my-3">
          <button
            type="submit"
            className={`w-[350px] text-white font-bold text-md p-2 ${
              isValidEmail(signupEmail) && signupPassword
                ? "bg-green-950"
                : "bg-gray-700 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!isValidEmail(signupEmail) || !signupPassword}
          >
            Sign Up
          </button>
        </div>
        <p className="text-xs ml-7 text-gray-500">
                Your email is never shared with external parties nor do we
              </p>
              <p className="text-xs ml-20 text-gray-500">
                use it to spam you in any way.
              </p>
      </form>

      <p
        className="py-1 relative top-6 left-16 font-bold cursor-pointer"
        onClick={visibleLogin}
      >
        <span className="text-gray-600">Already have account ?</span> Login
      </p>
    </div>
  </div>
)}

    </>
  )
}

export default LoginAndSignup