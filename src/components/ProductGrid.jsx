import ProductCard from "./ProductCard";

/**
 * ProductGrid — responsive grid of ProductCard components.
 * @param {array} products — array of product objects
 */
export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-sm" style={{ color: "#6B6457" }}>
          No products found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
