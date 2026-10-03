import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import CategoryFilter from "../components/CategoryFilter";
import ProductGrid from "../components/ProductGrid";
import { products, getProductsByCategory } from "../data/products";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [filtered, setFiltered] = useState(getProductsByCategory(initialCat));

  // Sync URL param → state
  useEffect(() => {
    const cat = searchParams.get("cat") || "all";
    setActiveCategory(cat);
    setFiltered(getProductsByCategory(cat));
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setFiltered(getProductsByCategory(catId));
    setSearchParams(catId !== "all" ? { cat: catId } : {});
  };

  // Dynamic page title
  useEffect(() => {
    document.title = "Our Door Collection | S.S.T. Doors";
    return () => { document.title = "S.S.T. Doors | Wooden Doors, Teak Doors & Flush Doors in Erode"; };
  }, []);

  return (
    <div className="page-with-mobile-cta">
      {/* Page Hero */}
      <section
        className="pt-36 pb-16 md:pt-44 md:pb-20"
        style={{ background: "#171717" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px" style={{ background: "#8B5E3C" }} />
              <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "#8B5E3C" }}>
                S.S.T. Doors
              </span>
            </div>
            <h1
              className="font-bold mb-4"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#F7F5F0",
                lineHeight: 1.1,
              }}
            >
              Our Door Collection
            </h1>
            <p className="text-sm md:text-base" style={{ color: "#9B9286" }}>
              Explore the S.S.T. Doors catalog — {products.length} products across {7} categories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-12 md:py-16" style={{ background: "#F7F5F0" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          {/* Filter bar */}
          <div className="mb-8 md:mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
              <p className="text-sm" style={{ color: "#6B6457" }}>
                Showing{" "}
                <strong style={{ color: "#171717" }}>{filtered.length}</strong>{" "}
                {filtered.length === 1 ? "product" : "products"}
                {activeCategory !== "all" && (
                  <span>
                    {" "}in <strong style={{ color: "#8B5E3C" }}>{activeCategory}</strong>
                  </span>
                )}
              </p>
            </div>
            <CategoryFilter active={activeCategory} onChange={handleCategoryChange} />
          </div>

          {/* Grid */}
          <ProductGrid products={filtered} />
        </div>
      </section>
    </div>
  );
}
