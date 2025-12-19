import Image from 'next/image';
import Banner from './components/Banner';
import ShopByCategory from './components/Categories';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CategoryBar from './components/CategoryBar';

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




export default function Home() {
  const sliders = [
    {
      desktopImg:
        'https://www.autofurnish.com/cdn/shop/files/ltm_mats_D_size.jpg?v=1766055698',

      mobileImg:
        'https://www.autofurnish.com/cdn/shop/files/ltm_mats_D_size.jpg?v=1766055698',
      alt: 'Monsoon',
      link: '/',
    },

    {
      desktopImg:
        'https://www.autofurnish.com/cdn/shop/files/D_size_banner_7d293dee-d61f-4ab2-841c-00364a6d170d.jpg?v=1757930995',

      mobileImg:
        'https://www.autofurnish.com/cdn/shop/files/D_size_banner_7d293dee-d61f-4ab2-841c-00364a6d170d.jpg?v=1757930995',
      alt: 'Monsoon',
      link: '/',
    },

    {
      desktopImg:
        '/banners/Main-Banner_1020x779_9f3685c0-ad7c-44a6-91ea-6df993d2c05f.webp',

      mobileImg:
        '/banners/Main-Banner_1020x779_9f3685c0-ad7c-44a6-91ea-6df993d2c05f.webp',
      alt: 'Monsoon',
      link: '/',
    },
    {
      desktopImg:
        'https://www.autofurnish.com/cdn/shop/files/xmas_sale_D_size.jpg?v=1765975760',

      mobileImg:
        'https://www.autofurnish.com/cdn/shop/files/xmas_sale_D_size.jpg?v=1765975760',
      alt: 'Monsoon',
      link: '/',
    },
  ];
  return (
    <div>
      <Banner sliders={sliders} />
      {/* <CategoryBar /> */}
      <ShopByCategory />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
