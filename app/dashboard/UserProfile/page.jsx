"use client"

import React from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
const UserProfile = () => {
  const session = useSession();

  return (
    <div className="mt-4 md:mt-[60px] px-4">
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-32 sm:h-40 md:h-56"
          style={{
            backgroundImage: `url('/profileBack.jpg')`,
          }}
        ></div>
        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-200 rounded-full overflow-hidden">
              <Image
              width={0} height={0}
              layout="responsive"
                className="object-cover w-full h-full"
                src={session?.data?.user?.image}
                alt="Profile"
              />
            </div>
            <div className="sm:ml-4 md:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                {session?.data?.user?.name}
              </h2>
              <p className="text-gray-600 text-sm sm:text-[18px] md:text-xl">
                {session?.data?.user?.email}
              </p>
            </div>
          </div>
          <p className="mt-3 sm:mt-4 md:mt-6 text-gray-600 text-center text-sm sm:text-left sm:text-base md:text-xl">
            Experienced in React, Next.js, and building responsive eCommerce
            platforms. Passionate about UI design and development.
          </p>

          {/* Social Icons */}
          <div className="mt-4 sm:mt-6 flex justify-center space-x-4 sm:space-x-6">
            <a
              href="https://facebook.com"
              className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} className="sm:size-28 lg:size-10" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-500 hover:text-blue-700 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="sm:size-28 lg:size-10" />
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-400 hover:text-blue-600 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} className="sm:size-28 lg:size-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
