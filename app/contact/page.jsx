'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaUser,
  FaPen,
} from 'react-icons/fa';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert('Please fill all required fields');
      return;
    }

    setLoading(true);

    await fetch('/api/contact-us', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setLoading(false);
    alert('Message sent successfully');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="bg-white  py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact <span className="text-red-500">Us</span>
          </h1>
          <p className="text-gray-400">
            Let’s talk about your car care & accessories needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* FORM */}
          <div className="bg-linear-to-br from-white to-white rounded-3xl p-10 shadow-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
            <p className="text-gray-400 mb-8">
              Our team will respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input icon={<FaUser />} placeholder="Your Name" name="name" value={form.name} onChange={handleChange} required />
              <Input icon={<FaEnvelope />} placeholder="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
              <Input icon={<FaPen />} placeholder="Subject" name="subject" value={form.subject} onChange={handleChange} />

              <textarea
                name="message"
                placeholder="Write your message..."
                rows="4"
                className="w-full bg-gray-300 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 transition font-semibold text-white"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <p className="text-gray-400 text-lg">
              Visit our store or reach out instantly via call or WhatsApp.
            </p>

            <Info icon={<FaPhoneAlt />} title="Call Us" value="+91 99999 99999" />
            <Info icon={<FaEnvelope />} title="Email" value="info@svaccessories.com" />
            <Info icon={<FaWhatsapp />} title="WhatsApp" value="+91 99999 99999" />
            <Info
              icon={<FaMapMarkerAlt />}
              title="Location"
              value="Hyderabad, Telangana, India"
            />

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden border border-gray-700">
              <iframe
                title="SV Car Care Accessories Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.431973!2d78.544512!3d17.472843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1dfac8396fcc8b3e!2sSV%20CAR%20CARE%20ACCESSORIES!5e0!3m2!1sen!2sin!4v1734584000000"
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>


          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0  z-10" />
          <div className="relative w-full h-72">
            <Image
              src="/assests/hero_banner.webp"
              alt="Contact CTA"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Need Instant Assistance?
            </h2>
            <a
              href="https://wa.me/919999999999"
              className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- COMPONENTS ---------- */

function Input({ icon, ...props }) {
  return (
    <div className="flex items-center bg-gray-300 border border-gray-700 rounded-xl px-4">
      <span className="text-gray-400 mr-3">{icon}</span>
      <input
        {...props}
        className="w-full bg-transparent py-3 text-sm focus:outline-none"
      />
    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-gray-800">
      <div className="text-xl text-red-500">{icon}</div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-gray-400 text-sm">{value}</p>
      </div>
    </div>
  );
}
