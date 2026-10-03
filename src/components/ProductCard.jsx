import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Eye, DoorOpen } from "lucide-react";
import { getWhatsAppUrl } from "../data/products";

/**
 * ProductCard — used in product grids.
 * @param {object} product — product data object
 * @param {number} index — animation stagger index
 */
export default function ProductCard({ product, index = 0 }) {
  const waUrl = getWhatsAppUrl(product.name);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      className="group flex flex-col bg-white border overflow-hidden"
      style={{ borderColor: "#E0D8CE" }}
    >
      {/* Image */}
      <Link
        to={`/products/${product.slug}`}
        aria-label={`View ${product.name}`}
        className="block relative overflow-hidden bg-[#EDE3D7]"
        style={{ aspectRatio: "4/3" }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <DoorPlaceholder name={product.name} category={product.categoryLabel} />
        )}

        {/* Category chip */}
        <div
          className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase px-2 py-1"
          style={{ background: "rgba(247,245,240,0.9)", color: "#3B2418" }}
        >
          {product.categoryLabel}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="font-bold mb-2"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "1.05rem",
            color: "#171717",
            lineHeight: 1.25,
          }}
        >
          <Link to={`/products/${product.slug}`} className="hover:text-[#8B5E3C] transition-colors">
            {product.name}
          </Link>
        </h3>

        <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#6B6457" }}>
          {product.shortDescription}
        </p>

        {/* Action buttons */}
        <div className="flex flex-col gap-2 mt-auto">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp enquiry for ${product.name}`}
            className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold tracking-widest uppercase text-white rounded transition-all hover:opacity-90"
            style={{ background: "#25D366" }}
          >
            <MessageCircle size={13} />
            WhatsApp for Price
          </a>
          <Link
            to={`/products/${product.slug}`}
            className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold tracking-widest uppercase border rounded transition-all hover:bg-[#171717] hover:text-white hover:border-[#171717]"
            style={{ borderColor: "#E0D8CE", color: "#171717" }}
          >
            <Eye size={13} />
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// Internal placeholder rendered when no product image is available
function DoorPlaceholder({ name, category }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3 transition-all duration-500 group-hover:scale-105"
      style={{ background: "linear-gradient(145deg, #EDE3D7, #D8C8B5)" }}
    >
      <div
        className="w-16 h-20 rounded-sm flex items-center justify-center border-2"
        style={{ borderColor: "rgba(59,36,24,0.3)", background: "rgba(59,36,24,0.08)" }}
      >
        <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
          <rect x="2" y="2" width="28" height="36" rx="1" stroke="#8B5E3C" strokeWidth="1.5"/>
          <rect x="5" y="5" width="22" height="14" rx="0.5" stroke="#8B5E3C" strokeWidth="1"/>
          <rect x="5" y="22" width="22" height="11" rx="0.5" stroke="#8B5E3C" strokeWidth="1"/>
          <circle cx="25" cy="20" r="1.5" fill="#8B5E3C"/>
        </svg>
      </div>
      <div className="text-center px-3">
        <p className="text-xs font-semibold tracking-wide" style={{ color: "#3B2418" }}>{name}</p>
        <p className="text-[10px] mt-0.5" style={{ color: "#8B5E3C" }}>{category}</p>
      </div>
    </div>
  );
}
