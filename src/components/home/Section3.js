import React from "react";

function Section3() {
  return (
    <div className="px-[16px] md:px-[20px] xl:px-[80px] 2xl:px-[195px] mt-5 lg:mt-[57px] mb-4 lg:mb-[64px]">
      <div className=" flex justify-between items-center">
        <div>
          <h1 className="font-medium text-[24px] md:text-[40px] text-[#000000] text-center md:text-left">Products</h1>
          <p className="text-[14px] leading-[140%] text-[#333333] text-center md:text-left px-6 md:px-0">
            Join Mediqx to get matched with full-time, part-time, and freelance
            healthcare opportunities near you.
          </p>
        </div>
        <button className="font-semibold hidden md:inline text-[16px] text-[#FFFFFF] bg-[#196BA5] w-[172px] h-[40px] mt-4 rounded-[5px]">
          More Products
        </button>
      </div>
      <div className="w-full flex flex-row justify-between mt-[32px] gap-[10px] lg:gap-[34px] overflow-hidden overflow-x-scroll ">
        <div className="min-w-[310px] sm:min-w-[350px] lg:w-auto border  border-[#999999] rounded-[15px] p-[16px] sm:p-[32px">
          <img src="/bed.svg"></img>
          <div className="flex justify-between items-center pt-3">
            <h1 className="font-semibold text-[16px] sm:text-[20px] text-[#000000] h-[46px]">
              Hospital Bed Manual Function
            </h1>
            <span className="bg-[#196BA5] text-[#FFFFFF] text-[16px] px-[10px] py-[5px] rounded-[5px] ">
              4200.00
            </span>
          </div>
          <p className="text-[14px] text-[#333333] mt-4 pe-24 sm:pe-0">
            Join Mediqx to get matched with full-time, part-time
          </p>
        </div>
        <div className="min-w-[310px] sm:min-w-[350px] lg:w-auto  border border-[#999999] rounded-[15px] p-[16px] sm:p-[32px">
          <img src="/airbed.svg"></img>
          <div className="flex justify-between items-center pt-3">
            <h1 className="font-semibold text-[16px] sm:text-[20px] text-[#000000] h-[46px]">
              Airbed
            </h1>
            <span className="bg-[#196BA5] text-[#FFFFFF] text-[16px] px-[10px] py-[5px] rounded-[5px]">
              4200.00
            </span>
          </div>
          <p className="text-[14px] text-[#333333] mt-4 pe-24 sm:pe-0">
            Join Mediqx to get matched with full-time, part-time
          </p>
        </div>
        <div className=" min-w-[310px] sm:min-w-[350px] lg:w-auto  border border-[#999999] rounded-[15px] p-[16px] sm:p-[32px] ">
          <img src="/seat.svg"></img>
          <div className="flex justify-between items-center pt-3">
            <h1 className="font-semibold text-[16px] sm:text-[20px] text-[#000000] h-[46px]">
              Commode seat Raiser - 6 Inch
            </h1>
            <span className="bg-[#196BA5] text-[#FFFFFF] text-[16px] px-[10px] py-[5px] rounded-[5px]">
              4200.00
            </span>
          </div>
          <p className="text-[14px] text-[#333333] mt-4 pe-24 sm:pe-0">
            Join Mediqx to get matched with full-time, part-time
          </p>
        </div>
      </div>
<div className="flex justify-center items-center">
<button className=" md:hidden inline text-[14px] text-[#FFFFFF] mt-2  bg-[#196BA5] w-[172px] h-[40px] rounded-[5px]">
          More Products
        </button>
</div>
    </div>
  );
}

export default Section3;
