import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { LoginContext } from '../context/LoginContext'

const Home = () => {

   let [product,setProduct]=useState([])
   const [like, setLike] = useState({}); // Track the liked products using their IDs
   const [wishlistAdded, setWishlistAdded] = useState(false);
   useEffect(()=>{
    const fetchProduct=async()=>{
      try {
         const response=await axios.get('http://localhost:3000/products')
         console.log("Api respose:",response.data);
         
         setProduct(response.data)
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchProduct()
     
    
   },[])
   const addToWishlist = async (productId) => {
    try {
      const token = localStorage.getItem("token"); 
      const response = await axios.post("http://localhost:3000/addwhishlist",{ productId },
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          withCredentials: true,  
        }
      )
      
      setLike((prevState) => ({
        ...prevState,
        [productId]: !prevState[productId],
      }));
      setWishlistAdded(true); // Indicate wishlist addition
      toast.success("Added to wishlist!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      });
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      toast.error("Failed to add to wishlist!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      });
    }
  };

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
  
 

 

  return (<>
   
    {/* PRODUCT ITEMS LIST  */}
    <div className='w-full h-[500px] '>
  <div className='px-5 py-11 md:px-20'>
    {/* Grid Container */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
    {product.map((product) => (
        <div key={product._id} className="bg-white shadow-md rounded-md p-3">
          <div className="relative">
            <img
              src={`http://localhost:3000/uploads/${product.image}`} // Correct image URL path
              alt={product.title}
              className="w-full h-36 object-cover rounded-md mb-3"
            />
             <div className="absolute top-4 left-4 bg-yellow-400 text-black font-bold px-2 py-1 text-xs rounded">
              FEATURED
            </div>
            
            {/* Position the like/unlike icon at the top-right of the image */}
            <p onClick={() => addToWishlist(product._id)}>
              {like[product._id] ? (
                <FaHeart className="absolute top-4 right-4 text-red-500" />
              ) : (
                <FaRegHeart className="absolute top-4 right-4 text-gray-300" />
              )}
            </p>
          </div>
          <p className="font-bold text-lg text-black mt-1">₹ {product.price}</p>
          <h3 className="font-bold text-md">{product.title}</h3>

          {/* Displaying the additional fields */}
          <div className='flex  '>
          <p className="text-gray-600 text-sm mr-2">  {product.year}</p>
          <p className="text-gray-600 text-sm"> {product.brand}</p>
          <p className="text-gray-600 text-sm"> {product.petrol}</p>
          </div>
          <p className="text-gray-600 text-sm"> {product.transmission}</p>

          <p className="text-gray-600 text-sm">Ownership:  {product.owners}</p>

           
        </div>
      ))}
        </div>
  </div>
</div>

  </>
  )
}

export default Home