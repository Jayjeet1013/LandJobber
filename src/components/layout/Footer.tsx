import React from "react";
import Link from "next/link";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import Image from "next/image";

// SVG Components as React Icons
const TwitterIcon = () => <FiTwitter className="w-6 h-6" />;
const FacebookIcon = () => <FiFacebook className="w-6 h-6" />;
const InstagramIcon = () => <FiInstagram className="w-6 h-6" />;

type Props = {};

const Footer = (props: Props) => {
 
 
    const styles = {
      link: "text-xl font-medium text-black transition-all duration-200 hover:text-green-600 focus:text-green-900",
      mobileLink:
        "inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600",
    };

  return (
    <section className="py-12 bg-gradient-to-r from-green-200 to-red-300">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
          <div className="xl:flex xl:items-center xl:justify-start">
            <Link
              href="/"
              title="LandJobber"
              className="text-[30px] shadow-lg hover:shadow-green-600  shadow-red-500 px-2 rounded-md font-semibold flex"
            >
              LandJobber
            </Link>
            <p className="mt-5 text-sm text-black font-semibold xl:ml-6 xl:mt-0">
              © Copyright 2024 LandJobber
            </p>
            
          </div>

          <div className="items-center mt-8  xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
            <div className=" mr-6 flex flex-col  gap-3 lg:items-center lg:ml-auto lg:space-x-10">
              <Link href="/" className={styles.link} title="Features">
                Home
              </Link>
              <Link
                href="/jobplatform"
                className={styles.link}
                title="Solutions"
              >
                JobPlatforms
              </Link>
              <Link
                href="/careerpages"
                className={styles.link}
                title="Resources"
              >
                CareerPages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
