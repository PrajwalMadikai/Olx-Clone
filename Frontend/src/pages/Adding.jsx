import React, { useContext } from 'react'
import AddingMain from '../Components/AddingMain'
import CarsProduct from '../Components/CarsProduct'
import { ProductContext } from '../context/ProductContext'
const Adding = () => {
  

  const {carComponent}=useContext(ProductContext)



  return (
    <div className='w-full h-full '>
      <div className='w-full h-20 bg-gray-100'>
      <i class="fa-light fa-arrow-left-long"></i>
      <p className='pl-10 pt-7 text-xl'><i class="fa-solid fa-arrow-left"></i></p>
      </div>
      <h3 className='flex justify-center font-bold text-xl  my-7'>POST YOUR AD</h3>
      {/* DESKTOP VIEW  */}
      <div className='  h-full w-[1100px] border-2 border-gray bg-white   mx-auto'>
       <h3 className='font-semibold text-lg pt-5 pl-5 '>CHOOSE A CATEGORY</h3>
       {carComponent?(
        <CarsProduct/>
       ):(
       <AddingMain/>
       )}



      </div>
    </div>
  )
}

export default Adding