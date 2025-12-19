import Link from 'next/link';

export default function Breadcrumbs({ category, title }) {
  return (
    <nav className="text-sm text-gray-500 mb-6">
      <Link href="/" className="hover:underline">Home</Link>
      <span className="mx-2">/</span>
      <Link href="/accessories" className="hover:underline">Accessories</Link>

      {category && (
        <>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">{title}</span>
        </>
      )}
    </nav>
  );
}
