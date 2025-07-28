import CardStyle from "./Catagory/Catagory.module.css";
import Image from "next/image";
const CatagoriesCard = ({ item }) => {
  const { img, title, item: newItem } = item || {};
  return (
    <div className="my-[20px] md:py-[50px] cursor-pointer ">
      <div
        className={`flex flex-col bg-[#ffffff] relative border-[1.5px] justify-center space-y-2 items-center  w-[270px] h-[280px] ${CardStyle.category}`}
      >
        <Image width={100} height={100}  layout="intrinsic" src={img} alt="" className="" />
        <h2 className={`text-[16px] md:text-xl ${CardStyle.title}`}>{title}</h2>
        <h2 className="text-sm md:text-base">{newItem}</h2>
        <div
          className={`bg-[#80b500] w-[0px]  h-[5px] absolute bottom-0 ${CardStyle.catCard}`}
        ></div>
      </div>
    </div>
  );
};

export default CatagoriesCard;
