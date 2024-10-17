import React, { useState } from "react";
import { Data } from "../Data/Data"; // Assuming Data is exported as named export
import Link from "next/link";

const JobSection: React.FC = () => {
  return (
    <div className="pb-24  ">
      <div className="flex gap-56 justify-center items-center mb-12 ">
        <div className="text-3xl font-bold text-center ">
         Job Platforms :-
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-16 items-center justify-center">
        {Data.slice(2, 12).map((item) => (
          <div
            key={item.id}
            className=" relative  p-4 shadow-orange-400 hover:shadow-green-500 shadow-xl h-56 border border-green-900 bg-blue-200 w-72  rounded-lg  text-center "
          >
            <div className=" text-black mb-1 font-semibold text-[24px]">
              {item.companyName}
            </div>

            <div className="text-[16px] text-black  mb-4 ">
              {item.description}
            </div>
            <div className="   absolute  w-[190px] left-1/2 transform -translate-x-1/2 bottom-6   ">
              <Link
                href={item.link}
                target="_blank"
                className=" p-3 hover:bg-green-700  font-semibold text-[16px] bg text-white bg-green-500 rounded-lg "
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

export default JobSection;
