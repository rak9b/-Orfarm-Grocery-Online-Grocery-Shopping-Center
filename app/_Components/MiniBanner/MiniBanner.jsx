import Image from "next/image";
import ImageStyle from "./MiniStyle/MiniStyle.module.css";
const MiniBanner = () => {
  return (
    <div className="my-[20px] md:my-[120px]">
      <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-8">
        <div
          className={`md:w-[400px] md:h-[238px] overflow-hidden cursor-pointer ${ImageStyle.imageParent}`}
        >
          <Image
            src="/mini2.jpg"
            alt="banner"
            width={400}
            height={400}
            className={`${ImageStyle.imageZoomIn} ${ImageStyle.imageParent}`}
          />
        </div>

        <div
          className={`md:w-[400px] md:h-[238px] overflow-hidden cursor-pointer ${ImageStyle.imageParent}`}
        >
          <Image
            src="/mini1.jpg"
            alt="banner"
            width={400}
            height={400}
            className={`${ImageStyle.imageZoomIn} ${ImageStyle.imageParent}`}
          />
        </div>

        <div
          className={`md:w-[400px] md:h-[238px] overflow-hidden cursor-pointer ${ImageStyle.imageParent}`}
        >
          <Image
            src="/mini2.jpg"
            alt="banner"
            width={400}
            height={400}
            className={`${ImageStyle.imageZoomIn} ${ImageStyle.imageParent}`}
          />
        </div>
      </div>
    </div>
  );
};

export default MiniBanner;
