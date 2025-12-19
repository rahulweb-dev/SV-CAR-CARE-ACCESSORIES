'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // 🔥 Scroll hide / show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
          ${show ? 'translate-y-0' : '-translate-y-full'}
          bg-white/90 backdrop-blur-xl shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="SV Car Care Accessories"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white font-bold">
              SV
            </div>

            <div className="leading-none">
              <p className="text-xl font-extrabold text-red-600 group-hover:text-red-600 transition">
                CarCare
              </p>
              <p className="text-xs tracking-[0.3em] text-gray-500">
                ACCESSORIES
              </p>
            </div>
          </Link>




          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-black">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/accessories">Accessories</NavLink>
            <NavLink href="/car-care">Car Care & Styling</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:9999999999"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              <FaPhoneAlt size={14} />
              Call
            </a>
            <a
              href="https://wa.me/919999999999"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300
        ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50
        transform transition-transform duration-300
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 flex items-center justify-between border-b">
          <span className="text-xl font-bold">
            SV<span className="text-red-600">Accessories</span>
          </span>
          <button onClick={() => setOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <div className="p-6 space-y-5 text-black font-medium">
          <MobileLink href="/" setOpen={setOpen}>Home</MobileLink>
          <MobileLink href="/accessories" setOpen={setOpen}>Accessories</MobileLink>
          <MobileLink href="/car-care" setOpen={setOpen}>Car Care & Styling</MobileLink>

          <MobileLink href="/gallery" setOpen={setOpen}>Gallery</MobileLink>
          <MobileLink href="/contact" setOpen={setOpen}>Contact</MobileLink>

          <div className="pt-6 border-t space-y-3">
            <a href="tel:9999999999" className="flex gap-2 items-center">
              <FaPhoneAlt /> Call Now
            </a>
            <a
              href="https://wa.me/919999999999"
              className="flex gap-2 items-center text-green-600"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Spacer (IMPORTANT) */}
      <div className="h-[80px]" />
    </>
  );
}

/* ---------- Components ---------- */

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative hover:text-red-600 transition
      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
      after:bg-red-600 hover:after:w-full after:transition-all"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, setOpen }) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="block hover:text-red-600 transition"
    >
      {children}
    </Link>
  );
}
