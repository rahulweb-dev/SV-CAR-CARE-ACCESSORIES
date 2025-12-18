import Image from 'next/image';
import Banner from './components/Banner';
import ShopByCategory from './components/Categories';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CategoryBar from './components/CategoryBar';

export default function Home() {
  const sliders = [
    {
      desktopImg: '/assests/hero_banner.webp',

      mobileImg: '/assests/hero_banner.webp',
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
      <CategoryBar/>
      <ShopByCategory/>
      <WhyChooseUs/>
      <Testimonials/>
    </div>
  );
}
