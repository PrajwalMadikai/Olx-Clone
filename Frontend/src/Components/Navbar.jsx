import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginContext } from '../context/LoginContext';
export default function Navbar(){

  let [states,setStates]=useState(['Kerala','TamilNadu','Delhi'])
  const [showLogin, setShowLogin] = useState(false);  

  const { toggleLogin,user,setUser,logout } = useContext(LoginContext);
 
  const isLogin=()=>{
    toast.error("Please log in to add post!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  }

     

  function toggleDropdown() {
    const dropdown = document.getElementById('dropdownOptions');
    dropdown.classList.toggle('hidden');
  }



  return (<>
    <div className='flex w-full bg-blue-100 p-3 items-center'>
    <svg
    className="pr-5 w-auto max-w-[78px] h-auto md:max-w-[100px]"
    viewBox="0 0 1024 1024"
    data-aut-id="icon"
    fillRule="evenodd"
  >
    <path
      className="rui-w4DG7"
      d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
    ></path>
  </svg>
    <div className="hidden md:flex w-[230px] h-11 border-2 border-blue-300 rounded-md">
   
  <div
  className=" flex items-center justify-between px-2 h-full cursor-pointer"
  onClick={toggleDropdown}
>
   
  <span className="text-gray-500 mr-2">
    <i className="fa-solid fa-magnifying-glass"></i>
  </span>
  
   
  <span className="flex-1 text-left ml-2 mr-10">India</span>
  
   
  <span className="text-gray-500 md:pl-20">
    <i className="fa-solid fa-chevron-down"></i>
  </span>
</div>

<ul
  id="dropdownOptions"
  className="absolute top-full left-0 w-full bg-white border border-blue-300 rounded-md mt-1 hidden"
>
  {states.map((item, id) => (
    <li
      key={id}
      className="flex items-center px-2 py-1 hover:bg-blue-100 cursor-pointer"
    >
      <span className="text-black-500 text-sm pl-3 pr-2">
      <i class="fa-solid fa-location-dot"></i> 
      </span>
      {item}
    </li>
  ))}
</ul>

</div>
<div className='absolute top-[72px] md:static flex w-full pl-5'>
    <input className='p-3 w-[290px] md:w-[760px] text-8md h-11 border-2 border-blue-300 rounded-md text-gray-500' type="text" name="" id="" placeholder='Find Card, Mobile Phones and more...' />
    <div className='flex justify-center items-center bg-green-900 w-12 h-11 rounded-sm'>
        <i class="fa-solid fa-magnifying-glass text-white"></i>
    </div>
</div>




    <div className='flex ml-3 md:ml-6 text-black font-bold text-md'>
      <h2>ENGLISH</h2>
      <span className="ml-3 text-md text-gray-500">
    <i className="fa-solid fa-chevron-down"></i>
  </span>
    </div>
    <div className='ml-7'>
      <Link to='/whishlist'>
      <p><i class="fa-regular fa-heart"></i></p> 
      </Link>
      </div>
    <div className="ml-5 md:ml-10 text-md font-bold">
      {user?(
        <h2 className="relative w-16 cursor-pointer" onClick={logout} >
        Logout
        <div className="absolute top-5 left-0 w-[53px] h-0.5 bg-black mt-1"></div>
      </h2>
      ):(<h2 className="relative cursor-pointer" onClick={toggleLogin}>
        Login
        <div className="absolute top-5 left-0 w-full h-0.5 bg-black mt-1"></div>
      </h2>)}
       
    </div>
    {user? (
      <Link to='/add'>
    <button className="ml-3 md:ml-5 flex items-center w-[100px] justify-center bg-yellow-500 text-white font-semibold rounded-full px-6 py-3 hover:bg-yellow-600 active:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
    <i className="fa-solid fa-plus mr-2"></i> SELL 
   </button>
    </Link>
    ):(
     
        <button onClick={isLogin} className="ml-3 md:ml-5 flex items-center w-[100px] justify-center bg-yellow-500 text-white font-semibold rounded-full px-6 py-3 hover:bg-yellow-600 active:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
        <i className="fa-solid fa-plus mr-2"></i> SELL 
      </button>
   
    )}

     

  </div>
  </>
  )
}
