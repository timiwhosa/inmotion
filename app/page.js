import Products from "@/components/home/products";
import HomeHero from "../components/home/hero";
import Services from "../components/home/services";
import Nav from "../components/general/nav";
import Image from "next/image";

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
          className="w-full h-auto p-[10vh]"
        />
      </div>
      <div className="flex justify-center">
        <h2 className="text-[340px] w-max font-bold">
          We <span className="text-white" style={{ WebkitTextStroke: "1px black" }}>are</span>
        </h2>
      </div>
    </div>
  );
}
