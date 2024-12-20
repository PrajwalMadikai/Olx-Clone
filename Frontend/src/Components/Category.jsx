import React from 'react'

const Category = () => {
  return (
    <>
       <div id='itemList' className='pl-5 mt-1 pr-20 hidden md:flex items-center justify-between w-full h-9  border-t-[3px] border-b-[3px] border-gray-200'>
      <div className='pl-16'>
      <h5 className='font-bold text-sm'>ALL CATEGORIES  &nbsp;&nbsp;<span className="text-gray-500">
    <i className="fa-solid fa-chevron-down"></i>
  </span></h5>
       
      </div>
     <p className='text-2sm hover:text-blue-400 '>Cars</p>
     <p className='text-2sm hover:text-blue-400 '>Motorcycles</p>
     <p className='text-2sm hover:text-blue-400 '>Phones</p>
     <p className='text-2sm hover:text-blue-400 '>For Sale:Houses and Apartments</p>
     <p className='text-2sm hover:text-blue-400 '>Scooters</p>
     <p className='text-2sm hover:text-blue-400 '>Commercial & Other vehicles</p>
     <p className='text-2sm hover:text-blue-400 '>For Rent : Houses and Apartments</p>
   </div>

    {/* MOBILE ICON SECTION  */}
    <div className='flex justify-evenly md:hidden mt-[65px] ml-1'>
        <div >
        <div className='bg-slate-200 flex items-center justify-center h-[70px] w-[70px] rounded-md'> 
        <img src="/category_87_2x.png" alt="" className='w-8 h-8' />
         
      </div>
      <p className='pl-2 font-semibold'>Fashion</p>
    </div>

    <div >
        <div className='bg-slate-200 flex items-center justify-center h-[70px] w-[70px] rounded-md'> 
        <img src="/category_3_2x.png" alt="" className='w-8 h-8' />
         
      </div>
      <p className='pl-2 font-semibold'>House</p>
    </div>
    <div >
        <div className='bg-slate-200 flex items-center justify-center h-[70px] w-[70px] rounded-md'> 
        <img src="/category_4_2x.png" alt="" className='w-8 h-8' />
         
      </div>
      <p className='pl-5 font-semibold'>Job</p>
    </div>
    </div>


    <div className='flex justify-evenly md:hidden mt-5 ml-1'>
        <div >
        <div className='bg-slate-200 flex items-center justify-center h-[70px] w-[70px] rounded-md'> 
        <img src="/category_5_2x.png" alt="" className='w-8 h-8' />
         
      </div>
      <p className='pl-5 font-semibold'>Cars</p>
    </div>

    <div >
        <div className='bg-slate-200 flex items-center justify-center h-[70px] w-[70px] rounded-md'> 
        <img src="/category_767_2x.png" alt="" className='w-8 h-8' />
         
      </div>
      <p className='pl-3 font-semibold'>Music</p>
    </div>
    <div >
        <div className='bg-slate-200 flex items-center justify-center h-[70px] w-[70px] rounded-md'> 
        <img src="/category_1411_2x.png" alt="" className='w-8 h-8' />
         
      </div>
      <p className='pl-2 font-semibold'>Mobile</p>
    </div>
    </div>
    </>
  )
}

export default Category