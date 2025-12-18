'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryData = [
  { id: 1, category: 'Interior', img: 'https://lh3.googleusercontent.com/p/AF1QipMfFkcm9xRjkntLObIr3W19EPRg11kI2l3VTf55=w243-h406-n-k-no-nu' },
  { id: 2, category: 'Interior', img: 'https://lh3.googleusercontent.com/p/AF1QipMfFkcm9xRjkntLObIr3W19EPRg11kI2l3VTf55=w243-h406-n-k-no-nu' },
  { id: 3, category: 'Exterior', img: 'https://lh3.googleusercontent.com/p/AF1QipNPx7YOzShKIFloy7urVRZoI7UYolkpn_ymL8zm=w243-h304-n-k-no-nu' },
  { id: 4, category: 'Exterior', img: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwsF_qdborJBlCWeUsYbGI-tjso4Mx7Qcn0bc59ho8sLQFt4jvS6N5ugVwXl94aBgylJ3vhpZAacMld4im_7c8ya7fy_F-K70hLEU5omDYf56Z_PQggk1_0kk3kTpP-a9fAhjG95Vu5LE1z=w243-h174-n-k-no-nu' },
  { id: 5, category: 'Car Care', img: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5SyCMLyyp3bS0nJuLCJLBe1VPLeUMHbm8ySvaQ7gD0qA4s7SGItjFhEywURM1TPITdqO9gRN6N6abI_rx1WzYfqJt1AcxUAG6X0LoVJUsPhMIfvgoVlg2KfUxXsCZQHMJ4mlSYKlCz0QV=w243-h406-n-k-no-nu' },
  { id: 6, category: 'Car Care', img: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5SyCMLyyp3bS0nJuLCJLBe1VPLeUMHbm8ySvaQ7gD0qA4s7SGItjFhEywURM1TPITdqO9gRN6N6abI_rx1WzYfqJt1AcxUAG6X0LoVJUsPhMIfvgoVlg2KfUxXsCZQHMJ4mlSYKlCz0QV=w243-h406-n-k-no-nu' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    filter === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-black">
          Our Gallery
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our interior, exterior, car care, and styling work
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {['All', 'Interior', 'Exterior', 'Car Care'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
              ${
                filter === cat
                  ? 'bg-black text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-3xl overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(item.img)}
          >
            <div className="relative w-full h-64">
              <Image
                src={item.img}
                alt="Gallery Image"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white font-semibold">
                View Image
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
