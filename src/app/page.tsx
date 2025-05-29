import Link from 'next/link';
import NewArrivals from '@/components/NewArrivals';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">Stylish Clothing for Everyone</h1>
          <p className="mb-8 text-xl">Discover the latest trends in men's and women's fashion</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/categories/men"
              className="rounded-full bg-white px-6 py-3 font-semibold text-purple-600 shadow-md transition hover:bg-gray-100"
            >
              Shop Men
            </Link>
            <Link 
              href="/categories/women"
              className="rounded-full bg-white px-6 py-3 font-semibold text-pink-600 shadow-md transition hover:bg-gray-100"
            >
              Shop Women
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Shop by Category</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-lg bg-gray-100">
              <img 
                src="/images/mens-tshirts.jpg" 
                alt="Men's T-Shirts"
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <h3 className="text-2xl font-bold text-white">T-Shirts</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-gray-100">
              <img 
                src="/images/mens-jeans.jpg" 
                alt="Men's Jeans"
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <h3 className="text-2xl font-bold text-white">Jeans</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-gray-100">
              <img 
                src="/images/womens-dresses.jpg" 
                alt="Women's Dresses"
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <h3 className="text-2xl font-bold text-white">Dresses</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-gray-100">
              <img 
                src="/images/womens-tops.jpg" 
                alt="Women's Tops"
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <h3 className="text-2xl font-bold text-white">Tops</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">New Arrivals</h2>
          <NewArrivals />
          <div className="mt-10 text-center">
            <Link 
              href="/products"
              className="inline-block rounded-md bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
