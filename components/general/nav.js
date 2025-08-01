import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex p-5 justify-between items-start sm:items-center w-full z-10 md:py-10 md:px-20">
      <Link href="/" prefetch>
        <div className="flex flex-row gap-2 items-center">
          <Image
            alt="inmotion logo mark"
            src="/img/icon.svg"
            width={50}
            height={50}
            className="object-contain w-auto h-[35px]"
          />
          <Image
            alt="inmotion word mark"
            src="/img/inmotion.svg"
            width={50}
            height={50}
            className="object-contain w-auto h-[26px]"
          />
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="179"
          height="186"
          viewBox="0 0 179 186"
          fill="none"
        >
          <path
            d="M178.596 94.5234H129.71L104.29 131.025H37.805L0 185.125H46.9303L58.6629 166.874H129.71L178.596 94.5234Z"
            fill="#FFD500"
          ></path>
          <path
            d="M157.086 41.7157L128.407 86.0389H58.0109L46.2785 104.941H0L37.805 51.4929H105.593L128.407 21.5098L108.852 12.3844L164.256 0L172.078 56.7075L157.086 41.7157Z"
            fill="#FFD500"
          ></path>
        </svg> */}

          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="640"
          height="126"
          fill="none"
        >
          <path d="M0.571289 0H21.0962V123.323H0.571289V0Z" fill="black"></path>
          <path
            d="M87.8701 32.7578C104.255 32.7578 117.191 42.2442 117.191 62.4243V123.31H98.9089V67.5986C98.9089 55.6976 93.9065 48.1084 81.4878 48.1084C67.5181 48.1084 58.5491 56.56 58.5491 69.6684V123.31H40.438V35.1726H58.5491V46.5562H58.8931C63.5497 39.6569 72.6917 32.7578 87.8701 32.7578Z"
            fill="black"
          ></path>
          <path
            d="M135.65 123.323V0H162.211L196.708 94.8638H197.052L231.375 0H257.939V123.323H237.931V29.8391H237.585L204.987 123.323H188.602L156.002 29.8391H155.658V123.323H135.65Z"
            fill="black"
          ></path>
          <path
            d="M318.448 125.897C290.851 125.897 274.119 106.752 274.119 79.3274C274.119 51.903 290.851 32.7578 318.448 32.7578C346.045 32.7578 362.774 51.903 362.774 79.3274C362.774 106.752 346.045 125.897 318.448 125.897ZM318.448 111.064C335.696 111.064 344.665 97.4377 344.665 79.3274C344.665 61.0445 335.696 47.5911 318.448 47.5911C301.2 47.5911 292.23 61.0445 292.23 79.3274C292.23 97.4377 301.2 111.064 318.448 111.064Z"
            fill="black"
          ></path>
          <path
            d="M415.693 50.0049H399.134V97.7818C399.134 107.786 403.964 108.993 415.693 108.303V123.136C412.07 123.999 408.103 124.516 403.274 124.516C388.785 124.516 380.852 117.962 380.852 99.3341V50.0049H368.088V35.1717H380.852V7.40234H399.134V35.1717H415.693V50.0049Z"
            fill="black"
          ></path>
          <path
            d="M439.03 20.3484C434.028 20.3484 428.854 16.8987 428.854 10.6894C428.854 4.48019 434.028 1.20312 439.03 1.20312C444.377 1.20312 449.379 4.48019 449.379 10.6894C449.379 16.8987 444.377 20.3484 439.03 20.3484ZM430.061 35.1816H448.172V123.319H430.061V35.1816Z"
            fill="black"
          ></path>
          <path
            d="M506.255 125.897C478.658 125.897 461.927 106.752 461.927 79.3274C461.927 51.903 478.658 32.7578 506.255 32.7578C533.852 32.7578 550.582 51.903 550.582 79.3274C550.582 106.752 533.852 125.897 506.255 125.897ZM506.255 111.064C523.503 111.064 532.472 97.4377 532.472 79.3274C532.472 61.0445 523.503 47.5911 506.255 47.5911C489.007 47.5911 480.038 61.0445 480.038 79.3274C480.038 97.4377 489.007 111.064 506.255 111.064Z"
            fill="black"
          ></path>
          <path
            d="M610.531 32.7578C626.917 32.7578 639.852 42.2442 639.852 62.4243V123.31H621.57V67.5986C621.57 55.6976 616.568 48.1084 604.149 48.1084C590.179 48.1084 581.21 56.56 581.21 69.6684V123.31H563.099V35.1726H581.21V46.5562H581.554C586.211 39.6569 595.353 32.7578 610.531 32.7578Z"
            fill="black"
          ></path>
        </svg> */}
        </div>
      </Link>
      <div className="flex flex-col  sm:flex md:flex-row items-center rounded-[20px] border-black border w-max h-max py-2 px-2 md:py-5 md:px-5 gap-2 md:gap-10 text-base font-normal underline ">
        {/* <span className="">
          <a href="#locations">Locations</a>
        </span> */}
        {/* <span className="relative hidden md:block w-0.5 h-6 bg-black"></span> */}
        <span className="">
          <Link href="/cvbuild" prefetch>
            cvbuilder
          </Link>
        </span>
        <span className="relative hidden md:block w-0.5 h-6 bg-black"></span>
        <span className="">
          <Link href="/about" prefetch>
            About Us
          </Link>
        </span>
        <span className="relative hidden md:block w-0.5 h-6 bg-black"></span>
        <span className="">
          <a href="https://wa.me/2347078065016" target="_blanl">
            {" "}
            Contact Us
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
