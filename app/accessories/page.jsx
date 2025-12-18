'use client';

import { useState } from 'react';
import Image from 'next/image';
import EnquiryModal from '../components/forms/EnquiryModal';

const productsData = [
  {
    id: 1,
    name: 'Seat Covers',
    category: 'Interior',
    brand: 'Hyundai',
    price: 4500,
    img: '/assests/seat-cover.webp',
  },
  {
    id: 2,
    name: 'Car Floor Mats',
    category: 'Interior',
    brand: 'Maruti',
    price: 3200,
    img: '/assests/foot-mats.webp',
  },
  {
    id: 3,
    name: 'Car Body Cover',
    category: 'Exterior',
    brand: 'Kia',
    price: 2800,
    img: '/assests/car-cover.webp',
  },
  {
    id: 4,
    name: 'Alloy Wheel Caps',
    category: 'Exterior',
    brand: 'Tata',
    price: 1500,
    img: '/assests/alloy.webp',
  },
];

export default function AccessoriesPage() {
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productsData.filter((p) => {
    return (
      (category === 'All' || p.category === category) &&
      (brand === 'All' || p.brand === brand)
    );
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-black">
          Car Accessories & Spare Parts
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Explore genuine interior, exterior, and car spare parts for all major brands.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-10">

        {/* FILTERS */}
        <aside className="bg-white border rounded-3xl p-6 h-fit sticky top-28">
          <h3 className="font-semibold text-lg mb-6">Filters</h3>

          {/* CATEGORY */}
          <FilterBlock
            title="Category"
            options={['All', 'Interior', 'Exterior']}
            value={category}
            onChange={setCategory}
          />

          {/* BRAND */}
          <FilterBlock
            title="Brand"
            options={['All', 'Hyundai', 'Maruti', 'Kia', 'Tata', 'Mahindra']}
            value={brand}
            onChange={setBrand}
          />
        </aside>

        {/* PRODUCTS */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-3xl p-6 hover:shadow-2xl transition"
            >
              <div className="relative h-40 mb-4">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="font-semibold text-black">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>

              <p className="text-red-600 font-bold mt-2 mb-4">
                ₹{product.price}
              </p>

              <button
                onClick={() => setSelectedProduct(product)}
                className="w-full py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
              >
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ENQUIRY MODAL */}
      {selectedProduct && (
        <EnquiryModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

/* ---------- FILTER COMPONENT ---------- */
function FilterBlock({ title, options, value, onChange }) {
  return (
    <div className="mb-6">
      <p className="text-sm font-medium mb-3">{title}</p>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`block w-full text-left px-4 py-2 rounded-lg mb-2 transition
            ${value === opt ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
