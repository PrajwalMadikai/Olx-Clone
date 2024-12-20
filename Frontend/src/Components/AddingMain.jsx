import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

const AddingMain = () => {
  const { handleCarChange } = useContext(ProductContext);

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(prev => (prev === section ? null : section));
  };

  return (
    <>
 <div className="relative mt-5">
  {/* Cars */}
  <div
    className="flex items-center justify-between w-full md:w-[390px] border h-11 hover:bg-slate-200 relative"
    onClick={() => toggleSection('car')}
  >
    <p className="pl-4 text-black">
      <i className="fa-solid fa-car"></i> &nbsp;&nbsp;&nbsp;&nbsp;Cars
    </p>
    <p>
      <i className="fa-solid fa-greater-than"></i>
    </p>
  </div>
  {activeSection === 'car' && (
    <div
      className="absolute md:left-[390px] md:top-0 w-full md:w-[390px] border h-11 bg-slate-100 hover:bg-slate-200 z-10"
   onClick={handleCarChange} >
      <p className="pl-4 pt-2">Cars</p>
    </div>
  )}

  {/* Mobiles */}
  <div
    className="flex items-center justify-between w-full md:w-[390px] border h-11 hover:bg-slate-200 relative"
    onClick={() => toggleSection('mobile')}
  >
    <p className="pl-4">
      <i className="fa-solid fa-mobile"></i> &nbsp;&nbsp;&nbsp;&nbsp;Mobiles
    </p>
    <p>
      <i className="fa-solid fa-greater-than"></i>
    </p>
  </div>
  {activeSection === 'mobile' && (
    <div
      className="absolute md:left-[390px] md:top-[44px] w-full md:w-[390px] border h-11 bg-slate-100 hover:bg-slate-200 z-10"
    >
      <p className="pl-4 pt-2">Mobile Phone</p>
    </div>
  )}

  {/* Bikes */}
  <div
    className="flex items-center justify-between w-full md:w-[390px] border h-11 hover:bg-slate-200 relative"
    onClick={() => toggleSection('bikes')}
  >
    <p className="pl-4">
      <i className="fa-solid fa-motorcycle"></i> &nbsp;&nbsp;&nbsp;&nbsp;Bikes
    </p>
    <p>
      <i className="fa-solid fa-greater-than"></i>
    </p>
  </div>
  {activeSection === 'bikes' && (
    <>
      <div
        className="absolute md:left-[390px] md:top-[88px] w-full md:w-[390px] border h-11 bg-slate-100 hover:bg-slate-200 z-10"
      >
        <p className="pl-4 pt-2">Motorcycle</p>
      </div>
      <div
        className="absolute md:left-[390px] md:top-[132px] w-full md:w-[390px] border border-t-0 h-11 bg-slate-100 hover:bg-slate-200 z-10"
      >
        <p className="pl-4 pt-2">Scooty</p>
      </div>
    </>
  )}

  {/* Fashion */}
  <div
    className="flex items-center justify-between w-full md:w-[390px] border h-11 hover:bg-slate-200 relative"
    onClick={() => toggleSection('fashion')}
  >
    <p className="pl-4">
      <i className="fa-solid fa-shirt"></i> &nbsp;&nbsp;&nbsp;&nbsp;Fashion
    </p>
    <p>
      <i className="fa-solid fa-greater-than"></i>
    </p>
  </div>

  {/* Electronics */}
  <div
    className="flex items-center justify-between w-full md:w-[390px] border h-11 hover:bg-slate-200 relative"
    onClick={() => toggleSection('electronics')}
  >
    <p className="pl-4">
      <i className="fa-solid fa-desktop"></i> &nbsp;&nbsp;&nbsp;&nbsp;Electronics
    </p>
    <p>
      <i className="fa-solid fa-greater-than"></i>
    </p>
  </div>
</div>


    </>
  );
};

export default AddingMain;
