'use client';

import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>


          <div className="flex items-center gap-3 group select-none">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black font-extrabold text-sm">
              SV
            </div>

            <div className="leading-tight">
              <p className="text-xl font-extrabold text-red-600 group-hover:text-red-600 transition">
                CarCare
              </p>
              <p className="text-[11px] tracking-[0.3em] text-gray-500 uppercase">
                Accessories
              </p>
            </div>
          </div>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Premium car accessories, car care, and styling solutions.
            Quality products, expert installation, and trusted service.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-6">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaWhatsapp />} />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/gallery">Gallery</FooterLink>
            <FooterLink href="/car-care">Car Care</FooterLink>
            <FooterLink href="/styling">Styling</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </ul>
        </div>

        {/* ACCESSORIES */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Accessories</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <FooterLink href="/accessories/interior">Interior Accessories</FooterLink>
            <FooterLink href="/accessories/exterior">Exterior Accessories</FooterLink>
            <FooterLink href="/accessories/car-care">Car Care Products</FooterLink>
            <FooterLink href="/accessories/styling">Car Styling</FooterLink>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3 items-start">
              <FaPhoneAlt className="text-red-600 mt-1" />
              <a href="tel:9999999999" className="hover:text-white">
                +91 99999 99999
              </a>
            </li>
            <li className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-red-600 mt-1" />
              <span>
                Hyderabad, Telangana<br />
                India
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-12 border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SV Accessories. All rights reserved.</p>
          <p>
            Designed & Developed by <span className="text-white">SV Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Small Components ---------- */

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-white transition"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full
                 bg-white/10 hover:bg-red-600 transition text-white"
    >
      {icon}
    </a>
  );
}
