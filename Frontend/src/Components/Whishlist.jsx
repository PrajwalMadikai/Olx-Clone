import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
export const Whishlist = () => {
 
  let [product,setProduct]=useState()
 
  useEffect(()=>{

    
    const fetching=async()=>{
      const token = localStorage.getItem("token");
         try {
              let response=await axios.get('http://localhost:3000/whishlist', {
                headers: {
                  "Authorization": `Bearer ${token}`, // Add the token to the request header
                },withCredentials: true})
              setProduct(response.data)
         } catch (error) {
          console.log(error);
         }
    }
    fetching()

   

  },[])
    
   
 
  const unwhishlist = async (e, productId) => {
    e.preventDefault();
    console.log("Remove product ID:", productId);
  
    try {
      let response = await axios.post("http://localhost:3000/removewhishlist", { productId });
  
      toast.success("Removed from wishlist!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      });
  
      
      setProduct((prev) => prev.filter((product) => product._id !== productId));
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove product.", {
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
  
  return (
    <>
    <Navbar/>
    <div className='w-full h-full'>
    <div className="pl-10 pt-6">
  <nav className="flex" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
      <li className="inline-flex items-center">
      <Link to='/' className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2a1 1 0 01.864.504l6 10a1 1 0 01-.864 1.496H4a1 1 0 01-.864-1.496l6-10A1 1 0 0110 2zM10 4.414L5.618 12h8.764L10 4.414z" />
          </svg>
          Home
        </Link>
       
      </li>
      <li>
        <div className="flex items-center">
          <svg className="w-4 h-4 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span className="ml-1 text-md font-medium text-gray-500 md:ml-2">Wishlist</span>
        </div>
      </li>
    </ol>
  </nav>

  
</div>

      <div className='w-full h-[500px]'>
       
        <div className='px-5 py-11 md:px-20'>
          {/* Grid Container */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {product?.map((product) => (
  <div key={product._id} className="bg-white shadow-md rounded-md p-3">
    <div className="relative">
      <img
        src={`http://localhost:3000/uploads/${product.image}`}
        alt={product.title}
        className="w-full h-36 object-cover rounded-md mb-3"
      />

      {/* Cancel/Remove Icon */}
      <p
        onClick={(e) => unwhishlist(e, product._id)}
        className="absolute top-2 right-2 cursor-pointer text-black hover:text-white"
        title="Remove from wishlist"
      >
        <FaTimes size={20} />
      </p>
    </div>

    <h3 className="font-bold text-lg">{product.title}</h3>
    <p className="text-gray-600 text-sm">{product.description}</p>
    <p className="text-gray-600 text-sm">
      <strong>Brand:</strong> {product.brand}
    </p>
    <p className="text-gray-600 text-sm">
      <strong>Year:</strong> {product.year}
    </p>
    <p className="text-gray-600 text-sm">
      <strong>Owners:</strong> {product.owners}
    </p>

        <p className="font-bold text-green-600 mt-2">₹ {product.price}</p>
      </div>
    ))}

      
              </div>
        </div>
      </div>
    </div>
    </>
  )
}
