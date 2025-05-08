import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#ffd500] text-black px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <Image
          alt="inmotion logo mark"
          src="/img/icon_white.svg"
          width={5000}
          height={5000}
          className="object-contain w-auto h-auto md:h-[140px] mx-auto"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          About InMotion Technologies
        </h1>
        <p className="text-lg text-black mb-6 leading-7">
          InMotion Technologies is a software development company that builds
          intelligent solutions using AI, geospatial systems, real-time
          communication, and automation. We craft tools and experiences that
          help businesses scale and solve real-world problems using software.
        </p>
        <p className="text-lg text-black mb-6 leading-7">
          Our solutions span multiple industries—from transport and education to
          logistics and advertising. With a user-focused approach, we create
          platforms that are fast, intuitive, and built for scale.
        </p>
        {/* <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-[#ffd500] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Nibi</h3>
            <p className="text-black text-sm">
              An in-taxi media network that delivers ads to passengers using
              mounted smartphones and location-based targeting.
            </p>
          </div>
          <div className="bg-[#ffd500] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Nerra</h3>
            <p className="text-black text-sm">
              A youth-focused program equipping Nigerian high school students
              with future-ready tech skills and problem-solving mindsets.
            </p>
          </div>
          <div className="bg-[#ffd500] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Asap</h3>
            <p className="text-black text-sm">
              A logistics dispatch platform offering fast, reliable package
              delivery across campuses and local areas.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
