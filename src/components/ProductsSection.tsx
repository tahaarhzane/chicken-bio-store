import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Poulet Bio entier - Ferme",
    price: 12.99,
    originalPrice: 15.99,
    image: "/images/products/whole-chicken.jpg",
    weight: "Approx. 1.2kg - 1.5kg",
    badge: "PROMO",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 2,
    name: "Blanc de poulet bio - Filet",
    price: 18.50,
    image: "/images/products/chicken-breast.jpg",
    weight: "Approx. 500g",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 3,
    name: "Cuisses de poulet bio",
    price: 8.99,
    originalPrice: 10.99,
    image: "/images/products/chicken-thighs.jpg",
    weight: "Approx. 600g (4 pièces)",
    badge: "PROMO",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 4,
    name: "Ailes de poulet bio - BBQ",
    price: 6.99,
    image: "/images/products/chicken-wings.jpg",
    weight: "Approx. 400g",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 5,
    name: "Pilons de poulet bio",
    price: 5.99,
    image: "/images/products/chicken-drumsticks.jpg",
    weight: "Approx. 500g (4 pièces)",
    rating: 4.4,
    inStock: false,
  },
  {
    id: 6,
    name: "Mélange grillade poulet bio",
    price: 14.99,
    originalPrice: 17.99,
    image: "/images/products/grill-mix.jpg",
    weight: "Approx. 800g",
    badge: "PROMO",
    rating: 4.9,
    inStock: true,
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Produits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de poulets biologiques, élevés en plein air dans le respect
            de la nature et du bien-être animal.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-primary hover:bg-primary-dark text-white px-12 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center gap-3 shadow-lg hover:shadow-xl">
            Voir tous nos produits
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}