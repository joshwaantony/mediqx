import React from "react";

function Footer() {
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-5  justify-between px-[16px] md:px-[20px] xl:px-[80px] 2xl:px-[195px]">
      <div className="hidden lg:inline">
        <img src="/Mediqxlogo.svg"></img>
        <p className="text-[16px] text-[#666666] mt-[46px]">
          2025 &#169; Mediqx Healthcare
        </p>
        <div className="flex mt-[22px] gap-[19px]">
          <img src="/LinkedIn.svg"></img>
          <img src="/x.svg"></img>
          <img src="/insta.svg"></img>
          <img src="/Facebook.svg"></img>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start lg:ps-16">
        <span className="mb-[17px] lg:mb-[45px] text-[16px] text-[#666666]">
          Quick Links
        </span>
        <span className="mb-[17px] text-[16px] text-[#333333]">
          Consultation
        </span>
        <span className="mb-[17px] text-[16px] text-[#333333]">Services</span>
        <span className="mb-[17px] text-[16px] text-[#333333]">Careers</span>
        <span className="mb-[17px] text-[16px] text-[#333333]">Products</span>
      </div>
      <div className="flex flex-col items-center lg:ps-16">
        <span className="mb-[17px] lg:mb-[45px] text-[16px] text-[#666666]">
        Company
        </span>
        <span className="mb-[17px] text-[16px] text-[#333333]">
        Why us?
        </span>
        <span className="mb-[17px] text-[16px] text-[#333333]">About us</span>
        <span className="mb-[17px] text-[16px] text-[#333333]">Privacy</span>
        <span className="mb-[17px] text-[16px] text-[#333333]">Terms</span>
      </div>
      <div className="flex flex-col items-center lg:items-start lg:ps-16">
        <span className="mb-[17px] lg:mb-[45px] text-[16px] text-[#666666]">
        Press
        </span>
        <span className="mb-[17px] text-[16px] text-[#333333]">
        Media
        </span>
        <span className="mb-[17px] text-[16px] text-[#333333]">Blog</span>
        
      </div>
      <div className="flex flex-col items-center lg:items-start lg:ps-6">
        <span className="mb-[17px] lg:mb-[45px] text-[16px] text-[#666666]">
        Contact
        </span>
        <p className=" text-[16px] text-[#333333] text-center lg:text-left px-14 sm:px-24 lg:px-0">
        272B, 2nd Lane
Behind Appolo Hospital
Bennarghatta Road, Venkatadri Lane
Bangalore, karnataka 
India - 570 005
        </p>
        
      </div>
      <div className="lg:hidden flex flex-col items-center mt-[46px]">
        <img src="/Mediqxlogo.svg"></img>
        <p className="text-[16px] text-[#666666] mt-[13px]">
          2025 &#169; Mediqx Healthcare
        </p>
        <div className="flex mt-[22px] gap-[19px]">
          <img src="/LinkedIn.svg"></img>
          <img src="/x.svg"></img>
          <img src="/insta.svg"></img>
          <img src="/Facebook.svg"></img>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
