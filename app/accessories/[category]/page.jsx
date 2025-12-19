'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

import { productsData } from '@/app/data/accessoriesData';
import EnquiryModal from '@/app/components/forms/EnquiryModal';


const categoryTitles = {
  'body-covers': 'Car Body Covers',
  'foot-mats': 'Car Foot Mats',
  'organizers': 'Car Organizers',
  'screen-guards': 'Car Screen Guards',
  'trunk-mats': 'Car Trunk Mats',
  'windshield-covers': 'Car Windshield Covers',
  'android-stereo': 'Android Stereo',
  'car-speakers': 'Car Speakers',
  'subwoofer-amplifier': 'Subwoofer Amplifier',
  'rear-seat-entertainment': 'Rear Seat Entertainment',
  'ambient-lighting': 'Ambient Lighting',
  'dash-camera': 'Dash Camera'

};

export default function AccessoriesCategoryPage() {
  const { category } = useParams();

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productsData
    .filter(
      (p) =>
        p.category === category &&
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

        {/* HEADER */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-extrabold text-black">
            {categoryTitles[category] || 'Car Accessories'}
          </h1>
          <p className="text-gray-600 mt-4">
            Premium quality accessories for your car
          </p>
        </div>

        {/* SEARCH + SORT */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">
          <div className="relative w-full md:w-80">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              placeholder="Search accessories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-lg pl-9 pr-3 py-2 text-sm"
            />
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm w-full md:w-56"
          >
            <option value="default">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl p-6 border hover:shadow-xl flex flex-col"
            >
              <div className="relative w-full h-40 mb-4 bg-gray-50 rounded-xl">
                <Image src={product.img} alt={product.name} fill className="object-contain p-3" />
              </div>

              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>

              <div className="mt-auto flex justify-between pt-4">
                <p className="text-red-600 font-bold">₹{product.price}</p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-4 py-2 bg-black text-white rounded-full text-sm"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

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
