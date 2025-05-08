export default function CVServiceLanding() {
    return (
      <main className="w-full bg-white text-gray-900">
        {/* Hero */}
        <section className="bg-gray-100 py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional CVs That Get You Interviews</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Custom-written for your specific job goals. Talk to us first, then pay when you're ready.
          </p>
          <a
            href="https://wa.me/234XXXXXXXXXX?text=Hi%20InMotion,%20I%20need%20help%20with%20a%20professional%20CV."
            className="bg-green-600 text-white text-lg px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            Book Free WhatsApp Consultation
          </a>
        </section>
  
        {/* Why Choose Us */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">🔍 Job-Focused Strategy</h3>
              <p>We position your experience to match real job openings — not generic templates.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">💬 Real Conversation First</h3>
              <p>Talk to a human via WhatsApp before you pay. We understand what you need first.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">⚡ Fast Turnaround</h3>
              <p>Your CV delivered within 24–48 hours. Word and PDF included, ready to send.</p>
            </div>
          </div>
        </section>
  
        {/* Packages */}
        <section className="bg-gray-50 py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Packages</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">🎯 Starter CV – ₦5,000</h3>
              <p className="mb-4">Professionally-written CV tailored to a specific job.</p>
              <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                <li>1-on-1 WhatsApp chat</li>
                <li>1 job-specific CV</li>
                <li>Delivery in DOC + PDF</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow border border-green-500">
              <h3 className="text-xl font-semibold mb-2">💼 Career Pack – ₦12,000</h3>
              <p className="mb-4">Three unique CVs for three different job roles.</p>
              <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                <li>3 tailored CVs</li>
                <li>Save ₦3,000</li>
                <li>Editable files + revisions</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* How It Works */}
        <section className="py-20 px-6 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-800">
            <div><strong>1.</strong> Book a WhatsApp Call</div>
            <div><strong>2.</strong> We recommend a package after hearing your goals</div>
            <div><strong>3.</strong> You pay when you’re ready</div>
            <div><strong>4.</strong> We deliver your CV within 1–2 working days</div>
            <div><strong>5.</strong> Revisions? You have a 3-day window</div>
          </div>
        </section>
  
        {/* Testimonials */}
        <section className="bg-gray-100 py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What People Are Saying</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <blockquote className="bg-white p-6 rounded-lg shadow">
              “I used the CV InMotion made for me and got two callbacks in one week.”<br />
              <span className="mt-2 block font-semibold">— Fisayo, NYSC</span>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow">
              “They helped me position my sales experience for a marketing role. It worked!”<br />
              <span className="mt-2 block font-semibold">— Uche, Lagos</span>
            </blockquote>
          </div>
        </section>
  
        {/* Final CTA */}
        <section className="text-center py-20 px-6 bg-white">
          <h2 className="text-3xl font-bold mb-4">Let’s Get Your CV Ready</h2>
          <p className="text-lg text-gray-700 mb-6">Click below to chat with us. You’ll only pay once we’ve discussed your needs.</p>
          <a
            href="https://wa.me/234XXXXXXXXXX?text=Hi%20InMotion,%20I%20need%20help%20with%20a%20professional%20CV."
            className="bg-green-600 text-white text-lg px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            Book a WhatsApp Chat Now
          </a>
        </section>
      </main>
    );
  }