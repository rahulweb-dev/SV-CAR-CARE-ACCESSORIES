'use client';

import { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
          <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-gray-400">Home / Contact</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* FORM */}
          <div className="bg-[#111] rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
            <p className="text-gray-400 mb-6">
              Fill the form below and we’ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                {loading ? 'Sending...' : 'Send Now'}
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <p className="text-gray-400">
              Feel free to contact us for car accessories, car care, or styling services.
              Our team is always ready to help you.
            </p>

            <Info icon={<FaPhoneAlt />} title="Phone Number" value="+91 99999 99999" />
            <Info icon={<FaEnvelope />} title="Email Address" value="info@svaccessories.com" />
            <Info icon={<FaWhatsapp />} title="WhatsApp" value="+91 99999 99999" />
            <Info
              icon={<FaMapMarkerAlt />}
              title="Our Office"
              value="Hyderabad, Telangana, India"
            />

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps?q=Hyderabad&output=embed"
                className="w-full h-60"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="mt-24 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-black/70" />
          <img
            src="/assests/contact-banner.webp"
            alt="CTA"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-gray-300 mb-2">Hire Us Now</p>
            <h2 className="text-3xl font-bold mb-4">
              We Are Always Ready To Help You
            </h2>
            <a
              href="https://wa.me/919999999999"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- Small Components ---------- */

function Input(props) {
  return (
    <input
      {...props}
      className="w-full bg-white border border-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white"
    />
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="text-xl text-white mt-1">{icon}</div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-gray-400 text-sm">{value}</p>
      </div>
    </div>
  );
}
