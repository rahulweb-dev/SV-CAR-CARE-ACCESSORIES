'use client';

import { useState } from 'react';

export default function EnquiryModal({ product, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || phone.length !== 10) {
      alert('Please enter valid details');
      return;
    }

    setLoading(true);

    await fetch('/api/enquires', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        phone,
        product: product.name,
        brand: product.brand,
      }),
    });

    setLoading(false);
    onClose();
    alert('Enquiry submitted successfully');
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold mb-4">
          Enquire for {product.name}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-xl px-4 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-xl px-4 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            maxLength={10}
            required
          />

          <input
            type="text"
            value={product.name}
            disabled
            className="w-full border rounded-xl px-4 py-2 bg-gray-100"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
          >
            {loading ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}
