import Image from "next/image";
import ContactButton from "../general/callUsbtn";

const HomeHero = () => {
  return (
    <header className="px-24  gap-10 h-auto w-full flex flex-row items-end  justify-between md:px-20">
      <div className="left flex w-1/2 max-w-[440px] flex-col gap-3 mt-[14vh]">
        <h1 className="font-['helveticaNeue'] text-[58px] font-black  leading-[1.2] -tracking-[2px]">
          SOLUTIONS <span className="font-['squarepeg'] font-normal">fOR</span>{" "}
          <br />
          <span className="font-normal">TODAY</span> AND <br /> TOMORROW
        </h1>
        <p className="font-thin md:w-[90%] text-base">
          We build intelligent software solutions that power businesses with AI,
          real-time communication, geospatial mapping, and automation. From
          dynamic ad platforms to smart logistics and interactive digital tools,
          InMotion Technologies transforms ideas into scalable tech.
        </p>
        <ContactButton />
      </div>
      <div className="flex-1 self-start">
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
