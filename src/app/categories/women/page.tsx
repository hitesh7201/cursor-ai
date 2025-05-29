import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function WomenCategory() {
  const products = getProductsByCategory('women');

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Women's Clothing</h1>
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 