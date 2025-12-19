import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'SV Car Care Accessories | Premium Car Accessories in Hyderabad',
  description:
    'SV Car Care Accessories offers premium car accessories including seat covers, foot mats, body covers, car organizers, infotainment systems, and more in Hyderabad.',
  keywords: [
    'car accessories',
    'car care accessories',
    'car accessories Hyderabad',
    'seat covers',
    'car foot mats',
    'car body covers',
    'car organizers',
    'car accessories shop',
  ],
  authors: [{ name: 'SV Car Care Accessories' }],
  metadataBase: new URL('https://svcarcareaccessories.com'),

  openGraph: {
    title: 'SV Car Care Accessories',
    description:
      'Premium car accessories and car care products in Hyderabad. Shop quality accessories for all car brands.',
    url: 'https://svcarcareaccessories.com',
    siteName: 'SV Car Care Accessories',
    images: [
      {
        url: '/og-image.webp', // add this image in /public
        width: 1200,
        height: 630,
        alt: 'SV Car Care Accessories',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SV Car Care Accessories',
    description:
      'Premium car accessories including foot mats, seat covers, body covers & infotainment systems.',
    images: ['/og-image.webp'],
  },

  alternates: {
    canonical: 'https://svcarcareaccessories.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
