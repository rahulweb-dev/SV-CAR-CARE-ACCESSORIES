'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaStar, FaSearch } from 'react-icons/fa';
import EnquiryModal from '../components/forms/EnquiryModal';

/* ---------------- DATA ---------------- */
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

/* ---------------- PAGE ---------------- */
export default function CarCareStylingPage() {
  const [sort, setSort] = useState('best');
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  /* ---------- SEARCH + SORT ---------- */
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      return b.rating - a.rating;
    });

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- HEADER ---------- */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-black">
              Car Care & Styling
            </h1>
            <p className="text-gray-600 mt-2">
              Premium car care, comfort, and styling accessories
            </p>
          </div>

          {/* SEARCH + SORT */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* SEARCH */}
            <div className="relative w-full sm:w-72">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search accessories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-lg pl-9 pr-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>

            {/* SORT */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm bg-white"
            >
              <option value="best">Best Selling</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* ---------- PRODUCT GRID ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-2xl p-4 hover:shadow-xl transition flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative w-full h-44 mb-4 bg-gray-50 rounded-xl">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain p-3"
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
                onClick={() => setSelectedProduct(product)}
                className="mt-auto w-full bg-[#0a2540] text-white py-2 rounded-lg text-sm
                           hover:bg-black transition"
              >
                Enquire Now
              </button>
            </div>
          ))}
        </div>

        {/* ---------- ENQUIRY MODAL ---------- */}
        {selectedProduct && (
          <EnquiryModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </section>
  );
}
