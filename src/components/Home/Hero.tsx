import React, { useState } from "react";
import { Data } from "../Data/Data"; // Assuming Data is exported as named export
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="py-24  ">
      <div className="flex gap-56 justify-center items-center mb-12 ">
        <div className="text-xl font-bold text-center ">
          All job platforms are listed here:
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-16 items-center justify-center">
        {Data.slice(2, 12).map((item) => (
          <div
            key={item.id}
            className="hover:scale-110 duration-200  p-5 h-56 bg-gray-400 w-72  rounded-lg  text-center "
          >
            <div className=" text-white mb-1 font-semibold text-[24px]">
              {item.companyName}
            </div>

            <div className="text-[16px] text-black font-medium mb-6 ">
              {item.description}
            </div>
            <div className="hover:scale-110 duration-200">
              <Link
                href={item.link}
                target="_blank"
                className=" p-3  font-semibold text-[16px] text-white bg-green-500 rounded-lg "
              >
                Explore the Platform
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
