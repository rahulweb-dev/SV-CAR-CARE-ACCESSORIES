'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import EnquiryModal from '../components/forms/EnquiryModal';

/* ---------------- DATA ---------------- */
const productsData = [
  {
    id: 1,
    name: 'Seat Covers',
    category: 'Interior',
    brand: 'Hyundai',
    price: 4500,
    img: '/assests/Car_Arm_Rest.webp',
  },
  {
    id: 2,
    name: 'Car Floor Mats',
    category: 'Interior',
    brand: 'Maruti',
    price: 3200,
    img: '/assests/Car_Arm_Rest.webp',
  },
  {
    id: 3,
    name: 'Car Body Cover',
    category: 'Exterior',
    brand: 'Kia',
    price: 2800,
    img: '/assests/Car_Arm_Rest.webp',
  },
  {
    id: 4,
    name: 'Alloy Wheel Caps',
    category: 'Exterior',
    brand: 'Tata',
    price: 1500,
    img: '/assests/Car_Arm_Rest.webp',
  },
];

/* ---------------- PAGE ---------------- */
export default function AccessoriesPage() {
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [selectedProduct, setSelectedProduct] = useState(null);

  /* ---------- FILTER + SEARCH + SORT ---------- */
  const filteredProducts = productsData
    .filter(
      (p) =>
        (category === 'All' || p.category === category) &&
        (brand === 'All' || p.brand === brand) &&
        p.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* ---------- HEADER ---------- */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black">
            Car Accessories
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Premium interior, exterior accessories & spare parts for all major car brands.
          </p>
        </div>

        {/* ---------- SEARCH + SORT (TOP BAR) ---------- */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">
          {/* SEARCH */}
          <div className="relative w-full md:w-80">
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
            className="border rounded-lg px-3 py-2 text-sm bg-white w-full md:w-56"
          >
            <option value="default">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* ---------- MOBILE FILTERS ---------- */}
        <div className="lg:hidden mb-10 space-y-5">
          <FilterRow
            title="Category"
            options={['All', 'Interior', 'Exterior']}
            value={category}
            onChange={setCategory}
          />
          <FilterRow
            title="Brand"
            options={['All', 'Hyundai', 'Maruti', 'Kia', 'Tata', 'Mahindra']}
            value={brand}
            onChange={setBrand}
          />
        </div>

        <div className="grid lg:grid-cols-4 gap-10">

          {/* ---------- DESKTOP FILTERS ---------- */}
          <aside className="hidden lg:block bg-white border rounded-3xl p-6 h-fit sticky top-28">
            <h3 className="font-semibold text-xl mb-6">Filters</h3>

            <FilterBlock
              title="Category"
              options={['All', 'Interior', 'Exterior']}
              value={category}
              onChange={setCategory}
            />

            <FilterBlock
              title="Brand"
              options={['All', 'Hyundai', 'Maruti', 'Kia', 'Tata', 'Mahindra']}
              value={brand}
              onChange={setBrand}
            />
          </aside>

          {/* ---------- PRODUCTS GRID ---------- */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

            {filteredProducts.length === 0 && (
              <p className="text-gray-500 col-span-full text-center">
                No products found.
              </p>
            )}

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl p-6 border hover:shadow-xl transition flex flex-col"
              >
                {/* IMAGE */}
                <div className="relative w-full h-40 mb-4 bg-gray-50 rounded-xl">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-3"
                  />
                </div>

                {/* DETAILS */}
                <h3 className="font-semibold text-lg text-black">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.brand}</p>

                {/* FOOTER */}
                <div className="mt-auto flex items-center justify-between pt-4">
                  <p className="text-red-600 font-bold text-lg">
                    ₹{product.price}
                  </p>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- MODAL ---------- */}
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

/* ---------------- FILTER COMPONENTS ---------------- */

function FilterBlock({ title, options, value, onChange }) {
  return (
    <div className="mb-6">
      <p className="font-medium mb-3">{title}</p>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`block w-full text-left px-4 py-2 rounded-xl mb-2 transition
            ${
              value === opt
                ? 'bg-black text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function FilterRow({ title, options, value, onChange }) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">{title}</p>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition
              ${
                value === opt
                  ? 'bg-black text-white'
                  : 'bg-white border hover:bg-gray-100'
              }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
