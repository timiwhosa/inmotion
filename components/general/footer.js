import Image from "next/image";
import Link from "next/link";
import { CircleHelp, EyeOff, MapPin, Phone } from "lucide-react";


const Footer = ()=>{
    return(<footer className="grid gap-20">
        <div>
          <div className="w-full flex flex-col justify-center items-center px-5 md:px-auto">
            <Image
              alt="inmotion logo mark"
              src="/img/icon.svg"
              width={5000}
              height={5000}
              className="object-contain w-auto h-auto md:h-[140px]"
            />

            <Image
              alt="inmotion word mark"
              src="/img/inmotion.svg"
              width={5000}
              height={5000}
              className="object-contain w-auto h-auto md:h-[120px]"
            />
            <p className="w-max text-3xl md:text-6xl">Technologies</p>
            <a
              href="https://wa.me/2347078065016"
              className="bg-primary rounded-full px-10 py-5 flex items-center gap-4 w-max mt-5 "
            >
              Lets get Talking Solutions <Phone size={20} />
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 mt-20 font-thin">
            <Link
              href="https://wa.me/2347078065016"
              className="flex underline text-xl items-center gap-2 hover:text-primary"
            >
              <Phone size={20} /> Contact
            </Link>
            {/* <Link
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
            </Link> */}
          </div>
        </div>
        <Image
          alt="inmotion stripes"
          src="/img/inmotionstripes.svg"
          width={50}
          height={50}
          className="w-full"
        />
      </footer>)
}

export default Footer