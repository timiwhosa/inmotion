export default function CVHero() {
  return (
    <div className="relative sm:-top-10  bg-cover bg-center bg-no-repeat overflow-hidden" style={{backgroundImage: 'url("/img/inmotion_bg.svg")'}}>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/20  to-white/4 backdrop-blur-[1px]"></div>
  {/* <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80  to-primary/40"></div> */}
  
    {/* // <div className="relative min-h-screen bg-gradient-to-br from-yellow-500 to-primary overflow-hidden" style={{backgroundImage: 'url("/img/home/cvbuild.jpeg")'}}> */}
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Decorative circles and shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-black/5 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-black/3 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-xl"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/3 left-10 w-24 h-24 bg-black/5 transform rotate-45 rounded-lg blur-lg"></div>
        <div className="absolute top-1/2 right-16 w-16 h-16 bg-yellow-400/10 transform rotate-12 rounded-lg blur-md"></div>
        <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-white/5 transform -rotate-12 rounded-lg blur-md"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-5 pt-0">
        {/* Header badge */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm border border-black/20 rounded-full px-6 py-3">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-yellow-900 text-sm font-bold">✨</span>
            </div>
            <span className="text-white font-normal">Professional CV Writing Services</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-6 text-outline bg-white/10 backdrop-blur-sm  p-4 rounded-4xl overflow-hidden">
            Build a <span className="">Professional</span>
            <br />
            <span className="">CV That </span>
            <span className="">Gets You Hired</span>
            <span className=" sm:text-8xl">.</span>
          </h1>
          
          {/* Subtitle with brand name */}
          {/* <div className="mb-4">
            <h2 className="text-white text-2xl font-bold mb-2">Inmotion CV</h2>
          </div> */}
          
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            {/* Professional CV writing services tailored  */}
            for <span className="font-semibold text-black">graduates</span>, <span className="font-semibold text-black">job switchers</span>, and{' '}
            <span className="font-semibold text-black">career professionals</span> in Nigeria
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="https://wa.me/2347078065016?text=Hi,%20I%20need%20help%20with%20a%20professional%20CV.%20Can%20we%20talk?" target="_blank" className="group relative bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[200px]">
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs">💬</span>
              </div>
              <span>Talk to Us First</span>
            </div>
          </a>
          
          <a href="#package" className="group relative bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[200px]">
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs">📋</span>
              </div>
              <span>View Our Packages</span>
            </div>
          </a>
        </div>

        {/* Trust indicator */}
        <div className="text-center">
          <p className="text-black text-sm font-medium tracking-wider uppercase">
            TRUSTED BY 500+ PROFESSIONALS
          </p>
        </div>

        {/* Decorative elements in corners */}
        <div className="absolute top-8 right-8 text-yellow-400 text-6xl opacity-30">
          •
        </div>
        <div className="absolute bottom-8 left-8 text-white text-4xl opacity-20">
          •
        </div>
      </div>

      {/* Additional background pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent"></div>
    </div>
  );
}