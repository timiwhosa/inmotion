"use client";
import { useState } from "react";
import {
  Check,
  Star,
  Users,
  FileText,
  Linkedin,
  MessageCircle,
  CreditCard,
  MessageCircleCode,
} from "lucide-react";

export default function CVBuildingService() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showConsultModal, setShowConsultModal] = useState(false);

  const packages = [
    {
      id: "build",
      title: "Build With Me",
      price: "₦8,000",
      features: [
        "1-on-1 CV building session",
        "Live collaboration",
        "Industry-specific guidance",
        "Interview preparation tips",
        "DOC & PDF formats",
      ],
      icon: <Star className="w-10 h-10 text-purple-500 mb-4" />,
      paymentLink: "test",

      // image: "/img/home/software dev.jpg", // Replace with "collaborative-session.jpg" - Image of two people working together on laptop
    },
    {
      id: "career",
      title: "Career Pack",
      price: "₦12,000",
      popular: true,
      features: [
        "3 CVs for different roles",
        "ATS optimization",
        "Keyword optimization",
        "2 rounds of revisions",
        "DOC & PDF formats",
      ],
      icon: <Users className="w-10 h-10 text-blue-600 mb-4" />,
      paymentLink: "test",

      // image: "/img/home/software dev.jpg", // Replace with "career-pack-multiple-cvs.jpg" - Image showing multiple CV designs side by side
    },
    {
      id: "simple",
      title: "Simple CV",
      price: "₦5,000",
      features: [
        "Professional CV template",
        "ATS-friendly format",
        "48-hour delivery",
        "1 round of revisions",
        "DOC & PDF formats",
      ],
      icon: <FileText className="w-10 h-10 text-blue-500 mb-4" />,
      paymentLink: "test",
      // image: "/img/home/software dev.jpg", // Replace with "professional-cv-template.jpg" - Image of a clean, professional CV template
    },

    {
      id: "linkedin",
      title: "LinkedIn 0-Hero",
      price: "₦15,000",
      features: [
        "Complete LinkedIn profile optimization",
        "Professional headline & summary",
        "Strategic keyword placement",
        "Content strategy guide",
        "Network building roadmap",
      ],
      icon: <Linkedin className="w-10 h-10 text-blue-700 mb-4" />,
      paymentLink: "test",

      // image: "/img/home/software dev.jpg", // Replace with "linkedin-profile-optimization.jpg" - Image of optimized LinkedIn profile
    },
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
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="relative mb-20">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* <img
            src="/img/home/software dev.jpg"
            alt="CV background"
            className="w-full h-full object-cover rounded-3xl"
            // Replace with "cv-hero-background.jpg" - Professional image showing success/career growth
          /> */}
        </div>
        <div className="relative z-10 text-center py-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build a CV That Gets You Hired
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
              href="#pricing"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition shadow-lg"
            >
              View Our Packages
            </a>
          </div>
        </div>
      </div>

      {/* Why Talk to Us First */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Talk to Us First?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/img/home/software dev.jpg"
              alt="Consultation session"
              className="rounded-xl shadow-lg w-full"
              // Replace with "cv-consultation.jpg" - Image of a professional consultation
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                <Check className="w-5 h-5 text-blue-600" />
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
              <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                <Check className="w-5 h-5 text-blue-600" />
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
              <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                <Check className="w-5 h-5 text-blue-600" />
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
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Expert-Crafted CVs</h3>
          <p className="text-gray-600">
            Not just templates, but strategically written content that
            highlights your strengths
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Personal Consultation</h3>
          <p className="text-gray-600">
            Every CV starts with understanding your career goals and unique
            strengths
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
          <p className="text-gray-600">
            Receive your professionally written CV within 24-48 hours
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="mb-40">
        <h2 className="text-3xl font-bold text-center mb-4">Our Packages</h2>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          Browse our services below, but remember - we recommend talking to us
          first for personalized guidance
        </p>
        <p className="text-center mb-12">
          <a
            href="https://wa.me/2347078065016?text=Hi,%20I%20need%20help%20choosing%20the%20right%20CV%20package."
            className="text-blue-600 font-medium hover:underline flex items-center justify-center"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Not sure which package is right for you? Chat with us first
          </a>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`border rounded-xl  flex flex-col relative ${
                selectedPackage === pkg.id
                  ? "border-blue-500 shadow-lg"
                  : "border-gray-200 hover:border-blue-300 hover:shadow-md"
              } ${pkg.popular ? "ring-2 ring-blue-500" : ""} transition-all`}
            >
              {pkg.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                  MOST POPULAR
                </div>
              )}
              <div className="flex flex-col items-center mb-6 mt-4">
                {pkg.icon}
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-3xl font-bold text-blue-600">{pkg.price}</p>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {/* <p className="text-3xl font-bold text-blue-600 mb-4">
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
                    className="flex-1 py-2 text-center rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700"
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
        <div className="mt-12 bg-blue-50 p-6 rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-10 ">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-1">
                Ready To build your CV?
              </h3>
              <p className="text-gray-600">
                Talk with our team and know what you need
              </p>
            </div>
            <a
              href="https://wa.me/2347078065016?text=Hi,%20I%20need%20help%20with%20a%20professional%20CV."
              // onClick={initiatePayment}
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {/* <CreditCard className="w-5 h-5 mr-2" /> */}
              {/* Proceed to Payment */}
              Talk with Us Now
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

        <div className="relative flex w-full justify-baseline gap-5">
          {/* Process flow connector */}
          {/* <div className="absolute top-24 left-0 right-0 h-2 bg-blue-100 hidden md:block"></div> */}

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
            <p className="text-gray-600">
              Talk to us on WhatsApp about your career goals
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
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
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
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
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">FO</span>
              </div>
              <div>
                <h4 className="font-semibold">Fisayo Oladele</h4>
                <p className="text-gray-500 text-sm">NYSC Member</p>
              </div>
            </div>
            <p className="text-gray-700">
              {`"`}I used the CV they made for me and got two interview callbacks in
              just one week. The investment was totally worth it!{`"`}
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">UA</span>
              </div>
              <div>
                <h4 className="font-semibold">Uche Abiodun</h4>
                <p className="text-gray-500 text-sm">Marketing Professional</p>
              </div>
            </div>
            <p className="text-gray-700">
              {`"`}They helped me position my sales experience for a marketing role.
              Within a month, I secured a job at a top firm in Lagos!{`"`}
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">TJ</span>
              </div>
              <div>
                <h4 className="font-semibold">Tolu Johnson</h4>
                <p className="text-gray-500 text-sm">Recent Graduate</p>
              </div>
            </div>
            <p className="text-gray-700">
              {`"`}As a fresh graduate with limited experience, I was worried. Their
              team helped me highlight my skills and potential. Highly
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
              You{"'"}ll receive your professionally written CV within 24-48 hours
              after our consultation and payment.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              What if I need revisions?
            </h3>
            <p className="text-gray-600">
              All packages include at least one round of revisions to ensure
              you{"'"}re completely satisfied.
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
      <div className="bg-blue-50 p-8 md:p-12 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Take the first step towards landing your dream job with a
          professionally crafted CV
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/2347078065016?text=Hi,%20I%20need%20help%20with%20a%20professional%20CV."
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition shadow-md flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M13.5 2C7.827 2 3 6.827 3 12.5c0 1.92.52 3.8 1.509 5.44L3 22l4.232-1.109A10.509 10.509 0 0013.5 23C19.173 23 24 18.173 24 12.5S19.173 2 13.5 2zm0 19C8.813 21 5 17.187 5 12.5c0-4.687 3.813-8.5 8.5-8.5 4.687 0 8.5 3.813 8.5 8.5 0 4.687-3.813 8.5-8.5 8.5z" />
            </svg>
            Chat on WhatsApp
          </a>

          <button
            onClick={() => (window.location.href = "#pricing")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
          >
            View Packages
          </button>
        </div>
      </div>
    </div>
  );
}
