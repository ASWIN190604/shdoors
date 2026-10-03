import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, MapPin, Calendar, ChevronDown } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ProductGrid from "../components/ProductGrid";
import { featuredProducts, HOME_CATEGORIES, PHONE_NUMBER, WHATSAPP_NUMBER, getWhatsAppUrl } from "../data/products";

const waUrl = getWhatsAppUrl();

// ─── Hero ────────────────────────────────────────────────────
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="S.S.T. Doors hero"
    >
      {/* Background — architectural wood pattern */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: bgY,
          background: `
            linear-gradient(
              160deg,
              #1A0F09 0%,
              #2D1A0E 30%,
              #3B2418 55%,
              #1A0F09 100%
            )
          `,
        }}
      >
        {/* Textured wood pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(216,200,181,0.15) 2px,
              rgba(216,200,181,0.15) 4px
            )`,
          }}
        />
        {/* Large door silhouette */}
        <div className="absolute inset-0 flex items-center justify-end opacity-8">
          <svg
            viewBox="0 0 400 700"
            fill="none"
            className="w-72 md:w-96 lg:w-[500px] h-full opacity-[0.07] translate-x-8"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect x="20" y="20" width="360" height="660" rx="4" stroke="#D8C8B5" strokeWidth="3" fill="none"/>
            <rect x="50" y="50" width="300" height="240" rx="2" stroke="#D8C8B5" strokeWidth="2" fill="none"/>
            <rect x="50" y="320" width="300" height="240" rx="2" stroke="#D8C8B5" strokeWidth="2" fill="none"/>
            <rect x="50" y="590" width="300" height="70" rx="2" stroke="#D8C8B5" strokeWidth="1.5" fill="none"/>
            <circle cx="340" cy="350" r="10" stroke="#8B5E3C" strokeWidth="2.5"/>
          </svg>
        </div>
        {/* Warm light gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(139,94,60,0.15) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 w-full py-32">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block w-8 h-px" style={{ background: "#8B5E3C" }} />
            <span
              className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase"
              style={{ color: "#D8C8B5" }}
            >
              S.S.T. DOORS · ERODE · TAMIL NADU
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
              lineHeight: 1.07,
              letterSpacing: "-0.02em",
              color: "#F7F5F0",
              fontWeight: 700,
            }}
          >
            CRAFTED FOR
            <br />
            <em style={{ color: "#D8C8B5", fontStyle: "italic", fontWeight: 400 }}>
              EVERY ENTRANCE.
            </em>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6, origin: "left" }}
            className="my-8 w-16 h-px origin-left"
            style={{ background: "#8B5E3C" }}
          />

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-base md:text-lg leading-relaxed mb-3 max-w-xl"
            style={{ color: "rgba(216,200,181,0.85)" }}
          >
            Wooden doors crafted for homes, projects and spaces that deserve a lasting first impression.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="text-sm leading-relaxed mb-10 max-w-lg"
            style={{ color: "rgba(216,200,181,0.6)" }}
          >
            Manufacturer &amp; wholesaler of wooden doors, teak wood doors, flush doors and related door products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              to="/products"
              className="group flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-250"
              style={{
                background: "#F7F5F0",
                color: "#171717",
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "#D8C8B5"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "#F7F5F0"; }}
            >
              Explore Our Doors
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-widest uppercase text-white transition-all duration-250"
              style={{ background: "#25D366" }}
              onMouseOver={(e) => { e.currentTarget.style.background = "#1ebe5d"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "#25D366"; }}
            >
              <MessageCircle size={14} />
              WhatsApp Enquiry
            </a>
          </motion.div>

          {/* Info pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="flex items-center gap-6 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <Calendar size={12} style={{ color: "#8B5E3C" }} />
              <span className="text-xs" style={{ color: "rgba(216,200,181,0.6)" }}>
                Est. 2021
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} style={{ color: "#8B5E3C" }} />
              <span className="text-xs" style={{ color: "rgba(216,200,181,0.6)" }}>
                Erode, Tamil Nadu
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(216,200,181,0.4)" }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Category Cards ──────────────────────────────────────────
function CategoryCard({ cat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      <Link
        to={`/products?cat=${cat.id}`}
        className="group block border overflow-hidden relative"
        style={{ borderColor: "#E0D8CE", background: "#fff" }}
        aria-label={`Browse ${cat.label}`}
      >
        {/* Color band at top */}
        <div className="h-1.5 w-full" style={{ background: cat.color }} />

        {/* Door icon */}
        <div
          className="flex items-center justify-center py-8"
          style={{ background: "#F7F5F0" }}
        >
          <div
            className="w-16 h-20 border-2 flex items-center justify-center relative transition-transform duration-400 group-hover:scale-105"
            style={{ borderColor: cat.color, background: "rgba(255,255,255,0.8)" }}
          >
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
              <rect x="2" y="2" width="28" height="36" rx="1" stroke={cat.color} strokeWidth="1.5"/>
              <rect x="5" y="5" width="22" height="14" rx="0.5" stroke={cat.color} strokeWidth="1" opacity="0.5"/>
              <rect x="5" y="22" width="22" height="11" rx="0.5" stroke={cat.color} strokeWidth="1" opacity="0.5"/>
              <circle cx="25" cy="20" r="1.5" fill={cat.color}/>
            </svg>
          </div>
        </div>

        <div className="px-5 pb-5">
          <h3
            className="font-bold mb-1.5 group-hover:text-[#8B5E3C] transition-colors"
            style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.05rem", color: "#171717" }}
          >
            {cat.label}
          </h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B6457" }}>
            {cat.description}
          </p>
          <div
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase transition-colors group-hover:text-[#8B5E3C]"
            style={{ color: "#6B6457" }}
          >
            View Category
            <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Why Section ─────────────────────────────────────────────
const WHY_POINTS = [
  {
    num: "01",
    title: "Wide Product Range",
    desc: "Wooden, teak, flush, membrane and plywood door options to suit diverse requirements.",
  },
  {
    num: "02",
    title: "Direct Manufacturer",
    desc: "Contact the business directly for requirements and pricing without middlemen.",
  },
  {
    num: "03",
    title: "Product Variety",
    desc: "Different finishes, designs, materials and applications available in the catalog.",
  },
  {
    num: "04",
    title: "Direct Communication",
    desc: "Enquiries handled directly through WhatsApp and phone for faster response.",
  },
];

function WhySection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#171717" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <SectionHeading
          label="Why Choose Us"
          title="Why S.S.T. Doors"
          subtitle="What makes S.S.T. Doors a reliable choice for your door requirements."
          light
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {WHY_POINTS.map((pt, i) => (
            <motion.div
              key={pt.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="p-6 border"
              style={{ borderColor: "#2A2520" }}
            >
              <span
                className="block text-3xl font-bold mb-4"
                style={{ fontFamily: '"Playfair Display", serif', color: "#3B2418" }}
              >
                {pt.num}
              </span>
              <h3
                className="font-semibold mb-2.5"
                style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.05rem", color: "#F7F5F0" }}
              >
                {pt.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#9B9286" }}>
                {pt.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="page-with-mobile-cta">
      {/* Hero */}
      <Hero />

      {/* Categories */}
      <section className="py-20 md:py-28" style={{ background: "#F7F5F0" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeading
            label="Our Collection"
            title="Doors for Every Space."
            subtitle="Explore our range of wooden, teak, flush, membrane and plywood doors for residential and project requirements."
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mt-12">
            {HOME_CATEGORIES.map((cat, i) => (
              <CategoryCard key={cat.id} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28" style={{ background: "#EDE9E1" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              label="Featured Doors"
              title="Featured Products"
              align="left"
            />
            <Link
              to="/products"
              className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border py-3 px-6 transition-all hover:bg-[#171717] hover:text-white hover:border-[#171717]"
              style={{ borderColor: "#E0D8CE", color: "#171717" }}
            >
              View All Doors
              <ArrowRight size={12} />
            </Link>
          </div>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Why us */}
      <WhySection />

      {/* CTA Banner */}
      <section
        className="py-16 md:py-20"
        style={{
          background: "linear-gradient(135deg, #3B2418 0%, #8B5E3C 100%)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "rgba(216,200,181,0.7)" }}
          >
            Ready to enquire?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bold mb-4"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              color: "#F7F5F0",
              lineHeight: 1.15,
            }}
          >
            Let's Talk About Your Door.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm mb-8 max-w-md mx-auto"
            style={{ color: "rgba(216,200,181,0.75)" }}
          >
            Contact S.S.T. Doors directly on WhatsApp or phone to discuss your requirement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-widest uppercase text-white"
              style={{ background: "#25D366" }}
            >
              <MessageCircle size={14} />
              WhatsApp Us
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-widest uppercase border border-white/40 text-white hover:bg-white/10 transition-all"
            >
              <Phone size={14} />
              Call Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
