import Image from "next/image";
import React from "react";

const ContactService = ({ item }) => {
  const { title, para, image } = item || {};

  return (
    <div>
      <div className="flex items-center md:flex-row flex-col gap-3 md:text-left text-center md:gap-6 md:w-[400px] px-4 md:px-8 border-r-2 border-gray-100">
        <div>
          <Image width={50} height={50} src={image} alt="" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl">{title}</h2>
          <p className="md:w-[250px] md:leading-[30px]">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactService;
