import React from "react";
import { Data } from "../Data/Data"; // Assuming Data is exported as named export
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="pt-20 ">
      <div className="text-xl font-bold text-center ">
        All job platforms are listed here:
      </div>

      <div className="mt-4 flex flex-wrap gap-4 items-center justify-center">
        {Data.map((item) => (
          <div key={item.id} className=" p-5 bg-red-500 w-72  rounded-lg space-y-3 text-center ">
            <div className=" ">{item.companyName}</div>
            
            <div>{item.description}</div>
            <div>
              <Link href={item.link} target="_blank" className="p-2 bg-green-500 rounded-lg ">
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
