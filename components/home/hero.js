import Image from "next/image";
import ContactButton from "../general/callUsbtn";

const HomeHero = () => {
  return (
    <header className="px-5 gap-10  h-auto w-full flex flex-col-reverse sm:flex-row items-end  justify-center">
      <div className="left w-full  flex md:w-max md:max-w-[440px] flex-col gap-3 mt-[14vh] md:items-end md:justify-end">
        <h1 className=" font-['helveticaNeue'] text-[40px] md:text-[48px] lg:text-[58px] font-black  leading-[1.2] -tracking-[2px]">
          SOLUTIONS <span className="font-['squarepeg'] font-normal">fOR</span>{" "}
          <br />
          <span className="font-normal">TODAY</span> AND <br /> TOMORROW
        </h1>
        <div className="flex md:w-[98.5%] relative ">
          <p className="font-thin md:w-[90%] text-base ">
            We build intelligent software solutions that power businesses{" "}
            <span className="hidden">
              with AI, real-time communication, geospatial mapping, and
              automation. From dynamic ad platforms to smart logistics and
              interactive digital tools, InMotion Technologies transforms ideas
              into scalable tech.
            </span>
          </p>
        </div>
        <div className="md:w-[98.5%] flex md:justify-start justify-center  ">
          <ContactButton />
        </div>
      </div>
      <div className="hidden sm:flex self-start">
        <Image
          src="/img/home/heroimg.svg"
          className="w-auto h-full"
          width={10200}
          height={10200}
          alt="inmotion products image"
        />
      </div>
    </header>
  );
};

export default HomeHero;
