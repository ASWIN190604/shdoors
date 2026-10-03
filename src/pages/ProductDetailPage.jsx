import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageCircle, Package, ChevronRight } from "lucide-react";
import { getProductBySlug, getWhatsAppUrl, PHONE_NUMBER, WHATSAPP_NUMBER, products } from "../data/products";
import ProductCard from "../components/ProductCard";

// ─── Door SVG Placeholder ───────────────────────────────────
function LargeDoorPlaceholder({ name, color = "#8B5E3C" }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4"
      style={{ background: "linear-gradient(145deg, #EDE3D7, #D8C8B5)", minHeight: "400px" }}
    >
      <div
        className="border-2 flex items-center justify-center relative"
        style={{
          borderColor: color,
          background: "rgba(255,255,255,0.5)",
          width: "120px",
          height: "170px",
          borderRadius: "1px",
        }}
      >
        <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
          <rect x="3" y="3" width="74" height="114" rx="1.5" stroke={color} strokeWidth="2"/>
          <rect x="10" y="10" width="60" height="44" rx="1" stroke={color} strokeWidth="1.5" opacity="0.5"/>
          <rect x="10" y="60" width="60" height="34" rx="1" stroke={color} strokeWidth="1.5" opacity="0.5"/>
          <rect x="10" y="100" width="60" height="14" rx="0.5" stroke={color} strokeWidth="1" opacity="0.3"/>
          <circle cx="68" cy="60" r="3.5" fill={color}/>
        </svg>
      </div>
      <p className="text-sm font-medium text-center px-6" style={{ color: "#3B2418", fontFamily: '"Playfair Display", serif' }}>
        {name}
      </p>
    </div>
  );
}

// ─── Specification Row ───────────────────────────────────────
function SpecRow({ label, value }) {
  if (!value || value === "" || value === "undefined") return null;
  return (
    <div
      className="flex items-start justify-between py-3 border-b text-sm"
      style={{ borderColor: "#E0D8CE" }}
    >
      <dt
        className="text-[11px] font-semibold tracking-widest uppercase w-2/5"
        style={{ color: "#6B6457" }}
      >
        {label}
      </dt>
      <dd className="w-3/5 text-right" style={{ color: "#171717" }}>
        {value}
      </dd>
    </div>
  );
}

// ─── Product Detail Page ─────────────────────────────────────
export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);

  // Dynamic title
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | S.S.T. Doors`;
    } else {
      document.title = "Product Not Found | S.S.T. Doors";
    }
    return () => {
      document.title = "S.S.T. Doors | Wooden Doors, Teak Doors & Flush Doors in Erode";
    };
  }, [product]);

  // If not found
  if (!product) {
    return (
      <div className="page-with-mobile-cta min-h-screen flex items-center justify-center" style={{ background: "#F7F5F0" }}>
        <div className="text-center px-6">
          <h1
            className="font-bold mb-4"
            style={{ fontFamily: '"Playfair Display", serif', fontSize: "2rem", color: "#171717" }}
          >
            Product Not Found
          </h1>
          <p className="text-sm mb-8" style={{ color: "#6B6457" }}>
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-6 py-3 border"
            style={{ borderColor: "#E0D8CE", color: "#171717" }}
          >
            <ArrowLeft size={13} />
            View All Products
          </Link>
        </div>
      </div>
    );
  }

  const waUrl = getWhatsAppUrl(product.name);
  const hasSpecs = product.specifications && Object.keys(product.specifications).length > 0;

  // Related products (same category, exclude self, max 4)
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="page-with-mobile-cta" style={{ background: "#F7F5F0" }}>
      {/* Breadcrumb */}
      <div
        className="pt-20 pb-4 border-b"
        style={{ borderColor: "#E0D8CE", background: "#EDE9E1" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs" style={{ color: "#6B6457" }}>
            <Link to="/" className="hover:text-[#8B5E3C] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link to="/products" className="hover:text-[#8B5E3C] transition-colors">Products</Link>
            <ChevronRight size={10} />
            <span style={{ color: "#171717" }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product layout */}
      <section className="py-10 md:py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1"
            >
              <div
                className="w-full overflow-hidden border"
                style={{ borderColor: "#E0D8CE", borderRadius: "2px", minHeight: "420px" }}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    style={{ minHeight: "420px" }}
                  />
                ) : (
                  <LargeDoorPlaceholder name={product.name} />
                )}
              </div>

              {/* Gallery thumbnails (if any) */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {product.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden border cursor-pointer hover:opacity-80 transition-opacity"
                      style={{ borderColor: "#E0D8CE" }}
                    >
                      <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right: Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-2 flex flex-col"
            >
              {/* Category badge */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 border"
                  style={{ borderColor: "#8B5E3C", color: "#8B5E3C" }}
                >
                  {product.categoryLabel}
                </span>
              </div>

              {/* Product name */}
              <h1
                className="font-bold mb-4"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  color: "#171717",
                  lineHeight: 1.15,
                }}
              >
                {product.name}
              </h1>

              {/* Description */}
              <p
                className="leading-relaxed mb-6 text-sm md:text-base"
                style={{ color: "#6B6457", borderLeft: "3px solid #D8C8B5", paddingLeft: "1rem" }}
              >
                {product.description}
              </p>

              {/* Price note */}
              <div
                className="flex items-center gap-3 py-4 px-5 mb-6 border"
                style={{ borderColor: "#E0D8CE", background: "#fff" }}
              >
                <Package size={16} style={{ color: "#8B5E3C", flexShrink: 0 }} />
                <div>
                  <p className="text-xs font-semibold tracking-wide uppercase mb-0.5" style={{ color: "#8B5E3C" }}>
                    Get Latest Price
                  </p>
                  <p className="text-xs" style={{ color: "#6B6457" }}>
                    Contact us directly for current pricing and availability.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 mb-8">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-4 text-sm font-semibold tracking-widest uppercase text-white transition-all hover:opacity-90"
                  style={{ background: "#25D366" }}
                  aria-label={`WhatsApp enquiry for ${product.name}`}
                >
                  <MessageCircle size={16} />
                  WhatsApp for Price
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2.5 py-4 text-sm font-semibold tracking-widest uppercase border transition-all hover:bg-[#171717] hover:text-white hover:border-[#171717]"
                  style={{ borderColor: "#E0D8CE", color: "#171717" }}
                  aria-label="Call S.S.T. Doors"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>

              {/* Specifications */}
              {hasSpecs && (
                <div>
                  <h2
                    className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ color: "#6B6457" }}
                  >
                    Specifications
                  </h2>
                  <dl>
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <SpecRow key={key} label={key} value={val} />
                    ))}
                  </dl>
                </div>
              )}

              {/* Back link */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: "#E0D8CE" }}>
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-colors hover:text-[#8B5E3C]"
                  style={{ color: "#6B6457" }}
                >
                  <ArrowLeft size={12} />
                  Back
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 md:py-20" style={{ background: "#EDE9E1" }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <h2
              className="font-bold mb-10"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#171717",
              }}
            >
              Related Doors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
