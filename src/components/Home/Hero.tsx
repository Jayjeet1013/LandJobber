import React from "react";
import { Data } from "../Data/Data"; // Assuming Data is exported as named export
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="py-28 ">
      <div className="text-xl font-bold text-center ">
        All job platforms are listed here:
      </div>

      <div className="mt-4 flex flex-wrap gap-16 items-center justify-center">
        {Data.map((item) => (
          <div key={item.id} className=" p-5 h-56 bg-gray-400 w-72  rounded-lg space-y-3 text-center ">
            <div className=" text-white font-semibold text-[24px]">{item.companyName}</div>
            
            <div className="text-[16px] text-black font-medium  ">{item.description}</div>
            <div>
              <Link href={item.link} target="_blank" className="p-3 font-semibold text-[16px] text-white bg-green-500 rounded-lg ">
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
