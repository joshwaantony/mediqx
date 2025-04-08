// import React from "react";

// function Navbar() {
//   return (
//     <div className=" w-full flex justify-between items-center px-[195px] pt-4 absolute z-10 ">
//       <div >
//         <img src="/Mediqxlogo.svg"></img>
//       </div>
//       <div className="flex gap-[48px] items-center pe-2">
//         <span className="text-[#333333] text-[16px]">Career</span>
//         <span className="text-[#333333] text-[16px]">Consultation</span>
//         <span className="text-[#333333] text-[16px]">Services</span>
//         <span className="text-[#FFFFFF] text-[16px]">About us</span>
//         <span className="text-[#FFFFFF] text-[16px]">Blog</span>
//         <span className="text-[#FFFFFF] text-[16px]">Contact</span>
//         <button className="text-[#196BA5] text-[16px] bg-white w-[88px] h-[40px] rounded-[15px]">Login</button>
//         <button className="bg-[#FFFFFF] w-[40px] h-[40px] rounded-[15px] flex justify-center items-center">
//           <img src="/shoppingcart.svg"></img>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


// "use client"
// import React, { useState } from "react";
// import { IoMenu ,IoClose} from "react-icons/io5";


// function Navbar() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const navLinks = (
//     <>
//       <span className="text-[#333333] text-[16px]">Career</span>
//       <span className="text-[#333333] text-[16px]">Consultation</span>
//       <span className="text-[#333333] text-[16px]">Services</span>
//       <span className="text-[#FFFFFF] text-[16px]">About us</span>
//       <span className="text-[#FFFFFF] text-[16px]">Blog</span>
//       <span className="text-[#FFFFFF] text-[16px]">Contact</span>
//       <button className="text-[#196BA5] text-[16px] bg-white w-[88px] h-[40px] rounded-[15px]">Login</button>
//       <button className="bg-[#FFFFFF] w-[40px] h-[40px] rounded-[15px] flex justify-center items-center">
//         <img src="/shoppingcart.svg" alt="cart" />
//       </button>
//     </>
//   );

//   return (
//     <div className="w-full absolute z-10">
//       <div className="w-full flex justify-between items-center px-[16px] xl:px-[195px] pt-4">
//         <div>
//           <img src="/Mediqxlogo.svg" alt="logo" />
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden xl:flex gap-[48px] items-center pe-2">
//           {navLinks}
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <div className="xl:hidden">
//           <button
//             onClick={() => setIsDrawerOpen(!isDrawerOpen)}
//             className="text-white"
//           >
//             {isDrawerOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       {isDrawerOpen && (
//         <div className="xl:hidden bg-[#196BA5] flex flex-col gap-6 px-6 py-4 transition-all">
//           {navLinks}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;

"use client";

import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = (
    <>
      <span className="text-white xl:text-[#333333] text-[16px]">Career</span>
      <span className="text-white xl:text-[#333333] text-[16px]">Consultation</span>
      <span className="text-white  text-[16px]">Services</span>
      <span className="text-[#FFFFFF] text-[16px]">About us</span>
      <span className="text-[#FFFFFF] text-[16px]">Blog</span>
      <span className="text-[#FFFFFF] text-[16px]">Contact</span>
      <button className="text-[#196BA5] text-[16px] bg-white w-[88px] h-[40px] rounded-[15px]">
        Login
      </button>
      <button className="bg-[#FFFFFF] w-[40px] h-[40px] rounded-[15px] flex justify-center items-center">
        <img src="/shoppingcart.svg" alt="cart" />
      </button>
    </>
  );

  return (
    <div className="w-full absolute z-50 bg-white xl:bg-transparent">
      {/* Top Navbar */}
      <div className="w-full flex justify-between items-center px-6 2xl:px-[195px] pt-4">
        <div>
          <img src="/Mediqxlogo.svg" alt="logo"  className="w-24 md:w-auto pb-2 md:pb-0"/>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex gap-[48px] items-center pe-2">
          {navLinks}
        </div>

        {/* Hamburger Menu (Mobile only) */}
        <div className="xl:hidden">
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="text-white"
          >
            {isDrawerOpen ? <IoClose className="text-black" size={32} /> : <IoMenu size={32} className="text-black"/>}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`xl:hidden fixed top-0 left-0 h-full w-3/4 max-w-sm bg-[#196BA5] z-50 p-6 transition-transform duration-500 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">{navLinks}</div>
      </div>
    </div>
  );
}

export default Navbar;
