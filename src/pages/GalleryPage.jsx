import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Lightbox from "../components/Lightbox";
import SectionHeading from "../components/SectionHeading";

// ─── Gallery items ───────────────────────────────────────────
// Each item: { id, src, alt, category, size }
// size: "normal" | "wide" | "tall" — for masonry-style grid
// Since no images are uploaded, we render rich visual placeholders.

const GALLERY_ITEMS = [
  { id: "g01", src: null, alt: "Teak Wood Door Collection", category: "Products", size: "tall" },
  { id: "g02", src: null, alt: "Grey Laminated Flush Door", category: "Products", size: "normal" },
  { id: "g03", src: null, alt: "Door Showroom Display", category: "Showroom", size: "normal" },
  { id: "g04", src: null, alt: "Brown Interior Wooden Door", category: "Products", size: "wide" },
  { id: "g05", src: null, alt: "S.S.T. Doors Business Signboard", category: "Facility", size: "normal" },
  { id: "g06", src: null, alt: "Plywood Door Range", category: "Products", size: "normal" },
  { id: "g07", src: null, alt: "Manufacturing Workspace", category: "Facility", size: "tall" },
  { id: "g08", src: null, alt: "Dark Brown Teak Door", category: "Products", size: "normal" },
  { id: "g09", src: null, alt: "Door Collection Display", category: "Showroom", size: "normal" },
  { id: "g10", src: null, alt: "Exterior Plywood Doors", category: "Products", size: "wide" },
  { id: "g11", src: null, alt: "Black Teak Wood Door", category: "Products", size: "normal" },
  { id: "g12", src: null, alt: "Membrane Door Closeup", category: "Products", size: "normal" },
];

// ─── Gallery Placeholder ─────────────────────────────────────
const CATEGORY_COLORS = {
  Products: { bg: "#EDE3D7", border: "#8B5E3C", text: "#3B2418" },
  Showroom: { bg: "#E5DDD3", border: "#6B4628", text: "#2D1A0E" },
  Facility: { bg: "#E0D5C8", border: "#5C3D2E", text: "#2D1A0E" },
};

function GalleryPlaceholder({ alt, category, index }) {
  const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS.Products;
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden"
      style={{ background: colors.bg }}
    >
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 8px,
            rgba(139,94,60,0.2) 8px,
            rgba(139,94,60,0.2) 9px
          )`,
        }}
      />
      {/* Door icon */}
      <div
        className="relative z-10 border-2"
        style={{ borderColor: colors.border, width: "52px", height: "72px", background: "rgba(255,255,255,0.4)" }}
      >
        <div
          className="absolute border"
          style={{ borderColor: colors.border, top: "6px", left: "6px", right: "6px", height: "25px", opacity: 0.5 }}
        />
        <div
          className="absolute border"
          style={{ borderColor: colors.border, top: "37px", left: "6px", right: "6px", height: "18px", opacity: 0.5 }}
        />
        <div
          className="absolute rounded-full"
          style={{ background: colors.border, width: "5px", height: "5px", right: "8px", top: "50%", transform: "translateY(-50%)" }}
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <p className="text-xs font-semibold" style={{ color: colors.text }}>{alt}</p>
        <p className="text-[10px] mt-0.5 font-medium tracking-wider uppercase" style={{ color: colors.border }}>{category}</p>
      </div>
    </div>
  );
}

// ─── GalleryGrid ─────────────────────────────────────────────
function GalleryGrid({ items, onItemClick }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]">
      {items.map((item, index) => {
        const isWide = item.size === "wide";
        const isTall = item.size === "tall";

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
            className={[
              "relative overflow-hidden cursor-pointer group border",
              isWide ? "col-span-2" : "",
              isTall ? "row-span-2" : "",
            ].join(" ")}
            style={{ borderColor: "#E0D8CE" }}
            onClick={() => onItemClick(index)}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.alt}`}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onItemClick(index); }}
          >
            {item.src ? (
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-107"
              />
            ) : (
              <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                <GalleryPlaceholder alt={item.alt} category={item.category} index={index} />
              </div>
            )}

            {/* Overlay on hover */}
            <div
              className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to top, rgba(23,23,23,0.75) 0%, transparent 50%)" }}
            >
              <div>
                <p className="text-xs font-semibold text-white leading-tight">{item.alt}</p>
                <p className="text-[10px] mt-0.5" style={{ color: "#D8C8B5" }}>{item.category}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── Gallery Page ─────────────────────────────────────────────
export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.title = "Gallery | S.S.T. Doors";
    return () => {
      document.title = "S.S.T. Doors | Wooden Doors, Teak Doors & Flush Doors in Erode";
    };
  }, []);

  const lightboxImages = GALLERY_ITEMS.map((item) => ({
    src: item.src || "",
    alt: item.alt,
  }));

  const openLightbox = useCallback((index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const prevImage = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, []);
  const nextImage = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % GALLERY_ITEMS.length);
  }, []);

  return (
    <div className="page-with-mobile-cta">
      {/* Hero */}
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
                Gallery
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
              Inside S.S.T. Doors
            </h1>
            <p className="text-sm md:text-base" style={{ color: "#9B9286" }}>
              A look at our products, workspace and manufacturing environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-12 md:py-16" style={{ background: "#F7F5F0" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <GalleryGrid items={GALLERY_ITEMS} onItemClick={openLightbox} />
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  );
}
