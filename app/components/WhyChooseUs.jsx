'use client';

import {
  FaCar,
  FaThumbsUp,
  FaRupeeSign,
  FaShieldAlt,
} from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-red-600 uppercase">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-extrabold text-black mb-6">
            Premium Car Accessories You Can Trust
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We provide high-quality car accessories and professional car care solutions
            with a strong focus on quality, value, and customer satisfaction.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon={<FaCar />}
            title="Wide Range of Accessories"
            desc="Interior, exterior, and styling accessories for all car models."
          />
          <Feature
            icon={<FaShieldAlt />}
            title="Genuine Products"
            desc="Branded and quality-checked products for durability and safety."
          />
          <Feature
            icon={<FaRupeeSign />}
            title="Best Price Guarantee"
            desc="Competitive pricing with no hidden charges."
          />
          <Feature
            icon={<FaThumbsUp />}
            title="Customer Satisfaction"
            desc="Trusted by hundreds of happy customers."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Feature Card ---------- */

function Feature({ icon, title, desc }) {
  return (
    <div className="group relative bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
      
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full
                      bg-gradient-to-br from-black to-gray-800 text-white text-2xl
                      group-hover:from-red-600 group-hover:to-red-500 transition">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-black mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>

      {/* Bottom Accent */}
      <span className="absolute inset-x-0 bottom-0 h-[3px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-3xl" />
    </div>
  );
}
