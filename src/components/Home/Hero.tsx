import React from 'react';
import { Data } from '../Data/Data'; // Assuming Data is exported as named export

const Hero: React.FC = () => {
  return (
    <div>
      <div className="text-xl font-bold">All job platforms are listed here:</div>

      <div className="mt-4">
        {Data.map((item) => (
          <div key={item.id} className="mb-4">
            <a href={item.link} className="text-blue-500 hover:underline">
              {item.companyName}
            </a>
            <p className="mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
