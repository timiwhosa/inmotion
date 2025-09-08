"use client";
import {
  Check,
  CreditCard,
  FileText,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";
import Script from "next/script";
import { useState } from "react";
import CVHero from "./components/hero";

export default function CVBuildingService() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showConsultModal, setShowConsultModal] = useState(false);

  const packages = [
    {
      id: "build",
      title: "Cv Champion",
      price: "₦12,000",
      formerPrice: "₦15,000",
      features: [
        "1 CV (ATS-Friendly)",
        "1 Cover Letter (Job Specific)",
        // "Industry-specific guidance",
        "Delivered within 72hr",
        "1 round of revisions",
        "PDF formats",
      ],
      icon: <Star className="w-10 h-10 text-purple-500 mb-4" />,
      paymentLink: "test",

      // image: "/img/home/software dev.jpg", // Replace with "collaborative-session.jpg" - Image of two people working together on laptop
    },
    {
      id: "career",
      title: "Fast Track Career Pack",
      price: "₦19,000",
      formerPrice: "₦23,000",
      popular: true,
      features: [
        "1 CV + 1 Cover Letter",
        "Express delivery within 24-48hrs",
        "ATS optimization",
        "Keyword optimization",
        "2 rounds of revisions",
        "Doc & PDF formats",
      ],
      icon: <Users className="w-10 h-10 text-primary mb-4" />,
      paymentLink: "test",

      // image: "/img/home/software dev.jpg", // Replace with "career-pack-multiple-cvs.jpg" - Image showing multiple CV designs side by side
    },
    // {
    //   id: "simple",
    //   title: "Simple CV",
    //   price: "₦5,000",
    //   features: [
    //     "Professional CV template",
    //     "ATS-friendly format",
    //     "48-hour delivery",
    //     "1 round of revisions",
    //     "DOC & PDF formats",
    //   ],
    //   icon: <FileText className="w-10 h-10 text-primary mb-4" />,
    //   paymentLink: "test",
    //   // image: "/img/home/software dev.jpg", // Replace with "professional-cv-template.jpg" - Image of a clean, professional CV template
    // },
    {
      id: "professional",
      title: "Professional Pack",
      price: "₦25,000",
      formerPrice: "₦35,000",
      features: [
        "Professional CV build",
        "LinkedIn profile Revamp",
        "ATS-friendly format",
        "2 round of revisions",
        "Strategic keyword placement",
        "Professional headline & summary",
        "DOC & PDF formats",
        "48-hour delivery",
        "Free consultation",
      ],
      icon: <FileText className="w-10 h-10 text-primary mb-4" />,
      paymentLink: "test",
      // image: "/img/home/software dev.jpg", // Replace with "professional-cv-template.jpg" - Image of a clean, professional CV template
    },

    // {
    //   id: "linkedin",
    //   title: "LinkedIn 0-Hero",
    //   price: "₦15,000",
    //   features: [
    //     "Complete LinkedIn profile optimization",
    //     "Professional headline & summary",
    //     "Strategic keyword placement",
    //     "Content strategy guide",
    //     "Network building roadmap",
    //   ],
    //   icon: <Linkedin className="w-10 h-10 text-primary mb-4" />,
    //   paymentLink: "test",

    //   // image: "/img/home/software dev.jpg", // Replace with "linkedin-profile-optimization.jpg" - Image of optimized LinkedIn profile
    // },
  ];

  // const handleSelectPackage = (id) => {
  //   setSelectedPackage(id);
  //   // Instead of proceeding to payment, show consultation modal
  //   // setShowConsultModal(true);
  //   initiatePayment();
  // };

  const initiateWhatsAppConsultation = () => {
    const selectedPkg = packages.find((pkg) => pkg.id === selectedPackage);
    const message = selectedPackage
      ? `Hi, I'm interested in your ${selectedPkg.title} package (${selectedPkg.price}). I'd like to schedule a consultation.`
      : "Hi, I'm interested in your CV writing services. I'd like to schedule a consultation.";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2347078065016?text=${encodedMessage}`, "_blank");
  };

  const initiatePayment = () => {
    if (!selectedPackage) {
      alert("Please select a package first!");
      return;
    }

    // Here you would implement your payment logic
    alert(`Initiating payment for ${selectedPackage} package`);
    // Redirect to payment gateway or show payment modal
  };

  return (
    <>
      {/* Hero Section */}
      <CVHero />
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* <div className="relative mb-20">
        <div className="absolute inset-0 z-0 opacity-10">
         
        </div>
        <div className="relative z-10 text-center py-16 px-4 pt-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto">
            Build a Professional CV That Gets You Hired
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional CV writing services tailored for graduates, job
            switchers, and career professionals in Nigeria
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/2347078065016?text=Hi,%20I%20need%20help%20with%20a%20professional%20CV.%20Can%20we%20talk?"
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition shadow-lg flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Talk to Us First
            </a>
            <a
              href="#package"
              className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary transition shadow-lg"
            >
              View Our Packages
            </a>
          </div>
        </div>
      </div> */}

        {/* Why Talk to Us First */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Talk to Us First?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/img/home/cvbuild.jpeg"
                alt="Consultation session"
                className="rounded-xl shadow-lg w-full"
                // Replace with "cv-consultation.jpg" - Image of a professional consultation
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-full mr-4 mt-1">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Personalized Recommendations
                  </h3>
                  <p className="text-gray-600">
                    We{"'"}ll help you choose the right package based on your
                    specific career goals and situation
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-full mr-4 mt-1">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Free Career Advice
                  </h3>
                  <p className="text-gray-600">
                    Get valuable insights about your industry and job market
                    trends before making any payment
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-full mr-4 mt-1">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Build Trust</h3>
                  <p className="text-gray-600">
                    Experience our expertise firsthand and ask any questions you
                    might have about our process
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/2347078065016?text=Hi,%20I%20need%20help%20with%20a%20professional%20CV.%20Can%20we%20talk?"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition mt-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start a Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert-Crafted CVs</h3>
            <p className="text-gray-600">
              Not just templates, but strategically written content that
              highlights your strengths
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Personal Consultation
            </h3>
            <p className="text-gray-600">
              Every CV starts with understanding your career goals and unique
              strengths
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
            <p className="text-gray-600">
              Receive your professionally written CV within 24-48 hours
            </p>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="package" className="mb-40">
          <h2 className="text-3xl font-bold text-center mb-4">Our Packages</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Browse our services below, but remember - we recommend talking to us
            first for personalized guidance
          </p>
          <p className="text-center mb-12">
            <a
              href="https://wa.me/2347078065016?text=Hi,%20I%20need%20help%20choosing%20the%20right%20CV%20package."
              className="text-primary font-medium hover:underline flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              Not sure which package is right for you? Chat with us first
            </a>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`border rounded-xl  flex flex-col relative ${
                  selectedPackage === pkg.id
                    ? "border-primary shadow-lg"
                    : "border-gray-200 hover:border-yellow-300 hover:shadow-md"
                } ${pkg.popular ? "ring-2 ring-primary" : ""} transition-all`}
              >
                {pkg.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                    MOST POPULAR
                  </div>
                )}
                <div className="flex flex-col items-center mb-6 mt-4">
                  {pkg.icon}
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                  <p className="text-xl font-normal text-zinc-300 line-through">
                    {pkg.formerPrice}
                  </p>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* <p className="text-3xl font-bold text-primary mb-4">
                  {pkg.price}
                </p> */}

                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-green-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* <div className="flex space-x-2">
                  <a href={pkg.paymentLink}
                    onClick={() => handleSelectPackage(pkg.id)}
                    className="flex-1 py-2 text-center rounded-lg font-medium bg-primary text-white hover:bg-primary"
                  >
                    Get this Package
                  </a> */}
                  {/* <a
                    href="https://wa.me/2347078065016?text=Hi,%20I'm%20interested%20in%20your%20CV%20services"
                    className="p-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a> */}
                  {/* </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* After consultation CTA */}
          <div className="mt-12 bg-yellow-50 p-10 py-20 rounded-xl">
            <div className="flex flex-col items-center gap-10 ">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-1 text-center">
                  Ready To build your CV?
                </h3>
                <p className="text-gray-600">
                  Contact us on WhatsApp to Make Payment for your Chosen Package
                </p>
              </div>
              <div>
                {/* <h2>To Make Payment, Contact us</h2> */}
                <a
                  href="https://wa.me/2347078065016?text=Hi,%20I%20need%20help%20with%20a%20professional%20CV."
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition shadow-md flex items-center justify-center gap-2"
                >
                  <svg width="31" height="30" fill="none">
                    <title id="whatsapp-logo">WhatsApp logo</title>
                    <path
                      d="M15.565 0C7.057 0 .133 6.669.13 14.865c-.002 2.621.71 5.179 2.06 7.432L0 30l8.183-2.067a15.89 15.89 0 007.376 1.81h.006c8.508 0 15.432-6.67 15.435-14.866.002-3.97-1.602-7.707-4.517-10.516C23.569 1.551 19.694.001 15.565 0zm0 27.232h-.005c-2.302 0-4.56-.596-6.53-1.722l-.47-.268-4.854 1.226 1.296-4.56-.305-.467a11.983 11.983 0 01-1.962-6.576C2.738 8.052 8.494 2.511 15.57 2.511c3.426.001 6.647 1.288 9.07 3.623s3.756 5.44 3.754 8.742c-.003 6.813-5.758 12.356-12.83 12.356zm7.037-9.255c-.386-.185-2.282-1.084-2.636-1.209-.353-.123-.61-.187-.867.185-.256.372-.996 1.209-1.22 1.456-.226.248-.451.278-.837.093-.386-.186-1.629-.578-3.101-1.844-1.147-.984-1.921-2.2-2.146-2.573-.225-.371-.024-.572.169-.757.173-.165.386-.433.578-.65.192-.217.256-.372.386-.62.128-.247.064-.465-.033-.65-.097-.187-.867-2.015-1.19-2.758-.312-.724-.63-.627-.867-.639-.225-.01-.481-.013-.74-.013-.255 0-.674.093-1.028.465-.353.372-1.35 1.27-1.35 3.098 0 1.829 1.382 3.595 1.575 3.843.193.247 2.72 4 6.589 5.61.92.381 1.638.61 2.199.782.924.283 1.765.242 2.429.147.74-.107 2.282-.898 2.602-1.765.322-.867.322-1.611.226-1.766-.094-.155-.352-.248-.738-.435z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
              <div className="text-center">then</div>
              <a
                href="#tally-open=w5Pd7E&tally-layout=modal&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=5000"
                className="flex items-center justify-center w-full max-w-[400px] text-center bg-primary text-black text-4xl px-6 py-3 rounded-lg font-medium shadow"
              >
                Register
              </a>
            </div>
          </div>
        </div>

        {/* Consultation Modal */}
        {showConsultModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <h3 className="text-2xl font-bold mb-4">Let{"'"}s Talk First!</h3>
              <p className="text-gray-600 mb-4">
                We recommend a quick consultation before payment to ensure we
                understand your needs and can deliver the best results.
              </p>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <p className="font-medium">
                  You selected:{" "}
                  {packages.find((pkg) => pkg.id === selectedPackage)?.title}
                </p>
                <p className="text-sm text-gray-600">
                  Price:{" "}
                  {packages.find((pkg) => pkg.id === selectedPackage)?.price}
                </p>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowConsultModal(false)}
                  className="flex-1 py-2 border border-gray-300 rounded-lg"
                >
                  Close
                </button>
                <button
                  onClick={initiateWhatsAppConsultation}
                  className="flex-1 py-2 bg-green-600 text-white rounded-lg flex items-center justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Process Section */}
        <div className="mb-40">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="relative grid sm:flex w-full justify-baseline gap-5">
            {/* Process flow connector */}
            {/* <div className="absolute top-24 left-0 right-0 h-2 bg-yellow-100 hidden md:block"></div> */}

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
              <p className="text-gray-600">
                Talk to us on WhatsApp about your career goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Package Recommendation
              </h3>
              <p className="text-gray-600">
                We suggest the best option for your specific needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Simple Payment</h3>
              <p className="text-gray-600">
                Secure payment through bank transfer or digital options
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-40">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">FO</span>
                </div>
                <div>
                  <h4 className="font-semibold">Fisayo Oladele</h4>
                  <p className="text-gray-500 text-sm">NYSC Member</p>
                </div>
              </div>
              <p className="text-gray-700">
                {`"`}I used the CV they made for me and got two interview
                callbacks in just one week. The investment was totally worth it!
                {`"`}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">UA</span>
                </div>
                <div>
                  <h4 className="font-semibold">Uche Abiodun</h4>
                  <p className="text-gray-500 text-sm">
                    Marketing Professional
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                {`"`}They helped me position my sales experience for a marketing
                role. Within a month, I secured a job at a top firm in Lagos!
                {`"`}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">TJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Tolu Johnson</h4>
                  <p className="text-gray-500 text-sm">Recent Graduate</p>
                </div>
              </div>
              <p className="text-gray-700">
                {`"`}As a fresh graduate with limited experience, I was worried.
                Their team helped me highlight my skills and potential. Highly
                recommended!{`"`}
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Do I need to have an existing CV?
              </h3>
              <p className="text-gray-600">
                No — we can build your CV from scratch based on your experience
                and career goals.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                How long does the process take?
              </h3>
              <p className="text-gray-600">
                You{"'"}ll receive your professionally written CV within 24-48
                hours after our consultation and payment.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                What if I need revisions?
              </h3>
              <p className="text-gray-600">
                All packages include at least one round of revisions to ensure
                you
                {"'"}re completely satisfied.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept bank transfers, USSD payments, and payments through
                major fintech apps like Paystack.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-yellow-50 p-8 md:p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Decide on a Package, and Make Payment
            <span></span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/2347078065016?text=Hi,%20I%20need%20help%20with%20a%20professional%20CV."
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition shadow-md flex items-center gap-2 justify-center"
            >
              <svg width="31" height="30" fill="none">
                <title id="whatsapp-logo">WhatsApp logo</title>
                <path
                  d="M15.565 0C7.057 0 .133 6.669.13 14.865c-.002 2.621.71 5.179 2.06 7.432L0 30l8.183-2.067a15.89 15.89 0 007.376 1.81h.006c8.508 0 15.432-6.67 15.435-14.866.002-3.97-1.602-7.707-4.517-10.516C23.569 1.551 19.694.001 15.565 0zm0 27.232h-.005c-2.302 0-4.56-.596-6.53-1.722l-.47-.268-4.854 1.226 1.296-4.56-.305-.467a11.983 11.983 0 01-1.962-6.576C2.738 8.052 8.494 2.511 15.57 2.511c3.426.001 6.647 1.288 9.07 3.623s3.756 5.44 3.754 8.742c-.003 6.813-5.758 12.356-12.83 12.356zm7.037-9.255c-.386-.185-2.282-1.084-2.636-1.209-.353-.123-.61-.187-.867.185-.256.372-.996 1.209-1.22 1.456-.226.248-.451.278-.837.093-.386-.186-1.629-.578-3.101-1.844-1.147-.984-1.921-2.2-2.146-2.573-.225-.371-.024-.572.169-.757.173-.165.386-.433.578-.65.192-.217.256-.372.386-.62.128-.247.064-.465-.033-.65-.097-.187-.867-2.015-1.19-2.758-.312-.724-.63-.627-.867-.639-.225-.01-.481-.013-.74-.013-.255 0-.674.093-1.028.465-.353.372-1.35 1.27-1.35 3.098 0 1.829 1.382 3.595 1.575 3.843.193.247 2.72 4 6.589 5.61.92.381 1.638.61 2.199.782.924.283 1.765.242 2.429.147.74-.107 2.282-.898 2.602-1.765.322-.867.322-1.611.226-1.766-.094-.155-.352-.248-.738-.435z"
                  fill="currentColor"
                ></path>
              </svg>
              Chat on WhatsApp
            </a>

            <button
              onClick={() => (window.location.href = "#package")}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary transition shadow-md"
            >
              View Packages
            </button>
          </div>
        </div>
        <Script async src="https://tally.so/widgets/embed.js" />
      </div>
    </>
  );
}