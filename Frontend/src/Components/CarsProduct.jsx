import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function CarsProduct() {

    const navigate=useNavigate()

    const [formData, setFormData] = useState({
        brand: '',
        year: '',
        fuel: '',
        transmission: '',
        owners: '',
        title: '',
        description: '',
        price: '',
        image: null,
      });
    
      
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
     
      const handleImageChange = (e) => {
        setFormData({
          ...formData,
          image: e.target.files[0],
        });
      };
    
       
      const handleButtonClick = (e, field) => {
        setFormData({
          ...formData,
          [field]: e.target.innerText,
        });
      };
    
       
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { brand, year, fuel, transmission, owners, title, description, price, image } = formData;
    
         
        const data = new FormData();
        data.append('brand', brand);
        data.append('year', year);
        data.append('fuel', fuel);
        data.append('transmission', transmission);
        data.append('owners', owners);
        data.append('title', title);
        data.append('description', description);
        data.append('price', price);
        if (image) {
          data.append('image', image);
        }
    
       
        try {
              const response=axios.post('http://localhost:3000/add-product',data)
              toast.success("Product posted successfully",{
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "dark",
                  })
                  navigate('/')
        } catch (error) {
           if (error.response) {
                       
                toast.error("Error in Product adding", {
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
      };


  return (
     <>
     <div className='ml-12 mt-10'>

        <h4 className='font-semibold text-lg'>INCLUDE SOME DETAILS</h4>
        <form onSubmit={handleSubmit} id="vehicle-form">
      <p className='mt-3'>Brand*</p>
      <input
        type="text"
        name="brand"
        className='w-[280px] h-10 border border-gray-500'
        value={formData.brand}
        onChange={handleInputChange}
      />
      <p className='mt-3'>Year*</p>
      <input
        type="text"
        name="year"
        className='w-[280px] h-10 border border-gray-500'
        value={formData.year}
        onChange={handleInputChange}
      />
      <p className='mt-3'>Fuel*</p>
      <input
        type="text"
        name="fuel"
        className='w-[280px] h-10 border border-gray-500'
        value={formData.fuel}
        onChange={handleInputChange}
      />
      <p className='mt-3'>Transmission*</p>
      <div className='flex space-x-3'>
        <button
          type="button"
          className={`w-[90px] h-[30px] border-2 rounded border-gray-500 mt-2 ${formData.transmission === 'Manual' ? 'bg-gray-300' : ''}`}
          onClick={(e) => handleButtonClick(e, 'transmission')}
        >
          Manual
        </button>
        <button
          type="button"
          className={`w-[90px] h-[30px] border-2 rounded border-gray-500 mt-2 ${formData.transmission === 'Automatic' ? 'bg-gray-300' : ''}`}
          onClick={(e) => handleButtonClick(e, 'transmission')}
        >
          Automatic
        </button>
      </div>
      <p className='mt-3'>No of Owners*</p>
      <div className='flex space-x-3'>
        <button
          type="button"
          className={`w-[90px] h-[30px] border-2 rounded border-gray-500 mt-2 ${formData.owners === '1st' ? 'bg-gray-300' : ''}`}
          onClick={(e) => handleButtonClick(e, 'owners')}
        >
          1st
        </button>
        <button
          type="button"
          className={`w-[90px] h-[30px] border-2 rounded border-gray-500 mt-2 ${formData.owners === '2nd' ? 'bg-gray-300' : ''}`}
          onClick={(e) => handleButtonClick(e, 'owners')}
        >
          2nd
        </button>
        <button
          type="button"
          className={`w-[90px] h-[30px] border-2 rounded border-gray-500 mt-2 ${formData.owners === '3rd' ? 'bg-gray-300' : ''}`}
          onClick={(e) => handleButtonClick(e, 'owners')}
        >
          3rd
        </button>
      </div>
      <p className='mt-3'>Add title*</p>
      <input
        type="text"
        name="title"
        className='w-[280px] h-10 border border-gray-500'
        value={formData.title}
        onChange={handleInputChange}
      />
      <p className='mt-3'>Add description*</p>
      <input
        type="text"
        name="description"
        className='w-[280px] h-16 border border-gray-500'
        value={formData.description}
        onChange={handleInputChange}
      />
      <h3 className='mt-5 font-bold text-lg'>SET A PRICE</h3>
      <p className='mt-1'>Price*</p>
      <div className='w-[280px] h-10 border border-gray-500 flex'>
        <p className='pl-2 pt-2'>
          <i className="fa-solid fa-dollar-sign"></i>
        </p>
        <input
          type="text"
          name="price"
          className='ml-3 border-0 focus:outline-none'
          value={formData.price}
          onChange={handleInputChange}
        />
      </div>
      <h3 className="mt-5 font-bold text-lg">UPLOAD A IMAGE</h3>
      <div className="w-[130px] h-[140px] border-2 border-gray-500 flex items-center justify-center cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="image-upload"
          onChange={handleImageChange}
        />
        <label htmlFor="image-upload" className="flex flex-col items-center justify-center">
          <i className="fa fa-image text-3xl text-gray-500"></i>
          <span className="text-gray-500">Upload Image</span>
        </label>
      </div>
      <div className='flex m-5 ml-20 justify-start md:justify-center items-center'>
        <button
          type="submit"
          className='mb-10 w-[80px] h-[40px] border border-black p-2 flex justify-center rounded text-black font-medium bg-gray-200'
        >
          POST
        </button>
      </div>
    </form>

     </div>
     </>
  )
}

export default CarsProduct