import Image from "next/image";

const ContactCard = ({ item }) => {
  const { image, title, infoOne, infoTwo } = item || {};

  return (
    <div className="">
      <div className="border-2 w-[300px] md:w-[400px]">
        <div className="flex justify-center flex-col py-6 md:py-10 items-center">
          <Image src={image} alt="contactCard" width={85} height={85} />
          <h2 className="text-[18px] md:text-[28px] mt-6 mb-2">{title}</h2>
          <h2 className="text-sm md:text-lg mb-1">{infoOne}</h2>
          <h2 className="text-sm md:text-lg">{infoTwo}</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
