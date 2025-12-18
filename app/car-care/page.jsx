'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Microfiber Car Cleaning Towels',
    price: 155,
    rating: 5,
    img: '/assests/car-care/microfiber.webp',
  },
  {
    id: 2,
    name: 'Gear Knob & Handbrake Cover',
    price: 349,
    rating: 5,
    img: '/assests/car-care/gear-cover.webp',
  },
  {
    id: 3,
    name: 'Car Pillow Neck Rest',
    price: 699,
    rating: 4,
    img: '/assests/car-care/neck-rest.webp',
  },
  {
    id: 4,
    name: 'PU Leather Car Organizer',
    price: 799,
    rating: 5,
    img: '/assests/car-care/organizer.webp',
  },
  {
    id: 5,
    name: 'Seat Gap Filler',
    price: 349,
    rating: 5,
    img: '/assests/car-care/seat-gap.webp',
  },
  {
    id: 6,
    name: 'Premium Car Armrest Organizer',
    price: 1499,
    rating: 4,
    img: '/assests/car-care/armrest.webp',
  },
];

export default function CarCareStylingPage() {
  const [sort, setSort] = useState('best');

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-black">
            Car Care & Styling
          </h1>
          <p className="text-gray-600 mt-2">
            Premium car care, comfort, and styling accessories
          </p>
        </div>

        {/* SORT */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">Sort by</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm"
          >
            <option value="best">Best Selling</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-2xl p-4 hover:shadow-xl transition"
          >
            {/* IMAGE */}
            <div className="relative h-48 mb-4">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            {/* RATING */}
            <div className="flex gap-1 text-yellow-400 text-sm mb-2">
              {Array.from({ length: product.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* TITLE */}
            <h3 className="text-sm font-semibold text-black mb-2 line-clamp-2">
              {product.name}
            </h3>

            {/* PRICE */}
            <p className="text-lg font-bold text-black mb-4">
              ₹{product.price}
            </p>

            {/* CTA */}
            <button
              className="w-full bg-[#0a2540] text-white py-2 rounded-lg text-sm
                         hover:bg-black transition"
            >
              Quick View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
