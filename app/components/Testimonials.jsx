'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'Ramesh Kumar',
    role: 'Hyundai Creta Owner',
    review:
      'Excellent quality accessories and professional installation. Very satisfied with the service.',
    rating: 5,
  },
  {
    name: 'Anjali Sharma',
    role: 'Maruti Baleno Owner',
    review:
      'Great experience! The team explained everything clearly and delivered on time.',
    rating: 5,
  },
  {
    name: 'Suresh Reddy',
    role: 'Kia Seltos Owner',
    review:
      'Best place for car accessories in Hyderabad. Genuine products and reasonable prices.',
    rating: 4,
  },
  {
    name: 'Priya Verma',
    role: 'Tata Nexon Owner',
    review:
      'Loved the detailing and styling work. Highly recommended!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <span className="text-red-600 text-sm font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-4xl font-extrabold text-black mt-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real feedback from our happy customers who trust us for car accessories and styling.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAVIGATION BUTTONS */}
          <button className="testimonial-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 hidden md:flex">
            <NavButton icon={<FaChevronLeft />} />
          </button>

          <button className="testimonial-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 hidden md:flex">
            <NavButton icon={<FaChevronRight />} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Components ---------- */

function TestimonialCard({ name, role, review, rating }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full">
      
      {/* STARS */}
      <div className="flex gap-1 mb-4 text-yellow-400">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* REVIEW */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        “{review}”
      </p>

      {/* USER */}
      <div className="border-t pt-4">
        <h4 className="font-semibold text-black">{name}</h4>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
}

function NavButton({ icon }) {
  return (
    <div
      className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center
                 hover:bg-red-600 transition shadow-lg"
    >
      {icon}
    </div>
  );
}
