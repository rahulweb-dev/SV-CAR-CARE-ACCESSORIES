import { categoryConfig } from '@/data/accessoryCategories';

export function generateMetadata({ params }) {
  const category = categoryConfig[params.category];

  return {
    title: category?.title || 'Car Accessories',
    description: category?.description,
  };
}
