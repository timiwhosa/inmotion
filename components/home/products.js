import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Products() {
  return (
    <div className="py-[20vh]">
      <h1 className="font-bold text-5xl flex items-center pb-18 w-full justify-center">
        <span className="max-w-[424px] ">Ongoing Solutions for Tomorrow</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3 font-['helveticaNeue'] ">
        <div className="relative w-full  bg-[#7A00D6] text-white p-10 min-w-[300px] rounded-3xl overflow-hidden">
          <div className="flex flex-col h-full justify-between z-20">
            <h1 className="font-bold text-4xl">
              Nerra:{" "}
              <span className="font-light text-3xl z-20">
                Bringing Tech Education to communities{" "}
              </span>
            </h1>
            <p className="font-normal text-sm text-[#CDB3F4] z-20">
              The Vision is to Make a self reliant Generation by exposing them
              to training in different field while they are still young.Nerra
              will be Like an Industrial Training Exercise for High school
              students to provide them with real world work experience before
              graduating.
            </p>
            <Image
              src="/img/home/nerrawordmark.svg"
              width={2234}
              height={2234}
              alt="nerra word mark logo"
              className="w-auto max-h-[58px] z-20"
            />
            <div className="w-full flex justify-end text-white">
              <a href="#" className="flex items-center gap-3 z-20">
                Read More <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <Image
            src="/img/home/nerralogo.svg"
            width={2234}
            height={2234}
            alt="nerra word mark logo"
            className="w-full max-w-4/5 absolute bottom-0 z-0 left-1/2 -translate-x-1/2"
          />
        </div>
        <div className="relative w-full  bg-[#ffb400] text-black p-10 min-w-[300px] rounded-3xl overflow-hidden">
          <div className="flex flex-col h-full justify-between gap-4 ">
            <Image
              src="/img/home/nibidisplay.svg"
              width={2234}
              height={2234}
              alt="nerra word mark logo"
              className="w-2/3 self-center"
            />{" "}
            <h1 className="font-bold text-4xl">
              Nibi:{" "}
              <span className="font-light text-3xl">
                Intaxi media to grow your Business{" "}
              </span>
            </h1>
            <p className="font-thin text-sm max-w-[280px]">
              Show Ads to 1m+ Passengers daily through Taxis - speak directly to
              passengers
            </p>
            <div className="w-full flex justify-end text-white">
              <a href="https://nibi.ng" className="flex items-center gap-3">
                Visit Nibi <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
        <div
          className="relative w-full h-full  bg-cover bg-center text-black p-10 min-w-[300px] rounded-3xl overflow-hidden"
          style={{ backgroundImage: "url('/img/home/asapbackground.svg')" }}
        >
          <div className="flex flex-col h-full justify-between gap-20 ">
            <div className="z-10 gap-4 flex flex-col flex-1 justify-center">
              <h1 className="font-bold text-4xl">
                Asap:{" "}
                <span className="font-light text-3xl">
                  Move Items the price of your transport fare.{" "}
                </span>
              </h1>
              <p className="font-thin text-sm max-w-[280px]">
                Send and Receive items Asap
              </p>
            </div>
            <div className="w-full flex justify-center text-white z-10">
              <a
                href="#"
                className="flex items-center gap-3 p-3 bg-[#28B446] border-2 rounded-xl shadow-xl"
              >
                Visit Asap Now{" "}
              </a>
            </div>
          </div>
          <Image
            src="/img/home/asapphoneleft.svg"
            width={2234}
            height={2234}
            alt="nerra word mark logo"
            className=" absolute left-0 bottom-0 max-w-[167px] z-0"
          />{" "}
          <Image
            src="/img/home/asapphoneright.svg"
            width={2234}
            height={2234}
            alt="nerra word mark logo"
            className=" absolute right-0 bottom-1/5 max-w-[167px] z-0"
          />{" "}
        </div>
      </div>
    </div>
  );
}
