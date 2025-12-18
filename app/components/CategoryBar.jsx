'use client';

import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

const categories = [
  {
    title: 'Suspension & Steering',
    items: ['Shock Absorbers', 'Control Arms', 'Tie Rod Ends', 'Ball Joints'],
  },
  {
    title: 'Body Parts',
    items: ['Bumpers', 'Headlights', 'Mirrors', 'Grilles'],
  },
  {
    title: 'HVAC',
    items: ['AC Compressors', 'Condensers', 'Cooling Fans', 'Cabin Filters'],
  },
  {
    title: 'Engine Parts',
    items: ['Oil Filters', 'Timing Belts', 'Spark Plugs', 'Gaskets'],
  },
  {
    title: 'Transmission',
    items: ['Clutch Kits', 'Gear Boxes', 'Transmission Oil', 'Flywheels'],
  },
  {
    title: 'Brake',
    items: ['Brake Pads', 'Brake Discs', 'Brake Fluids', 'Calipers'],
  },
  {
    title: 'Electrical',
    items: ['Batteries', 'Alternators', 'Sensors', 'Wiring'],
  },
  {
    title: 'Accessories',
    items: ['Seat Covers', 'Floor Mats', 'Car Care', 'Styling'],
  },
];

export default function CategoryBar() {
  return (
    <div className="hidden md:block bg-gradient-to-b from-gray-100 to-white border-y">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center justify-between text-sm font-semibold text-gray-800">

          {categories.map((cat, index) => (
            <li key={index} className="relative group py-4">

              {/* MENU ITEM */}
              <span
                className="flex items-center gap-1 cursor-pointer
                           hover:text-red-600 transition relative"
              >
                {cat.title}
                <FaChevronDown
                  className="text-[10px] mt-[2px] transition-transform duration-300
                             group-hover:rotate-180"
                />

                {/* underline */}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-600
                                 transition-all duration-300 group-hover:w-full" />
              </span>

              {/* DROPDOWN */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3
                           w-72 bg-white rounded-2xl shadow-2xl border
                           opacity-0 invisible group-hover:opacity-100
                           group-hover:visible transition-all duration-200 z-50"
              >
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 p-5">
                  {cat.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="block text-sm text-gray-700
                                   hover:text-red-600 hover:translate-x-1
                                   transition"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}
