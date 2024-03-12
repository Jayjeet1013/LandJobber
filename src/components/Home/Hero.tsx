import React, { useState } from "react";
import { Data } from "../Data/Data"; // Assuming Data is exported as named export
import Link from "next/link";

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filter data based on search term
  const filteredData = Data.filter((item) =>
    item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="py-24  ">
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
