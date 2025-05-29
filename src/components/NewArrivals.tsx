import { getNewArrivals } from '@/data/products';
import ProductCard from './ProductCard';

const NewArrivals = () => {
  const newArrivals = getNewArrivals();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {newArrivals.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default NewArrivals; 