import React from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const DownloadIcon = () => <FiDownload className="w-5 h-5 mr-2" />;

function Hero31({}: Props) {
  const anchorStyles =
    "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2";

  return (
    <div className="relative  bg-gray-50">
      <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
            <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
              <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                  Explore Job Opportunities with LandJobber
                </h1>

                <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                  <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                    <Image
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://www.auraui.com/memeimage/akshay1.webp"
                      alt="Avatar Male"
                      width={56}
                      height={56}
                    />
                    <Image
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://www.auraui.com/memeimage/babubhaiya.jpg"
                      alt="Avatar Female 1"
                      width={56}
                      height={56}
                    />
                    <Image
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://www.auraui.com/memeimage/majnubhai.jpeg"
                      alt="Avatar Female 2"
                      width={56}
                      height={56}
                    />
                  </div>

                  <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">
                    Join over{" "}
                    <span className="font-bold">10,000+ Job Seekers</span> and
                    find your next career move with LandJobber.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center sm:space-x-5 lg:mt-12">
                <Link
                  href="/jobplatform"
                  className="inline-flex items-center px-12 py-3 text-lg font-bold text-white transition-all duration-200 bg-green-600 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-green-700"
                  role="button"
                  passHref
                >
                  Explore
                </Link>
              </div>
            </div>

            <div className="w-[80%] shadow-2xl shadow-green-400 rounded-lg mx-auto scale-110 lg:col-span-3 xl:col-span-3">
              <Image
                className="w-full rounded-lg h-auto"
                src="/heroImage.avif"
                alt="Illustration"
                layout="responsive"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero31;
