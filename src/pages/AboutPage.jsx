import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, Building2, Package, Phone, MessageCircle, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { WHATSAPP_NUMBER, PHONE_NUMBER, getWhatsAppUrl } from "../data/products";

const waUrl = getWhatsAppUrl();

// ─── Company stat card ───────────────────────────────────────
function InfoCard({ icon: Icon, label, value, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="flex flex-col items-start p-6 border"
      style={{ borderColor: "#E0D8CE", background: "#fff" }}
    >
      <div
        className="w-10 h-10 rounded flex items-center justify-center mb-4"
        style={{ background: "#F7F5F0" }}
      >
        <Icon size={18} style={{ color: "#8B5E3C" }} />
      </div>
      <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#6B6457" }}>
        {label}
      </p>
      <p
        className="font-bold"
        style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.15rem", color: "#171717" }}
      >
        {value}
      </p>
    </motion.div>
  );
}

// ─── Why points ──────────────────────────────────────────────
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

export default function AboutPage() {
  useEffect(() => {
    document.title = "About S.S.T. Doors | Wooden Door Manufacturer in Erode";
    return () => {
      document.title = "S.S.T. Doors | Wooden Doors, Teak Doors & Flush Doors in Erode";
    };
  }, []);

  return (
    <div className="page-with-mobile-cta">
      {/* Hero */}
      <section
        className="pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden"
        style={{ background: "#171717" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              rgba(216,200,181,0.3) 3px,
              rgba(216,200,181,0.3) 4px
            )`,
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px" style={{ background: "#8B5E3C" }} />
              <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "#8B5E3C" }}>
                Our Story
              </span>
            </div>
            <h1
              className="font-bold mb-6"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                color: "#F7F5F0",
                lineHeight: 1.1,
                maxWidth: "700px",
              }}
            >
              About S.S.T. Doors
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed mb-4"
              style={{ color: "rgba(216,200,181,0.8)", maxWidth: "600px" }}
            >
              S.S.T. Doors is a manufacturer and wholesaler of wooden doors, teak wood doors, flush doors and related door products based in Erode, Tamil Nadu.
            </p>
            <p className="text-sm" style={{ color: "rgba(216,200,181,0.5)" }}>
              Established in 2021.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-16 md:py-20" style={{ background: "#EDE9E1" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <InfoCard icon={Calendar} label="Established" value="2021" delay={0} />
            <InfoCard icon={MapPin} label="Location" value="Erode, Tamil Nadu" delay={0.1} />
            <InfoCard icon={Building2} label="Business Type" value="Manufacturer & Wholesaler" delay={0.2} />
            <InfoCard icon={Package} label="Product Range" value="5+ Door Categories" delay={0.3} />
          </div>
        </div>
      </section>

      {/* About text */}
      <section className="py-16 md:py-24" style={{ background: "#F7F5F0" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                label="About the Business"
                title="Wooden Doors from Erode."
                align="left"
              />

              <div className="mt-6 space-y-4 text-sm leading-relaxed" style={{ color: "#6B6457" }}>
                <p>
                  S.S.T. Doors is a manufacturer and wholesaler of wooden doors and related door products based in Erode, Tamil Nadu. Established in 2021, the business serves customers looking for quality wooden, teak, flush, membrane and plywood doors.
                </p>
                <p>
                  The product range includes doors suitable for residential homes, offices, commercial spaces and project requirements. Customers can enquire directly through WhatsApp or phone for pricing, availability and custom requirements.
                </p>
                <p>
                  As a direct manufacturer, S.S.T. Doors provides straightforward communication — no intermediaries — allowing customers to discuss their specific door requirements directly with the business.
                </p>
              </div>

              {/* Product types */}
              <div className="mt-8">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#8B5E3C" }}>
                  Product Range
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Wooden Doors",
                    "Teak Wood Doors",
                    "Flush Doors",
                    "Membrane Doors",
                    "Plywood Doors",
                    "Interior Doors",
                    "Exterior Doors",
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 border font-medium"
                      style={{ borderColor: "#E0D8CE", color: "#3B2418", background: "#fff" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase py-3 px-6 border transition-all hover:bg-[#171717] hover:text-white hover:border-[#171717]"
                  style={{ borderColor: "#E0D8CE", color: "#171717" }}
                >
                  Explore Products
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>

            {/* Facility visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Facility block */}
              <div
                className="border p-8"
                style={{ borderColor: "#E0D8CE", background: "#fff" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-6 h-px" style={{ background: "#8B5E3C" }} />
                  <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "#8B5E3C" }}>
                    Our Facility
                  </span>
                </div>
                
                {/* Architectural door display */}
                <div
                  className="flex items-center justify-center mb-6 py-10"
                  style={{ background: "#F7F5F0" }}
                >
                  <div className="relative">
                    {/* Main door */}
                    <div
                      className="border-2"
                      style={{ borderColor: "#8B5E3C", width: "120px", height: "180px", background: "rgba(216,200,181,0.3)" }}
                    >
                      <div className="absolute inset-3 border opacity-50" style={{ borderColor: "#8B5E3C" }} />
                      <div
                        className="absolute border"
                        style={{ borderColor: "#8B5E3C", top: "12px", left: "12px", right: "12px", height: "70px" }}
                      />
                      <div
                        className="absolute border"
                        style={{ borderColor: "#8B5E3C", top: "92px", left: "12px", right: "12px", height: "50px" }}
                      />
                      <div
                        className="absolute right-3 rounded-full"
                        style={{ background: "#8B5E3C", width: "8px", height: "8px", top: "50%" }}
                      />
                    </div>
                    {/* Shadow */}
                    <div
                      className="absolute -bottom-2 -right-2 -z-10 border-2"
                      style={{ borderColor: "rgba(139,94,60,0.2)", width: "120px", height: "180px" }}
                    />
                  </div>
                </div>

                <p
                  className="font-bold mb-3"
                  style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.1rem", color: "#171717" }}
                >
                  Erode, Tamil Nadu
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B6457" }}>
                  Located in Erode, Tamil Nadu, S.S.T. Doors operates from its manufacturing and business facility serving wooden door requirements.
                </p>
                <div className="flex items-center gap-2 text-sm" style={{ color: "#8B5E3C" }}>
                  <MapPin size={13} />
                  <span className="font-medium">Erode, Tamil Nadu, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 md:py-24" style={{ background: "#171717" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeading
            label="Why Choose Us"
            title="Why S.S.T. Doors"
            subtitle="Factual reasons to choose S.S.T. Doors for your door requirements."
            light
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {WHY_POINTS.map((pt, i) => (
              <motion.div
                key={pt.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

      {/* CTA */}
      <section
        className="py-16 md:py-20"
        style={{ background: "linear-gradient(135deg, #3B2418 0%, #8B5E3C 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "#F7F5F0",
            }}
          >
            Ready to Discuss Your Requirement?
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "rgba(216,200,181,0.75)" }}>
            Contact S.S.T. Doors directly to discuss your door requirements and get the latest pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waUrl}
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
          </div>
        </div>
      </section>
    </div>
  );
}
