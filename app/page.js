import Products from "@/components/home/products";
import HomeHero from "../components/home/hero";
import Services from "../components/home/services";
import Nav from "../components/general/nav";
import Image from "next/image";
import { CircleHelp, EyeOff, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <HomeHero />
      <Services />
      <Products />
      <div>
        <Image
          src="/img/home/ourtools.svg"
          alt="inmotion tools"
          width={2224}
          height={2224}
          className="w-full h-auto p-5 py-20 md:p-[10vh]"
        />
      </div>
      <div className="flex justify-center">
        <h2 className="text-[80px] md:text-[340px] w-max font-bold">
          We{" "}
          <span
            className="text-white"
            style={{ WebkitTextStroke: "1px black" }}
          >
            are
          </span>
        </h2>
      </div>
      <footer className="grid gap-20">
        <div>
          <div className="w-full flex flex-col justify-center items-center px-10 md:px-auto">
            <Image
              alt="inmotion logo mark"
              src="/img/icon.svg"
              width={50}
              height={50}
              className="object-contain w-auto h-auto md:h-[140px]"
            />

            <Image
              alt="inmotion word mark"
              src="/img/inmotion.svg"
              width={50}
              height={50}
              className="object-contain w-auto h-auto md:h-[120px]"
            />
            <p className="w-max text-3xl md:text-6xl">Technologies</p>
            <button className="bg-primary rounded-full px-10 py-5 flex items-center gap-4 w-max mt-5">
              Lets get Talking Solutions <Phone size={20} />
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 mt-20 font-thin">
            <Link
              href="#"
              className="flex underline text-xl items-center gap-2 hover:text-primary"
            >
              <Phone size={20} /> Contact
            </Link>
            <Link
              href="#"
              className="flex underline text-xl items-center gap-2"
            >
              <CircleHelp size={20} /> Faq
            </Link>
            <Link
              href="#"
              className="flex underline text-xl items-center gap-2 hover:text-[#7A00D6]"
            >
              <EyeOff size={20} /> Privacy policy
            </Link>
            <Link
              href="#"
              className="flex underline text-xl items-center gap-2 hover:text-[#28B446]"
            >
              <MapPin size={20} /> Our Locations
            </Link>
          </div>
        </div>
        <Image
          alt="inmotion word mark"
          src="/img/inmotionstripes.svg"
          width={50}
          height={50}
          className="w-full"
        />
      </footer>
    </div>
  );
}
