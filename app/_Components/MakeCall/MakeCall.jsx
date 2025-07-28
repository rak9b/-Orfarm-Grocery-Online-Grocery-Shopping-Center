import { Phone } from "lucide-react";
import MakeStyle from "./Make/Make.module.css";
const MakeCall = () => {
  return (
    <div className="bg-[#e8edee] mb-6">
      <div className="py-4 container mx-auto flex md:flex-row flex-col justify-between items-center">
        <h2 className="text-[16px] md:text-[30px]">
          Get A Free Service Or Make A Call
        </h2>
        <button
          className={`flex justify-center relative text-sm  md:text-lg items-center gap-2 bg-white px-4 md:px-8 py-[10px] md:py-[14px] ${MakeStyle.buttonAnimation}`}
        >
          <Phone size={20} /> MAKE A CALL
        </button>
      </div>
    </div>
  );
};

export default MakeCall;
