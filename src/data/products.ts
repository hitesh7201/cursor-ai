export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'men' | 'women';
  subcategory: string;
  image: string;
  colors: string[];
  sizes: string[];
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: 'm1',
    name: 'Men\'s Classic Fit T-Shirt',
    description: 'Premium cotton t-shirt with a comfortable classic fit. Perfect for everyday wear.',
    price: 24.99,
    category: 'men',
    subcategory: 'tshirts',
    image: '/images/mens-tshirts.jpg',
    colors: ['Black', 'White', 'Navy', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
    newArrival: true
  },
  {
    id: 'm2',
    name: 'Men\'s Slim Fit Jeans',
    description: 'Modern slim fit jeans with stretch for comfort and mobility.',
    price: 59.99,
    category: 'men',
    subcategory: 'jeans',
    image: '/images/mens-jeans.jpg',
    colors: ['Blue', 'Black', 'Gray'],
    sizes: ['30x32', '32x32', '34x32', '36x32', '38x32'],
    bestSeller: true
  },
  {
    id: 'm3',
    name: 'Men\'s Casual Button-Down Shirt',
    description: 'Versatile button-down shirt perfect for both casual and semi-formal occasions.',
    price: 45.99,
    category: 'men',
    subcategory: 'shirts',
    image: '/images/mens-shirts.jpg',
    colors: ['White', 'Blue', 'Black', 'Pink'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true
  },
  {
    id: 'm4',
    name: 'Men\'s Lightweight Hoodie',
    description: 'Comfortable and lightweight hoodie ideal for layering in cooler weather.',
    price: 39.99,
    category: 'men',
    subcategory: 'hoodies',
    image: '/images/mens-hoodies.jpg',
    colors: ['Gray', 'Black', 'Navy', 'Green'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    newArrival: true
  },
  {
    id: 'm5',
    name: 'Men\'s Chino Pants',
    description: 'Classic chino pants with a modern fit, perfect for any occasion.',
    price: 49.99,
    category: 'men',
    subcategory: 'pants',
    image: '/images/mens-pants.jpg',
    colors: ['Khaki', 'Navy', 'Olive', 'Black'],
    sizes: ['30x32', '32x32', '34x32', '36x32', '38x32']
  },
  {
    id: 'm6',
    name: 'Men\'s Polo Shirt',
    description: 'Classic polo shirt made from soft, breathable cotton.',
    price: 34.99,
    category: 'men',
    subcategory: 'polos',
    image: '/images/mens-polos.jpg',
    colors: ['Navy', 'White', 'Black', 'Red'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    bestSeller: true
  },
  {
    id: 'w1',
    name: 'Women\'s Casual Dress',
    description: 'Elegant casual dress with a flattering silhouette for everyday elegance.',
    price: 69.99,
    category: 'women',
    subcategory: 'dresses',
    image: '/images/womens-dresses.jpg',
    colors: ['Black', 'Red', 'Blue', 'Floral'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    featured: true,
    bestSeller: true
  },
  {
    id: 'w2',
    name: 'Women\'s Slim Fit Jeans',
    description: 'Stylish high-waisted slim fit jeans with stretch for ultimate comfort.',
    price: 64.99,
    category: 'women',
    subcategory: 'jeans',
    image: '/images/womens-jeans.jpg',
    colors: ['Light Blue', 'Dark Blue', 'Black', 'White'],
    sizes: ['25', '26', '27', '28', '29', '30', '31', '32'],
    newArrival: true
  },
  {
    id: 'w3',
    name: 'Women\'s Blouse',
    description: 'Elegant and versatile blouse, perfect for both office and casual wear.',
    price: 39.99,
    category: 'women',
    subcategory: 'tops',
    image: '/images/womens-tops.jpg',
    colors: ['White', 'Black', 'Pink', 'Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    featured: true
  },
  {
    id: 'w4',
    name: 'Women\'s Cardigan',
    description: 'Soft, lightweight cardigan perfect for layering in any season.',
    price: 49.99,
    category: 'women',
    subcategory: 'sweaters',
    image: '/images/womens-sweaters.jpg',
    colors: ['Gray', 'Beige', 'Black', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    newArrival: true
  },
  {
    id: 'w5',
    name: 'Women\'s Pencil Skirt',
    description: 'Classic pencil skirt with a modern fit, perfect for professional settings.',
    price: 54.99,
    category: 'women',
    subcategory: 'skirts',
    image: '/images/womens-skirts.jpg',
    colors: ['Black', 'Navy', 'Gray', 'Red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'w6',
    name: 'Women\'s T-Shirt',
    description: 'Soft and comfortable t-shirt made from premium cotton.',
    price: 24.99,
    category: 'women',
    subcategory: 'tshirts',
    image: '/images/womens-tshirts.jpg',
    colors: ['White', 'Black', 'Gray', 'Pink', 'Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    bestSeller: true
  }
];

export const getProductsByCategory = (category: 'men' | 'women') => {
  return products.filter(product => product.category === category);
};

export const getNewArrivals = () => {
  return products.filter(product => product.newArrival === true);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured === true);
};

export const getBestSellers = () => {
  return products.filter(product => product.bestSeller === true);
}; 