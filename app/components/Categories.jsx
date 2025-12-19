'use client';

import Image from 'next/image';
import Link from 'next/link';

const exteriorInterior = [
  { title: 'Car Body Covers', img: '/assests/car_cover_6.webp', link: '/accessories/body-covers' },
  { title: 'Car Foot Mats', img: '/assests/Car_Foot_Mats_42fe6ef7-7c6b-4635-9f6e-cb1a5b77cd35.webp', link: "/accessories/foot-mats" },
  { title: 'Car Organizers', img: '/assests/orgamizer_94591334-7609-426a-9c6c-74afe52f1059.webp', link: "/accessories/organizers" },
  { title: 'Car Screen Guards', img: '/assests/Screen_protector_92d84c25-b05c-410a-a13c-5797d3fe35dd.webp', link: "/accessories/screen-guards" },
  { title: 'Car Trunk Mats', img: '/assests/Car_Trunk_Ma.webp', link: "/accessories/trunk-mats" },
  { title: 'Car Windshield Cover', img: '/assests/Car_wind_shield_2.webp', link: "/accessories/windshield-covers" },
];

const careStyling = [
  { title: 'Car Perfumes', img: '/assests/areon_perfume.webp', link: '' },
  { title: 'Car Tissue Box', img: '/assests/car_tissue_box.webp', link: '' },
  { title: 'Car Cushion', img: '/assests/Car_Cushions.webp', link: '' },
  { title: 'Car Armrest', img: '/assests/Car_Arm_Rest.webp', link: '' },
  { title: 'Gear Knob Cover', img: '/assests/Gear_Knob_Cover.webp', link: '' },
  { title: 'Seat Gap Fillers', img: '/assests/Seat_Gap_Fillers.webp', link: '' },
];

const entertainment = [
  {
    title: 'Android Car Stereo',
    img: '/assests/Android-Car-Stereo.webp',
    link: '/accessories/android-stereo',
  },
  {
    title: 'Car Speakers',
    img: '/assests/Car-Speakers.webp',
    link: '/accessories/car-speakers',
  },
  {
    title: 'Subwoofer & Amplifier',
    img: '/assests/Subwoofer-&-Amplifier.webp',
    link: '/accessories/subwoofer-amplifier',
  },
  {
    title: 'Rear Seat Entertainment',
    img: '/assests/Rear-Seat-Entertainment.webp',
    link: '/accessories/rear-seat-entertainment',
  },
  {
    title: 'Ambient LED Lights',
    img: '/assests/Ambient-LED-Lights.jpg',
    link: '/accessories/ambient-lighting',
  },
  {
    title: 'Dash Camera',
    img: '/assests/Dash-Camera.webp',
    link: '/accessories/dash-camera',
  },
];


export default function ShopByCategory() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* SECTION TITLE */}
      <div className="flex items-center gap-6 mb-16">
        <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-900 to-transparent" />
        <h2 className="text-2xl font-bold tracking-wide uppercase ">
          Shop by Categories
        </h2>
        <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-900 to-transparent" />
      </div>

      <CategoryBlock
        banner="/assests/exterior_and_interiors.webp"
        label="Car Exterior & Interiors"
        data={exteriorInterior}
      />

      <CategoryBlock
        banner="/assests/car_care.webp"
        label="Car Care & Styling"
        data={careStyling}
        reverse
      />
      <CategoryBlock
        banner="/assests/Driving_Into_The_Future_Featured.webp"
        label="Entertainment"
        data={entertainment}
        reverse
      />
    </section>
  );
}

/* ---------- Category Block ---------- */

function CategoryBlock({ banner, data, label, reverse }) {
  return (
    <div
      className={`grid lg:grid-cols-3 gap-12 mb-24 ${reverse ? 'lg:flex-row-reverse' : ''
        }`}
    >
      {/* BANNER */}
      <div className="lg:col-span-1">

        <div className="relative w-full h-105 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={banner}
            alt={label}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-white text-xl font-semibold">{label}</h3>
            <div className="w-12 h-0.5 bg-red-500 mt-2" />
          </div>
        </div>

      </div>

      {/* CATEGORY CARDS */}
      <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="group bg-white border rounded-2xl p-6 flex flex-col items-center text-center
                       transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <Link href={item.link}>
              <div className="relative w-full h-32 mb-5">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="font-semibold text-sm text-black">
                {item.title}
              </p></Link>
          </div>
        ))}
      </div>
    </div>
  );
}
