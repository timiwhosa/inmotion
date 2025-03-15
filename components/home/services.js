"use client";

import React from "react";
import { ArrowRight, AudioLinesIcon, Camera, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div className="columns-1 md:columns-2 px-5  md:px-20 py-40 w-full mx-auto gap-10 space-y-10 h-max">
      <div className="flex flex-col gap-16 break-inside-avoid h-max">
        <h1 className="font-bold text-5xl">Solutions For You</h1>
        <div className="relative md:max-w-[70%] self-end ">
          <Image
            src="/img/home/software dev.jpg"
            width={2234}
            height={2234}
            alt="software dev"
            className="rounded-3xl brightness-90 h-full"
          />
          <div className="absolute bottom-1/10 h-max flex justify-between w-full items-center px-5 ">
            <div className="text-4xl text-white">
              <span className="text-xl block font-thin">Custom</span>
              Software Development
            </div>
            <div className="w-max rounded-full p-5 bg-white font-bold">
              <ArrowRight size={26} />
            </div>
          </div>
        </div>
      </div>
      <div className="break-inside-avoid border-2 rounded-3xl w-max  p-10 grid gap-12 justify-self-end max-w-full">
        <p className="flex items-center gap-5 text-xl">
          UI/UX DESIGN <Heart size={20} className="rotate-[20deg]" />
        </p>
        <div className="flex">
          <div className="flex">
            <span className="block w-[40px] h-[40px] rounded-full bg-[#7A00D6] z-30 relative"></span>
            <span className="block w-[40px] h-[40px] rounded-full bg-[#28B446] z-20 relative -left-4"></span>
            <span className="block w-[40px] h-[40px] rounded-full bg-[#ffb400] z-10 relative -left-8"></span>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <Link href="#">Check it out</Link>
            <ArrowRight size={26} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10  break-inside-avoid h-max w-full ">
        <div className="flex flex-row items-center">
          <div className="">
            <Image
              src="/img/home/maptech.svg"
              width={2234}
              height={2234}
              alt="maptech.svg"
              className="rounded-3xl"
            />
            <div className="flex items-center gap-3 text-xl">
              <Link href="#">RTC & Mapping Tech</Link>
              <ArrowRight size={26} />
            </div>
          </div>
          <div className="flex justify-end flex-wrap md:flex-nowrap items-center border-2 rounded-2xl py-3 px-5 w-max h-max gap-5 text-xl">
            <span className="flex w-max">
              <AudioLinesIcon size={36} />
              <AudioLinesIcon size={36} />
              <AudioLinesIcon size={36} />
              <AudioLinesIcon size={36} />
              {/* <AudioLinesIcon size={36} />
              <AudioLinesIcon size={36} /> */}
            </span>
            <div className="flex items-center gap-5 w-max">
              <span>1:13</span>
              <span className="w-max rounded-full p-3 bg-[#FF0000] font-bold text-white">
                <ArrowRight size={26} />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full border-2 rounded-3xl p-5 md:max-w-[80%] flex flex-col gap-10 shadow-[12px_12px_0px_-5px_rgba(0,0,0,1)]">
          <p className="font-bold text-base md:text-xl flex items-center gap-3">
            AI & Machine Learning
            <ArrowRight size={26} />
          </p>
          <div className="w-full flex flex-col gap-5">
            <p className="opacity-60 text-base ">
              We Build and Leverage Ai solutions to grow your Business, from
              Object Detection, Classification to OCr and Intelligent analytics
              for your business.
            </p>
            <div className="grid grid-cols-3 gap-1 md:gap-5 w-full">
              <Image
                src="/img/home/software dev.jpg"
                width={2234}
                height={2234}
                alt="software dev"
                className="rounded-xl brightness-90 w-full h-auto"
              />
              <Image
                src="/img/home/software dev.jpg"
                width={2234}
                height={2234}
                alt="software dev"
                className="rounded-xl brightness-90 w-full h-auto"
              />
              <Image
                src="/img/home/software dev.jpg"
                width={2234}
                height={2234}
                alt="software dev"
                className="rounded-xl brightness-90 w-full  h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
