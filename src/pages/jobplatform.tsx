import React, { useState } from "react";
import { Data } from "../components/Data/Data";
import Link from "next/link";

const JobPlatform = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = Data.filter((item) =>
    item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="pb-24 pt-12  ">
      <div className="flex gap-56 justify-center items-center mb-12 ">
        <div className="text-xl font-bold text-center ">
          All job platforms are listed here:
        </div>

        <div className="max-w-md  ">
          <input
            type="text"
            placeholder="Search Company Name..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-16 items-center justify-center">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="relative  p-4 bg-orange-200 hover:shadow-red-500  shadow-green-400 shadow-xl h-56 border border-green-900  w-72  rounded-lg  text-center "
          >
            <div className=" text-black mb-1 font-semibold text-[24px]">
              {item.companyName}
            </div>

            <div className="text-[16px] text-black font-medium mb-6 ">
              {item.description}
            </div>
            <div className="   absolute  w-[190px] left-1/2 transform -translate-x-1/2 bottom-6   ">
              <Link
                href={item.link}
                target="_blank"
                className=" p-3  font-semibold text-[16px] text-white hover:bg-green-700 bg-green-500 rounded-lg "
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

export default JobPlatform;
